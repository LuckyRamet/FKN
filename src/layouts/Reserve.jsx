import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReservedContext, {
  ReservedContextProvider,
} from "../contexts/ReserveContext";
import './Rese.css';

export default function Reserved() {
  return (
    <ReservedContextProvider>
      <ReserveDashboard />
    </ReservedContextProvider>
  );
}

function ReserveDashboard() {
  const { data } = useContext(ReservedContext);
  
  return (
    <div>
      {data && data.map(el => (
        <ReserveItem key={el.id} item={el} />
        
      ))}
    </div>
  )
}

function ReserveItem({ item }) {

  const navigate = useNavigate()

  const hdlClick = () => {
    navigate('/editresrve/' + item.id)
  }
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <table className='reserve-table'>
        <tbody>
          <tr>
            
          </tr>
          <tr>
            <th>Datetime</th>
            <td>{new Date(item.datetime).toUTCString().split("GMT")}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{item.phone}</td>
          </tr>
          <tr>
            <th>Disease</th>
            <td>{item.disease}</td>
          </tr>
          <tr>
      
    </tr>
        </tbody>
      </table>

      <button
        onClick={hdlClick}
        style={{
          backgroundColor: '#FFC0CB', // Pink color
          color: '#fff', // White text
          padding: '8px 12px', // Adjust padding as needed
          border: 'none', // Remove border
          borderRadius: '5px', // Add rounded corners
          cursor: 'pointer', // Change cursor on hover
        }}
      // onClick={() => handleEdit(item.id)}
      >
        Edit

      </button>
    </div>



  )
}