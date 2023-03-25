import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop20.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('locations');
  
    const handleContinueClick = () => {
      setSelectedNavItem('photos');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit amet</p>

          <Link to="/photos">
            <button className='button-text primary btn' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10