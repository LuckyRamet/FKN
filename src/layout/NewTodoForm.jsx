import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservedContext, { ReservedContextProvider } from "../contexts/ReserveContext";
import InfoContext, { InfoContextProvider } from "../contexts/infoContext";
import AuthContext, { AuthContextProvider } from "../contexts/AuthContext";

export default function NewTodoForm() {
  return (
    <AuthContextProvider>
      <ReservedContextProvider>
        <AddFormBooking />
      </ReservedContextProvider>
    </AuthContextProvider>
  )
}


function AddFormBooking() {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div>
        <p> loading....</p>
      </div>
    )
  }

  return (
    <div>
      {user && <FormNew user={user} />}
    </div>
  )
}

function FormNew({ user }) {
  const { createBooking } = useContext(ReservedContext)

  // console.log(user?.id)
  // const date = new Date()
  // console.log(date);
  const [time, setTime] = useState(null)
  const [input, setInput] = useState({
    datetime: new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }),
    phone: '',
    disease: '',
    user_id: user.id
  });


  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    const selectedDate = e.target.value;
    const currentDate = new Date().toISOString().split('T')[0];
  
    if (selectedDate < currentDate) {
      alert("กรุณาเลือกวันที่ที่มากกว่าหรือเท่ากับวันปัจจุบัน");
      location.reload()
    }
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // console.log(input.user_id);

    // console.log(input.datetime    )
    const timedete = input.datetime + 'T' + time + '.000Z'

    createBooking({ ...input, datetime: timedete })

  };

  const hdlChangeTime = (e) => {
    setTime(e.target.value)
    // console.log(time);
  }
  const { data } = useContext(ReservedContext)
  // console.log(data);

  const findTime = data?.map(el => el.datetime.split('T')[1].slice(0, 8))
  // console.log(findTime);
  const findDay = data?.map(el => el.datetime.split('T')[0])


  // console.log(findDay);

  return (
    <form className="flex flex-col min-w-[70px] border rounded w-2/4 mx-auto p-2 gap-2 px-4 bg-pink-100 mt-4" onSubmit={hdlSubmit}>
      <label className="form-control w-full max-w-[140px]">
        <div className="label">
          <span className="label-text text-pink-800">Due Date</span>
        </div>
      </label>
      <div className="flex gap-2 w-full">
      <input type="date" name="datetime" value={input.datetime} onChange={hdlChange} min={new Date().toISOString().split('T')[0]} className="w-full bg-pink-200 p-2 rounded-md border border-pink-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent" />
        <select onChange={hdlChangeTime} className="w-full bg-pink-200 p-2 rounded-md border border-pink-300 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-transparent" name="" id="">
          <option hidden>เลือกเวลา</option>
          {['09:30:00', '10:30:00', '13:00:00', '14:00:00', '15:00:00', '17:00:00'].map(time => {
            const disabled = findDay?.includes(input.datetime.split('T')[0]) && findTime?.includes(time);
            return (
              <option key={time} value={time} disabled={disabled}>
                {time.slice(0, 5)}
              </option>
            );
          })}
        </select>

      </div>
      <div className="label">
        <span className="label-text text-pink-800">Phone</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Phone"
        className="input input-bordered w-full bg-pink-200"
        name="phone"
        value={input.phone}
        onChange={hdlChange}
      />
      <div className="label">
        <span className="label-text text-pink-800">Disease</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Disease"
        className="input input-bordered w-full bg-pink-200"
        name="disease"
        value={input.disease}
        onChange={hdlChange}
      />
      <div></div>
      <button
        type="submit"
        className="btn btn-outline btn-pink text-pink-800 border-pink-500 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition duration-300 ease-in-out shadow-md rounded-full"
      >
        Add New
      </button>
    </form>
  );
}
