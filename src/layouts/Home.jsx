import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Link } from 'react-router-dom';
export default function Homepage() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = (path) => {
    setClicked(true);
    setTimeout(() => {
      navigate(path);
      setClicked(false);
    }, 300); // Adjust timing to match your animation duration
  };

  return (
    <div className="background-container rounded-lg">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        `}
      </style>
      <form style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px' }}>
      <div className="text-container">
    <p className="min-heading" style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400 }}>ยินดีต้อนรับ</p>
    <h1 className="main-heading" style={{ fontFamily: 'Prompt, sans-serif' }}>คลีนิกฟันสวย</h1><br /><br /><br/>
    <p className="sub-heading" style={{ fontFamily: 'Prompt, sans-serif' }}>ทำการเข้าสู่ระบบ หรือ สมัครสมาชิก เพื่อเข้าใช้งาน</p>

        <div className='button-container'>
          <Link><button 
                onClick={() => handleClick("/login")}
                
                className={`btn bg-[#0071e3] hover:bg-[#59b2f6] focus:bg-[#72ace6] text-white py-2 px-6 rounded-full ${clicked ? 'animate-button' : ''}`}
                style={{ fontFamily: 'Prompt, sans-serif' }}
            >
                เข้าสู่ระบบ
            </button></Link>
            <Link><button
                onClick={() => handleClick("/register")}
                className={`btn bg-[#7b8085] hover:bg-[#005bb5] focus:bg-[#005bb5] text-white py-2 px-6 rounded-full ${clicked ? 'animate-button' : ''}`}
                style={{ fontFamily: 'Prompt, sans-serif' }}
            >
                สมัครสมาชิก
            </button></Link>
            
        </div>
    
</div>

</form>
    </div>
  );
}
