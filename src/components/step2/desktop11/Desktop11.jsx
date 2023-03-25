import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop11.css'
import Expertice from './Expertice'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('expertise');
  
    const handleContinueClick = () => {
      setSelectedNavItem('access');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <Expertice />
          <Link to="/access">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Desktop10