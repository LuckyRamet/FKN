import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, {
    ReservedContextProvider,
} from "../contexts/ReserveContext";
import'./Rese.css';

export default function Reserved() {
    return (
        <ReservedContextProvider>
            <ReserveDashboard />
        </ReservedContextProvider>
    );
}

function ReserveDashboard() {
    const { data } = useContext(ReservedContext);

    console.log(data);

    return (
        <div>
            {data && data.map(el => (
                <ReserveItem key={el.id} item={el}/>
            ))}
        </div>
    )
}

function ReserveItem({item}) {
    return (
        <div>
        <table className='reserve-table'>
          <tbody>
            <tr>
              <th>User ID</th>
              <td>{item.user_id}</td>
            </tr>
            <tr>
              <th>Datetime</th>
              <td>{item.datetime}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{item.phone}</td>
            </tr>
            <tr>
              <th>Disease</th>
              <td>{item.disease}</td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
    )
}