import React from 'react'

const Connection = () => {
  return (
    <div>
      <div className="profile-info-container">

    <h1 className="header2 profile-info-title">Connection</h1>

    <div className="tips2">
      <p className="body">
      We’re looking for warm and welcoming people who can build bridges and <br />
       help everyone have fun.
      <br /> This could include:</p>
      <div className='overview-list'>
        <ul className='overview-list'>
        <li className='body'>&nbsp; Helping guests get to know each other</li>
        <li className='body'>&nbsp; Sharing personal stories</li>
        <li className='body'>&nbsp; Creating magical moments</li>
      </ul>
      </div>
      <p className="body">
      Guests should ideally come as strangers and leave as friends.
      </p>
    </div>

    <div className='radio-group'>
      <label htmlFor="radio1"><span className='second-label'>Which of these sounds most like you?</span> <span className='label'>Select one option</span> .</label>
      <br />
      <input type="radio" id="radio1" name="activity-hosted" value="yes"/>
      <label htmlFor="radio1">I love bringing people together and creating new friendships</label>
      <input type="radio" id="radio2" name="activity-hosted" value="no"/>
      <label htmlFor="radio2">I enjoy sharing my personal experience with others</label>
      <input type="radio" id="radio3" name="activity-hosted" value="not-sure"/>
      <label htmlFor="radio3">I prefer not to get too personal with guests </label>
    </div>
  </div>
  
    </div>
  )
}

export default Connection
