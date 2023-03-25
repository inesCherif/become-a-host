import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import Connection from './Connection'
import './Desktop13.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Connection');
  
    const handleContinueClick = () => {
      setSelectedNavItem('theme');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <Connection />

          <Link to="/theme">
            <button className='button-text primary btn btn-position' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10