import React from 'react'

const Access = () => {
  return (
    <div>
      <div className="profile-info-container">

    <h1 className="header2 profile-info-title">Access</h1>

    <div className="tips2">
      <p className="body">
      We’re looking for insiders who can show off a side of their city that visitors 
      <br /> couldn’t find otherwise.
      <br /> This could include:</p>
      <div className='overview-list'>
        <ul className='overview-list'>
        <li className='body'>&nbsp; Places only locals know about</li>
        <li className='body'>&nbsp; Interesting people</li>
        <li className='body'>&nbsp; Special items that are hard to find</li>
      </ul>
      </div>
      <p className="body">
      Guests love going beyond the typical tourist destinations.
      </p>
    </div>

    <div className='radio-group'>
      <label htmlFor="radio1"><span className='second-label'>Which of these best describes what you’ll do?</span> <span className='label'>Select one option</span> .</label>
      <br />
      <input type="radio" id="radio1" name="activity-hosted" value="yes"/>
      <label htmlFor="radio1">It’s very unique—guests couldn’t do it without me</label>
      <input type="radio" id="radio2" name="activity-hosted" value="no"/>
      <label htmlFor="radio2">Guests could do this on their own, but I bring a unique perspective to the activity</label>
      <input type="radio" id="radio3" name="activity-hosted" value="not-sure"/>
      <label htmlFor="radio3">Guests could do this on their own without me</label>
    </div>
  </div>
  
    </div>
  )
}

export default Access
