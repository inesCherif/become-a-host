import React from 'react'

const Passion = () => {
  return (
    <div className="profile-info-container">
    <h1 className="header2 profile-info-title">Passion</h1>
    <div className="tips">
      <h2 className="body tips-title">Tips</h2>
      <p className="type16">
      What makes you uniquely qualified to host experiences? Tell guests why you’re passionate and knowledgeable about the subject matter. Keep in mind: Hosting is about person-to-person connection, so make sure this section focuses on you.
      </p>
    </div>

    <div className="profile-info-inputs">
      <form action="">
        <table>
          <tr>
            <td>
              <label htmlFor="input1" className='second-label'>What are you passionate about ?</label>
              <br />
              <input type="text" id="input1" name="input1" className="body second-input third-input"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="input3" className='second-label'>what do you love most about your city ?</label>
              <br />
              <input type="text" id="input3" name="input3" className="second-input third-input"/>
            </td>
          </tr>
          <tr>
            <td>
                <label htmlFor="description" className='second-label'>Describe yourself more</label>
                <br />
                <textarea name="description" id="description" cols="30" rows="10" className='textarea-description'></textarea>
            </td>
          </tr>
         
        </table>
        
      </form>
    </div>
  </div>
  )
}

export default Passion
