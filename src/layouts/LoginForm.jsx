import axios from 'axios'
import { useState } from "react";
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';




export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    card_id: '',
    password: ''
  })

  const navigate = useNavigate()

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()

      // validation
      const rs = await axios.post('http://localhost:8000/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8000/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      })
      navigate('/Home')
      setUser(rs1.data)

    } catch (err) {
      alert(err.response.data.error)
    }
  }

  return (
    <div>
      <div className="p-5 border w-4/6 min-w-[100px] mx-auto rounded mt-5 bg-gradient-to-br from-pink-200 to-red-300 max-w-[30vw]">
      <div className="flex items-center justify-center">
        <img src="1.7.jpg" className="w-20 h-20 rounded-full border-2 border-pink-500" alt="1.7" />
          
        </div>
           
        <form className="flex flex-col gap-4 " onSubmit={hdlSubmit}>
          <label className="form-control w-full max-w-xs">
            <span className="label-text text-pink-700">Card ID</span>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs bg-cute-pink"
              name="card_id"
              value={input.card_id}
              onChange={hdlChange}
              placeholder="Enter your card ID"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <span className="label-text text-pink-700">Password</span>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs bg-cute-pink"
              name="password"
              value={input.password}
              onChange={hdlChange}
              placeholder="Enter your password"
            />
          </label>

          <div className="flex justify-center">
          <button type="login" className="btn btn-outline btn-pink text-white border-pink-500 hover:bg-pink-500 focus:ring-pink-500 focus:border-pink-500 active:bg-pink-700">Login</button>
</div>


        </form>
      </div>
      
    </div>


  );
}