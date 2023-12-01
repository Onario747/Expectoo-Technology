// import React from 'react'
import '../Stylesheets/Services-Comp.css'
import box1Ico from '../Images/Subtract.png'
import box2Ico from '../Images/Globe.png'
import box3Ico from '../Images/Design.png'
import box4Ico from '../Images/Globe.png'
import box5Ico from '../Images/App.png'
import box6Ico from '../Images/Code.png'

const ServicesComp = () => {
  return (
    <div className='ServicesComp-container' id='services'>
      <div className="services-container">
        <div className="services-top-txt">
          <div className="services-header">
            <h1>Our Services</h1>
          </div>
          <div className="services-pg">
            <p>As a leading tech company, our passion for technology and commitment to excellence has established us as the partner for both tech enthusiasts and industry leaders alike. Our array of services includes:</p>
          </div>
        </div>
        <div className="services-box-container">
          <div className="service-box">
            <div className="box-icon">
              <img src={box1Ico} alt="" />
            </div>
            <div className="box-head">
              <h1>Software Development</h1>
            </div>
            <div className="box-pg">
              <p>From web applications to mobile apps and everything in between, we’ve got you covered. We use modern technology to ensure your software meets the highest industry standards. </p>
            </div>
          </div>

          <div className="service-box">
            <div className="box-icon">
              <img src={box2Ico} alt="" />
            </div>
            <div className="box-head">
              <h1>IT Consultancy</h1>
            </div>
            <div className="box-pg">
              <p>Our IT consultancy services are designed to help you navigate the ever-evolving tech landscape, ensuring that your business stays ahead of the curve.</p>
            </div>
          </div>
          <div className="service-box">
            <div className="box-icon">
              <img src={box3Ico} alt="" />
            </div>
            <div className="box-head">
              <h1>Software Training</h1>
            </div>
            <div className="box-pg">
              <p>Tailored software training for all levels ensures your team maximises tool proficiency and efficiency to its fullest potential.</p>
            </div>
          </div>
          <div className="service-box">
            <div className="box-icon">
              <img src={box4Ico} alt="" />
            </div>
            <div className="box-head">
              <h1>Quality Assurance</h1>
            </div>
            <div className="box-pg">
              <p>Our dedicated Quality Assurance team ensures that every aspect of your software, from functionality to user experience, is rigorously tested and meets the highest standards.</p>
            </div>
          </div>
          <div className="service-box">
            <div className="box-icon">
              <img src={box5Ico} alt="" />
            </div>
            <div className="box-head">
              <h1>Tech Recruitment Services</h1>
            </div>
            <div className="box-pg">
              <p>We specialise in connecting top-tier tech talents tailored to our Client’s specific needs and company culture.</p>
            </div>
          </div>
          <div className="service-box">
            <div className="box-icon">
              <img src={box6Ico} alt="" />
            </div>
            <div className="box-head">
              <h1>Software Maintenance</h1>
            </div>
            <div className="box-pg">
              <p>We offer proactive and reactive software maintenance services, keeping your applications up-to-date and in peak condition.
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesComp