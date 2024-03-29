import React from 'react';
import Sidebar from './components/sidebar';
import Dashboard from './pages/home';

const Layout = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default Layout
