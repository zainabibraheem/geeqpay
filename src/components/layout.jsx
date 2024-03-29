import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='w-screen lg:ml-[80px]'>
        <Header />
      <Outlet />
    </div>
  )
}

export default Layout
