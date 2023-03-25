import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import Access from './Access'
import './Desktop12.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('access');
  
    const handleContinueClick = () => {
      setSelectedNavItem('Connection');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2"/>
      <div className="nav-container">
        <div className='desktop-content'>
          <Access />

          <Link to="/Connection">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10