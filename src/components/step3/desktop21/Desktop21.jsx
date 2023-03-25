import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop21.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('photos');
  
    const handleContinueClick = () => {
      setSelectedNavItem('groupsize');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit amet</p>

          <Link to="/groupsize">
            <button className='button-text primary btn' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10