import React, { useContext, useState } from 'react'
import InfoContext, { InfoContextProvider } from '../contexts/infoContext'
import'./info.css';
export default function Information() {
  
  return (
   <InfoContextProvider>
    <InfoDashboard/>
   </InfoContextProvider>
    
  )
}

function InfoDashboard() {
  const {data} = useContext(InfoContext)
  // console.log(data)

  return (
   <div>
  {data && <Infor data={data}/>}
   </div>
  );
  
}

function Infor({data}) {
return (
  <div>
      <table className='user-table'>
        <thead>
          <tr>
            <th>Card ID</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.card_id}</td>
            <td>{data.name}</td>
            <td>{data.lastname}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
)
}