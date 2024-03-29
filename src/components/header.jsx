import React, { useState, useContext } from 'react'
import photo from '../assets/profile-photo.jpg'
import arrowDown from '../assets/arrow-down.png'
import search from '../assets/search.png'
import calender from '../assets/calendar-linear.png';
import bell from '../assets/bell-outline.png';
import logo from '../assets/Vector.png';
import { dashboardContext } from '../App.jsx';
import { MdSubscriptions } from 'react-icons/md';

const Header = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    const { toggleSidebar, toggleProfile, closeProfile, profileOPen } = useContext(dashboardContext);

    return (
        <header>
            <div className=' hidden lg:flex  w-[] justify-between  bg-[#FAFAFA] border-[1px] border-[#e9e6f2] px-5 py-3 gap-5 '>
                <div className='flex justify-between  items-center'>
                    <h2 className="text-lg lg:text-xl font-semibold">Dashboard</h2>
                </div>

                <div className='flex items-center gap-[20px]'>
                    <div className='flex border-[1px] gap-2 border-[#DADDDD] bg-[#FFFFFF] rounded-full w-[300px] px-3 py-1 items-center'>
                        <img src={search} alt='search icon' />
                        <input className='text-[A3A3A3] outline-none' type='text' placeholder='Search...' />
                    </div>

                    <div className='flex gap-[25px] items-center'>
                        <div className='flex gap-[15px] items-center py-2 px-2 '>
                            <img src={calender} alt='caleder icon' />
                            <p className='text-xs'>{currentDate}</p>
                        </div>
                        <div className=''><img src={bell} width={20} height={20} alt='notification bell' /></div>
                    </div>

                    <div onClick={toggleProfile} className='flex gap-5 border-[1px] border-[DADDDD] rounded-full items-center px-2 py-[4px]'>
                        <div className='flex gap-[15px] items-center'>
                            <img src={photo} alt='client' width={30} height={20} />

                            <div className='flex flex-col gap-1'>
                                <p className='font-[400] text-[#26282C] m-0 p-0 text-xs text-right'>Justin Bergson</p>
                                <p className='m-0 text-right font-[400] text-[#787486] p-0 text-xs'>justin@gmail.com</p>
                            </div>
                        </div>


                        <img src={arrowDown} alt='arrow down' />

                        {profileOPen && <div className='bg-[#fff]  fixed top-[65px] right-10 flex flex-col border-[1px] border-[#DADDDD] py-3 rounded-lg  gap-2'>
                            <div className='text-lg px-4 pb-2 font-semibold border-b border-[DADDDD]'>
                                <h2>My Account</h2>
                            </div>
                            <div className='text-md  '>
                                <h2 onClick={ closeProfile } className='hover:bg-[#FAFAFA] px-4 py-1'>Profile</h2>
                                <h2 onClick={closeProfile} className='hover:bg-[#FAFAFA] px-4 py-1 '>Orders</h2>
                                <h2 className='hover:bg-[#FAFAFA] px-4 py-1'>Receipts</h2>
                                <h2 className='hover:bg-[#FAFAFA] px-4 py-1'>Subscription</h2>
                            </div>
                        </div>
                        }

                    </div>


                </div>

            </div>

            <div className='flex lg:hidden w-screen bg-[#FAFAFA] border-[1px] border-[#e9e6f2] px-5 py-4 justify-between items-center'>
                <div className='flex gap-8 items-center'>
                    <img onClick={toggleSidebar} className='md:hidden' width={30} src={logo} alt='Geeqpay logo' />
                    <h2 className="text-xl lg:text-xl font-semibold">Dashboard</h2>
                </div>

                <div>
                    <img onClick={toggleProfile} src={photo} alt='client' width={30} height={20} />

                    {profileOPen && <div className='bg-[#fff]  fixed top-[60px] right-[30px] flex flex-col border-[1px] border-[#DADDDD] py-3 rounded-md z-20 gap-2'>
                        <div className='text-lg px-4 pb-2 font-semibold border-b border-[DADDDD]'>
                            <h2>My Account</h2>
                        </div>
                        <div className='text-md  '>
                            <h2 onClick={closeProfile } className='hover:bg-[#FAFAFA] px-4 py-1'>Profile</h2>
                            <h2 onClick={closeProfile} className='hover:bg-[#FAFAFA] px-4 py-1 '>Orders</h2>
                            <h2 onClick={closeProfile} className='hover:bg-[#FAFAFA] px-4 py-1'>Receipts</h2>
                            <h2 onClick={closeProfile} className='hover:bg-[#FAFAFA] px-4 py-1'>Subscription</h2>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
