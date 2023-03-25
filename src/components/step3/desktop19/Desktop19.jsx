import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop19.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('requirements');
  
    const handleContinueClick = () => {
      setSelectedNavItem('location');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, soluta! Eos optio accusamus rerum deserunt earum. Quaerat dolorum tempora, assumenda dignissimos magnam perspiciatis optio repellendus eaque impedit, qui aspernatur fernatur dolores laborum!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusantium aut reprehenderit soluta dolor eum et quis, ratione rem sed accusamus voluptates culpa aliquid doloribus suscipit nulla dolorem cumque odio?</p>

          <Link to="/locations">
            <button className='button-text primary btn' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10