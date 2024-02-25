/* eslint-disable react/prop-types */
import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

const InfoContext = createContext()

function InfoContextProvider(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( ()=>{
    const run = async () => {
      try {
        setLoading(true)
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get('http://localhost:8889/info/infomation', {
          headers : { Authorization : `Bearer ${token}` }
        })
        setData(rs.data)
      }catch(err) {
        console.log(err.message)
      }finally {
        setLoading(false)
      }   
    }
    run()
  }, [])


  return (
    <InfoContext.Provider value={ {data, setData, loading} }>
      {props.children}
    </InfoContext.Provider>
  )
}

export { InfoContextProvider }
export default InfoContext