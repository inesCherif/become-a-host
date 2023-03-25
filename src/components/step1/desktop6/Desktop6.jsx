import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import Cropper from './Cropper'
import './Desktop6.css'
import ProfilePhoto from './ProfilePhoto'
const Desktop6 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('profile-photo');
  
    const handleContinueClick = () => {
      setSelectedNavItem('location');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1"/>
        
      <div className="nav-container">
          <ProfilePhoto/>

          <Link to="/location">
            <button className='button-text primary btn btn-profile-position' onClick={handleContinueClick}>Continue</button>   
          </Link>
      </div>
    </div>
  )
}

export default Desktop6
