import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop23.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('groupsize');
  
    const handleContinueClick = () => {
      setSelectedNavItem('availability');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatem nulla, voluptatum saepe accusantium at. Accusamus aut rem, laudantium alias, hic distinctio culpa minima quam quisquam deleniti sapiente deserunt corporis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nihil tempora rerum eum esse minus accusantium adipisci iusto, eveniet quo quidem aliquam delectus non minima atque reiciendis enim repellendus numquam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit nihil dolorum earum possimus voluptates labore, modi hic dolores ex quasi. Odio ipsum vero commodi perferendis consectetur mollitia quod eum!</p>

          <Link to="/availability">
            <button className='button-text primary btn' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10