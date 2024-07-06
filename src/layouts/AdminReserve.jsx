import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, {
    ReservedContextProvider,
} from "../contexts/ReserveContext";
import './Rese.css';
import './text.css'
import AuthContext from "../contexts/AuthContext";
import InfoContext from "../contexts/infoContext";


export default function AdminReserved() {
    return (
        <ReservedContextProvider>
            <ReserveDashboard />
        </ReservedContextProvider>
    );
}

function ReserveDashboard() {
    const { adminData } = useContext(ReservedContext);
    const { member } = useContext(InfoContext)
    // console.log(typeof data);

    return (
        <div>
            {adminData && adminData.map(el => (
                <ReserveItem member={member} key={el.id} item={el}/>
            ))}
        </div>
    )
}
const hdlSubmit = (e) => {
  e.preventDefault()
  updateBooking(reserved.id, update)
  setIsUpdate(false)
}
function ReserveItem({item,member}) {

  const { deleteReserved } = useContext(ReservedContext);

  const hdlDelete = (e) => {
    e.preventDefault()
    deleteReserved(item.id)
  }
    const {name} = member.find(el=>el.id===item.user_id)
    const {lastname} = member.find(el=>el.id===item.user_id)
    return (
      <div className="p-4">
   <div className="bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <table className='border-collapse w-full'>
      <tbody>
        <tr className='bg-pink-400'>
          <th className='border p-2'>Name</th>
          <td className='border p-2'>{name} {lastname}</td>
        </tr>
        <tr>
          <th className='border p-2'>Datetime</th>
          <td className='border p-2'>{new Date(item.datetime).toUTCString().split("GMT")[0]}</td>
        </tr>
        <tr>
          <th className='border p-2'>Phone</th>
          <td className='border p-2'>{item.phone}</td>
        </tr>
        <tr>
          <th className='border p-2'>Disease</th>
          <td className='border p-2'>{item.disease}</td>
        </tr>
        <tr>
          <th className='border p-2'>Notes</th>
          <td className='border p-2'>
          <textarea id="message-input" className="w-full p-2" placeholder="Enter your message here"></textarea>
          </td>
        </tr>
      </tbody><br></br>
    </table>
    <div className="flex items-center justify-end space-x-4">
    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={hdlSubmit}>Submit</button>
    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={hdlDelete}>Delete</button>
  </div>
  </div>
</div>
    )
}