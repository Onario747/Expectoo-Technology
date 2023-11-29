import { useState } from 'react'
import expectooLogo from '../Images/expectoo logo white png.png'

// import {Routes, Route} from "react-router-dom"
import '../Stylesheets/Top-bar-Comp.css'
import { NavLink } from 'react-router-dom'

const TopBarComp = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={`TopBarComp_container ${isNavOpen ? 'nav-open' : ''}`}>
      <div className="top-bar">
        <div className="logo">
          <img src={expectooLogo} alt="Expectoo Logo" />
        </div>
        <div className={`nav-bar ${isNavOpen ? 'open' : ''}`}>
          <NavLink className='nav-link'>
            <div className="nav-link-text">Services</div>
          </NavLink>
          <NavLink className='nav-link'>
            <div className="nav-link-text">Project</div>
          </NavLink>
          <NavLink className='nav-link'>
            <div className="nav-link-text">Testimonials</div>
          </NavLink>
          <NavLink className='nav-link'>
            <div className="nav-link-text">Our Team</div>
          </NavLink>
          <NavLink className='nav-link'>
            <div className="nav-link-text">Recruitment</div>
          </NavLink>
        </div>
        <div className="mobile-left">
          <div className="quote-btn">
            <button>Get Our Quote</button>
          </div>
          <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
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