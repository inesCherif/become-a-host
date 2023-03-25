import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop15.css'
import Theme from './Theme'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('theme');
  
    const handleContinueClick = () => {
      setSelectedNavItem('title');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <Theme />
          <Link to="/title">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10