import React from 'react'

const Locationinfo = () => {
  return (
    <div className="profile-info-container">
    <h1 className="header2 profile-info-title">Location Information</h1>
    <div className="tips">
      <h2 className="body tips-title">Tips</h2>
      <p className="type16">
      "Accurate location information is key. It helps guests get to know you and your property better.
      Please note, we cannot accept listings with inaccurate location information."

      </p>
    </div>

    <div className="profile-info-inputs">
      <form action="">
        <table>
          <tr>
            <td>
              <label htmlFor="input1" className='second-label'>Your country</label>
              <br />
              <input type="text" id="input1" name="input1" className="body second-input"/>
            </td>
            <td>
              <label htmlFor="input2" className='second-label'>Your city name</label>
              <br />
              <input type="text" id="input2" name="input2" className="body second-input"/>                
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="input3" className='second-label'>How many years have you been living in it ?</label>
              <br />
              <input type="text" id="input3" name="input3" className="second-input"/>
            </td>
            <td>
              <label htmlFor="input4" className='second-label'>Adress</label>
              <br />
              <input type="text" id="input4" name="input4" className="second-input"/>                
            </td>
          </tr>
         
        </table>
        
      </form>
    </div>
  </div>
  )
}

export default Locationinfo
