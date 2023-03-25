import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import './Desktop17.css'
const Desktop10 = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('do');
  
    const handleContinueClick = () => {
      setSelectedNavItem('provide');
    };

  return (
    <div>
        <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3"/>

      <div className="nav-container">
        <div className='desktop-content'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, soluta! Eos optio accusamus rerum deserunt earum. Quaerat dolorum tempora, assumenda dignissimos magnam perspiciatis optio repellendus eaque impedit, qui aspernatur fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis delectus autem sit tenetur labore quo. Laborum, iusto exercitationem. Tenetur cupiditate consequatur sint obcaecati eum! Est, assumenda eligendi. Nemo, quos?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus reprehenderit fuga optio exercitationem, consequuntur non assumenda provident vitae, recusandae, eveniet iusto nulla saepe maiores obcaecati at quod aspernatur dolores laborum!</p>

          <Link to="/provide">
            <button className='button-text primary btn' onClick={handleContinueClick}>Continue</button>   
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Desktop10