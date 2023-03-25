import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop18.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('provide');
  
    const handleContinueClick = () => {
      setSelectedNavItem('requirements');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, soluta! Eos optio accusamus rerum deserunt earum. Quaerat dolorum tempora, assumenda dignissimos magnam perspiciatis optio repellendus eaque impedit, qui aspernatur fernatur dolores laborum!</p>

          <Link to="/requirements">
            <button className='button-text primary btn' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10