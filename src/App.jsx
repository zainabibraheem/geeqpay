import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Main from './pages/main';
import Home from './pages/home';
import Analytics from './pages/analytics';
import Users from './pages/users';
import Inventory from './pages/inventory';
import Discounts from './pages/discounts';
import Help from './pages/help';
import Layout from './components/layout';

export const dashboardContext = createContext();

function App() {

  const [isOpen, setIsOPen] = useState(false);

  const toggleSidebar = () => {
    setIsOPen(!isOpen)
  }

  const [profileOPen, setProfileOPen] = useState(false);

  const toggleProfile = () => {
    setProfileOPen(!profileOPen);
  };

  const closeProfile = () => {
    setProfileOPen(false);
  };

  return (
    <div className='flex'>
      <BrowserRouter>
        <dashboardContext.Provider value={{ isOpen, toggleSidebar, profileOPen, toggleProfile, closeProfile }}>

          <Sidebar />
          <Routes>
            <Route path='/' element={<Layout />}> 
              <Route path='/' element={<Home />} />
              <Route path='analytics' element={<Analytics />} />
              <Route path='users' element={<Users />} />
              <Route path='inventory' element={<Inventory />} />
              <Route path='discount' element={<Discounts />} />
              <Route path='help' element={<Help />} />
            </Route>
          </Routes>

        </dashboardContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
