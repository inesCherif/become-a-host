import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop27.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('review');
  
    const handleContinueClick = () => {
      setSelectedNavItem('');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatem nulla, voluptatum saepe accusantium at. Accusamus aut rem, laudantium alias, hic distinct</p>

          <Link to="/review">
            <button className='button-text primary btn' onClick={handleContinueClick}>Submit</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10