import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/', text: 'Login' },
  { to : '/register', text: 'Register' },
]

const userNav = [
  { to : '/Information', text: '𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛' },

  { to : '/new', text: '𝑅𝑒𝑠𝑒𝑟𝑣𝑒' },
  
  { to : '/reserve', text: '𝑅𝑒𝑠𝑒𝑟𝑣𝑎𝑡𝑖𝑜𝑛 𝑙𝑖𝑠𝑡' },

  { to : '/show', text: '𝑆ℎ𝑜𝑤 𝑟𝑒𝑠𝑒𝑟𝑣𝑒𝑑' },
]

const adminNav = [
  

  
  
  { to : '/reserve', text: '𝑅𝑒𝑠𝑒𝑟𝑣𝑎𝑡𝑖𝑜𝑛 𝑙𝑖𝑠𝑡' },


]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? user?.role ==='ADMIN' ? adminNav : userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    
    <div className="container">
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/."}>
          <img src="1.7.jpg" className="w-20 h-20 rounded-full border-2 border-pink-500" alt="" />
        </Link>
        <a className="btn btn-ghost text-xl">𝐻𝑜𝑠𝑝𝑖𝑡𝑎𝑙 𝑎𝑠 𝐼 𝑤𝑖𝑠ℎ𝑡 {user?.id ? user.username : 'Guest'}</a>
           
      </div>
      
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {finalNav.map(el => (
            <li key={el.to}>
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>𝐿𝑜𝑔𝑜𝑢𝑡</Link>
            </li>
          )}
        </ul>
      </div>
      
    </div><br></br>
    <p style={{ textAlign: 'center' }}>เปิดทำการถึง 16:00</p>
    
  </div>
    
  );
}
