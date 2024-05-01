import React, { useContext, useState } from 'react'
import InfoContext, { InfoContextProvider } from '../contexts/infoContext'
import'./info.css';
import {Link,useNavigate} from 'react-router-dom'
export default function Information() {
  
  return (
   <InfoContextProvider>
    <InfoDashboard/>
   </InfoContextProvider>
    
  )
}

const navigate = useNavigate

function InfoDashboard() {
  const {data} = useContext(InfoContext)
  // console.log(data)
  const hdlEdit = () => {
    navigate('/edit')
  }

  return (
   <div>
  {data && <Infor data={data}/>}
   </div>
  );
  
}

function Infor({data}) {
return (
  <div className='container mx-auto p-4'>
  <div className='flex items-center justify-between'>
    <table className='user-table bg-white border border-gray-300'>
      <thead className='bg-pink-500 text-white'>
        <tr>
          <th className='py-2 px-4 border-b'>Card ID</th>
          <th className='py-2 px-4 border-b'>Name</th>
          <th className='py-2 px-4 border-b'>Lastname</th>
          <th className='py-2 px-4 border-b'>Email</th>
          <th className='py-2 px-4 border-b'></th> {/* Empty header cell for the button */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='py-2 px-4 border-b'>{data.card_id}</td>
          <td className='py-2 px-4 border-b'>{data.name}</td>
          <td className='py-2 px-4 border-b'>{data.lastname}</td>
          <td className='py-2 px-4 border-b'>{data.email}</td>
          <td className='py-2 px-4 border-b'>
            <Link to='/edit'  className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'>
              Edit
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
)
}