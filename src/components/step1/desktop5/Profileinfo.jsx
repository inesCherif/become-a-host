import React, { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';




const Profileinfo = () => {

  //verifiying email
    const [formData, setFormData] = useState({
        email: "",
        isEmailValid: false
      });
    
      const handleChange = event => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
          isEmailValid: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
        });
        
      };

  return (
    <div className="profile-info-container">
      <h1 className="header2 profile-info-title">Profile Information</h1>
      <div className="tips">
        <h2 className="body tips-title">Tips</h2>
        <p className="type16">
          Guests want to know who’s hosting them. This must be your actual name,
          not the name of a business. Only your first name will appear on your
          page. If you have co-hosts, you'll be able to add them later.
        </p>
      </div>

      <div className="profile-info-inputs">
        <form action="">
          <table>
            <tr>
              <td>
                <label htmlFor="input1">First name</label>
                <br />
                <input type="text" id="input1" name="input1" className="body Input" placeholder="Textfield text"/>
              </td>
              <td>
                <label htmlFor="input2">Last Name</label>
                <br />
                <input type="text" id="input2" name="input2" className="body Input" placeholder="Textfield text"/>                
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="input3" >Birthday</label>
                <br />
                <input type="text" id="input3" name="input3" className="body Input" placeholder="DD/MM/YYYY"/>
              </td>
              <td>
                <label htmlFor="input4">Nationality</label>
                <br />
                <input type="text" id="input4" name="input4" className="body Input" placeholder="Textfield text"/>                
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="input5">Email</label>
                <br />
                <div className='email'>
                  <input
                  type="email"
                  name="email"
                  placeholder='xxxxx@xxxxx.xxx'
                  value={formData.email}
                  onChange={handleChange}
                  className={`body Input ${formData.email && !formData.isEmailValid ? 'invalid' : formData.isEmailValid ? 'valid' : ''}`}
                  />
                  <DoneIcon className='valid-email-icon' style={{ display: formData.isEmailValid ? "block" : "none" }} />
                  <ErrorOutlineIcon
                   className="invalid-email-icon"
                   style={{ display: formData.email && !formData.isEmailValid ? 'block' : 'none' }}
                  />

                </div>
              </td>

              <td>
                <label htmlFor="input6">Mobile</label>
                <br />
                <input type="text" id="input6" name="input6" className="body Input" placeholder="+xx xxxxxxxx"/>                
              </td>
            </tr>
          </table>
          
        </form>
      </div>
    </div>
  );
};

export default Profileinfo;
