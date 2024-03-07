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
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      })
      navigate('/home')
      setUser(rs1.data)

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <div className="p-5 border w-2/6 min-w-[100px] mx-auto rounded mt-5 bg-gradient-to-br to-pink-300 shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="1.7.jpg" className="w-20 h-20 rounded-full border-2 border-pink-500" alt="1.7" />
          
        </div>
           
        <form className="flex flex-col gap-4 " onSubmit={hdlSubmit}>
          <label className="form-control w-full max-w-xs">
            <span className="label-text text-cute-pink">Card ID</span>
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
            <span className="label-text text-cute-pink">Password</span>
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
            <button
              type="submit"
              className="btn btn-outline btn-cute-pink text-white border-cute-pink hover:bg-cute-pink-dark hover:text-white hover:border-cute-pink-dark"
            >
              Login
            </button>
            
          </div>

        </form>
      </div>
      
    </div>


  );
}