import React from 'react'

const Languages = () => {
  return (
    <div className="profile-info-container">
    <h1 className="header2 profile-info-title">Languages</h1>
    <div className="tips">
      <h2 className="body tips-title">Tips</h2>
      <p className="type16">
      You should be able to read, write, and speak in your primary language.
     <br />If you speak more languages, you can always add them to your experience page in the future.
      </p>
    </div>

    <div className="profile-info-inputs">
      <form action="">
        <table>
          <tr>
            <td>
              <label htmlFor="input1" className='second-label'>what are the languages you are able to speak ?</label>
              <br />
              <input type="text" id="input1" name="input1" className="body second-input third-input"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="input3" className='second-label'>How would you rate your English level?</label>
              <br />
              <input type="text" id="input3" name="input3" className="second-input third-input"/>
            </td>
          </tr>
         
        </table>
        
      </form>
    </div>
  </div>
  )
}

export default Languages
