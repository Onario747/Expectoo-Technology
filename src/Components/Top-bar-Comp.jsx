import { useState } from 'react'
import expectooLogo from '../Images/expectoo logo white png.png'

// import {Routes, Route} from "react-router-dom"
import '../Stylesheets/Top-bar-Comp.css'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';

const TopBarComp = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  

  return (
    <div className={`TopBarComp_container ${isNavOpen ? 'nav-open' : ''}`}>
      <div className="top-bar" id='top-bar'>
        <div className="logo">
          <img src={expectooLogo} alt="Expectoo Logo" />
        </div>
        <div className={`nav-bar ${isNavOpen ? 'open' : ''}`}>
          <div className="nav-link" href='#services'>
            <Link to='services' spy="true" smooth={true} offset={50} duration={500} >Services</Link>
          </div>
          <div className="nav-link" href='#services'>
            <Link to='projects' spy="true" smooth={true} offset={50} duration={500} >Projects</Link>
          </div>
          <div className="nav-link" href='#services'>
            <Link to='testimonials' spy="true" smooth={true} offset={50} duration={500} >Testimonials</Link>
          </div>
          <div className="nav-link" href='#services'>
            <Link to='team' spy="true" smooth={true} offset={50} duration={500} >Our Team</Link>
          </div>
          <div className="nav-link" href='#services'>
            <Link to='formbox' spy="true" smooth={true} offset={50} duration={500} >Recruitment</Link>
          </div>

        </div>
        <div className="mobile-left">
          <div className="quote-btn">
            <button>Get Our Quote</button>
          </div>
          <div className={`hamburger-menu ${isNavOpen ? 'icon-fixed' : ''}`} onClick={toggleNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBarComp