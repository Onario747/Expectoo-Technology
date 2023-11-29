// import React from 'react'
import '../Stylesheets/Bottom-bar-Comp.css'
import expectooLogo from '../Images/expectoo logo white png.png'

import { FaInstagram, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
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
          <a href="/">About Us</a>
          <a href="/">Our Services</a>
          <a href="/">Projects</a>
          <a href="/">Testimonials</a>
          <a href="/">Team</a>
        </div>
      </div>
    </div>
  )
}

export default BottomBarComp