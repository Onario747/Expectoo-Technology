// import React from 'react'
import '../Stylesheets/Bottom-bar-Comp.css'
import expectooLogo from '../Images/expectoo logo white png.png'

import { FaInstagram, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import { Link } from 'react-scroll';
import { IoIosMail } from "react-icons/io";

const BottomBarComp = () => {
  return (
    <div className="BottomBarComp-container">
      <div className="bottom-bar">
        <div className="expectoo-sec bottom-sec">
          <div className="exp-logo"><img src={expectooLogo} alt="" /></div>
          <div className="logo-txt">
            <p>Building Bridges to the Future: Connecting Technology, Inspiring Possibilities.</p>
          </div>
          <div className="socials-sec bottom-sec">
            <FaInstagram className='social' />
            <FaFacebook className='social' />
            <FaLinkedin className='social' />
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="address-sec bottom-sec">
          <h1 className='footer-head'>Address</h1>
          <div className="logo-txt">
            <p>No. 5 Engr. Maxwell Adoki Street, off Peter Odili Road, Port Harcourt, Rivers State.</p>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="contact-sec bottom-sec">
          <h1 className='footer-head'>Contact</h1>
          <div className="call">
            <FaPhone />
            <p>(+234) 9169 1990 00</p>
          </div>
          <div className="email">
            <IoIosMail />
            <p>info@expectootechnology.com</p>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="quick-links-sec">
          <h1 className="footer-head">Quick Links</h1>
          <Link to='mission' spy="true" smooth={true} offset={50} duration={500} className='quick-link'>About Us</Link>
          <Link to='services' spy="true" smooth={true} offset={50} duration={500} className='quick-link'>Our Services</Link>
          <Link to='projects' spy="true" smooth={true} offset={50} duration={500} className='quick-link'>Projects</Link>
          <Link to='testimonials' spy="true" smooth={true} offset={50} duration={500} className='quick-link'>Testimonials</Link>
          <Link to='team' spy="true" smooth={true} offset={50} duration={500} className='quick-link'>Teams</Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBarComp