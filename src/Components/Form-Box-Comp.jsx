// import React from 'react'
import '../Stylesheets/Form-Box-Comp.css'
import responseIco from '../Images/Subtract (8).png'
import timeIco from '../Images/Subtract (7).png'

const FormBoxComp = () => {
  return (
    <div className='FormBoxComp-container'>
      <div className="form-box-aligned-container">
        <div className="form-text-container">
          <div className="form-head-text">
            <h1>Customer Support</h1>
            <p>Seamlessly Tailored Solutions Await – Request Your Complimentary Quote Today and Let&apos;s Begin Crafting Your Vision into Reality!
            </p>
          </div>
          <div className="pg-text">
            <div className="pg_1">
              <div className="pg-ico">
                <img src={responseIco} alt="" />
              </div>
              <div className="pg-txt">
                <h2>Response Time</h2>
                <p>We understand the urgency when it comes to technical issues or queries. Our commitment to providing round-the-clock support means you can count on us anytime, anywhere. </p>
              </div>
            </div>
            <div className="pg_2">
              <div className="pg-ico">
                <img src={timeIco} alt="" />
              </div>
              <div className="pg-txt">
                <h2>24/7 Support</h2>
                <p>We prioritise your needs, ensuring swift resolutions and continuous assistance. With our 24/7 support system, rest assured that our dedicated team is always at your service, ready to address your concerns promptly and efficiently.
</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-box">
          <div className="form-input-main">
            <div className="form-input-container">
              <div className="label">First Name</div>
              <input type="text" placeholder='Tom Holland'/>
            </div>
            <div className="form-input-container">
              <div className="label">Email</div>
              <input type="email" placeholder='info@expectoo.com'/>
            </div>
            <div className="form-input-container">
              <div className="label">Mobile</div>
              <input type="text" placeholder='(+234) 816 633 2191'/>
            </div>
            <div className="form-input-container">
              <div className="label">Company</div>
              <input type="text" placeholder='Expectoo Ltd'/>
            </div>
            <div className="form-input-container">
              <div className="label">Vendo Code (Optional)</div>
              <input type="text" placeholder='1234567'/>
            </div>
            <div className="form-input-container">
              <div className="label">How can we help</div>
              <select name="" id="project-select">
                <option value="">Select Project of Interest</option>
              </select>
            </div>
          </div>
          <div className="form-text-area-container">
            <div className="label">Describe your project</div>
            <textarea name="" id="" cols="30" rows="6"></textarea>
          </div>
          <div className="submit-btn"><button>Submit</button></div>
        </div>
      </div>
    </div>
  )
}

export default FormBoxComp