import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop7.css'
import Locationinfo from './Locationinfo'
const Desktop7 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('location');
  
    const handleContinueClick = () => {
      setSelectedNavItem('languages');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <Locationinfo/>

          <Link to="/languages">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>
          

        </div>

      </div>
    </div>
  )
}

export default Desktop7