import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/Vector.png';
import dashboard from '../assets/category.png';
import analytics from '../assets/trend-up.png';
import users from '../assets/profile-2user.png';
import inventory from '../assets/box.png';
import discount from '../assets/discount-shape.png';
import help from '../assets/info-circle.png';
import iconSeven from '../assets/brightness.png';
import iconEight from '../assets/moon.png'
import arrow from '../assets/arrow-right.png'
import settings from '../assets/setting-2.png'
import logout from '../assets/logout.png'
import { dashboardContext } from '../App.jsx';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(0)
  
  const changeActiveMenu = (id) => {
    setActiveMenu(id);
    console.log(id)
    console.log(activeMenu)
  };
   
  
    function changeActiveMenuColor (id) {
      if (activeMenu === id) { return {
        color: 'black'
      }
      }
  
      else{ return {
        color: ''
      }
  
      }
    }
  


  const { isOpen, toggleSidebar } = useContext(dashboardContext);
  return (
    <div>
      <div className='p-5 hidden fixed bg-[#F7F8FA] border-[1px] w-[80px] border-[#EBECF2] md:flex flex-col items-center '>
        <div className='mb-[38px]'>
          <img src={logo} alt='Geeqpay logo' />
        </div>

        <div className='flex mb-[20px] flex-col gap-[28px]'>

          <Link to='/'>
            <div id='1' onClick={() => changeActiveMenu(1)} >
              <img className={changeActiveMenuColor(1)}  src={dashboard} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='analytics'>
            <div  id='2' onClick={() => changeActiveMenu(2)}>
              <img className={changeActiveMenuColor(2)} src={analytics} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='users'>
            <div  id='3' onClick={() => changeActiveMenu(3)}>
              <img className={activeMenu === 3 ? 'text-black' : ''} src={users} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='inventory'>
            <div className={activeMenu === 4 ? 'text-black' : ''} id='4' onClick={() => changeActiveMenu(4)}>
              <img src={inventory} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='discount'>
            <div className={activeMenu === 5 ? 'text-black' : ''} id='5' onClick={() => changeActiveMenu(5)}>
              <img src={discount} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='help' >
            <div id='6' onClick={() => changeActiveMenu(6)}
              className= {activeMenu === 6 ? 'text-black' : ''} >
              <img src={help} alt='sidebar icon' />
            </div>
          </Link>

        </div>

        <div className='mb-[80px]' >
          <img src={iconSeven} alt='theme icon' />
          <img src={iconEight} alt='theme icon' />
        </div>


        <div className='flex flex-col gap-[20px]'>
          <div className=''>
            <img src={arrow} alt='' />
          </div>

          <div className=''>
            <img src={settings} alt='' />
          </div>

          <div className=''>
            <img src={logout} alt='' />
          </div>
        </div>
      </div>


      {isOpen && <div className='p-5 md:hidden bg-[#F7F8FA] border-[1px] w-[70px] border-[#EBECF2] fixed flex flex-col items-center z-10 h-screen '>
        <div className='mb-[38px]'>
          <img onClick={toggleSidebar} src={logo} alt='Geeqpay logo' />
        </div>

        <div className='flex mb-[20px] flex-col gap-[28px]'>
          <Link to='/'>
            <div className=''>
              <img src={dashboard} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='analytics'>
            <div className=''>
              <img src={analytics} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='users'>
            <div className=''>
              <img src={users} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='inventory'>
            <div className=''>
              <img src={inventory} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='discount'>
            <div className=''>
              <img src={discount} alt='sidebar icon' />
            </div>
          </Link>

          <Link to='help'>
            <div className=''>
              <img src={help} alt='sidebar icon' />
            </div>
          </Link>


        </div>

        <div className='mb-[80px]' >
          <img src={iconSeven} alt='theme icon' />
          <img src={iconEight} alt='theme icon' />
        </div>

      </div>
      }
    </div>
  )
}

export default Sidebar
