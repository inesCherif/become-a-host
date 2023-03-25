import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop8.css'
import Languages from './Languages'
const Desktop8 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('languages');
  
    const handleContinueClick = () => {
      // Set the selected navigation element to 'profile-photo'
      setSelectedNavItem('passions');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <Languages/>
          <Link to="/passions">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>
          

        </div>

      </div>
    </div>
  )
}

export default Desktop8