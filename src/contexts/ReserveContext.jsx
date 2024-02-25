import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ReservedContext = createContext()

function ReservedContextProvider(props) {
  const [data, setData] = useState(null)
  const [adminData, setAdminData] = useState(null)

  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get("http://localhost:8889/booking/show",{
          headers : { Authorization : `Bearer ${token}` }
        })
        // console.log(rs.data)
        setData(rs.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [])

  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get("http://localhost:8889/booking/admin/show",{
          headers : { Authorization : `Bearer ${token}` }
        })
        // console.log(rs.data)
        setAdminData(rs.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [])

  const createBooking = async (input) => {
    try {
      console.log(input);
      const rs = await axios.post(`http://localhost:8889/booking/creacte/`, input)
      if (rs.status === 200) {
        alert('Create new OK')

      }

    } catch (err) {
      alert(err.message)
    }
  }

  const deleteReserved = async (bookingId) => {
    try {
        const re = await axios.delete(`http://localhost:8889/booking//delete/${bookingId}`);
        if (re.status === 200) {
            alert('Delete Successfully')
        }

    } catch (error) {
        alert(error.message)
        
    }
  }

  return (
    <ReservedContext.Provider value={{ data, createBooking, adminData, deleteReserved }}>
      {props.children}
    </ReservedContext.Provider>
  );
}


export default ReservedContext;
export { ReservedContextProvider };