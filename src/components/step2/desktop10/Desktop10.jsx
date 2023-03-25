import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop10.css'
import Overview from './Overview'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('overview');
  
    const handleContinueClick = () => {
      setSelectedNavItem('expertise');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <Overview />

          <Link to="/expertise">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10