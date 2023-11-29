// import React from 'react'
import '../Stylesheets/Hero-Comp.css'
import rectangle_17 from '../Images/Rectangle 17.png'
import rectangle_64 from '../Images/Ellipse 64.png'
import vectorSvg from '../Images/Vector.svg'
import laptopSvg from '../Images/ph_laptop-thin.svg'

import arrow_1 from '../Images/Vector 2.png'
import arrow_2 from '../Images/Vector 1.png'

const HeroComp = () => {
  return (
    <div className="HeroComp_container">
      <div className="hero-flex-side">
        <div className="hero-text">
          <div className="head-text">
            <h1>Exp<span>ec</span>too Software Development Company</h1>
          </div>
          <div className="head-paragraph">
            <p>Expectoo stands as a leading tech company, housing a team of skilled professionals committed to meeting your diverse tech needs and turning your aspirations into reality.</p>
          </div>
          <div className="head-btn">
            <button>Get Our Quote</button>
          </div>
        </div>
        <div className="image-shape-segment ">
          <div className="image-segment-1">
            <div className="styled-rectangle-1">
              <div className="rec-sm-icon">
                <img src={vectorSvg} alt="" />
              </div>
              <div className="rec-text">Best Tech Firm</div>
            </div>
            <div className="head-img-1">
              <img src={rectangle_17} alt="" />
            </div>
            <div className="arrow_1">
              <img src={arrow_1} alt="" />
            </div>
          </div>
          <div className="image-segment-2">
            <div className="head-img-2">
              <img src={rectangle_64} alt="" />
            </div>
            <div className="styled-rectangle-2">
              <div className="rec-sm-icon">
                <img src={laptopSvg} alt="" />
              </div>
              <div className="rec-text-2">
                <div className="rec-text-head">Advanced Tech</div>
                <div className="rec-text-pg">Some form of message promoting Expectoo would go here! Tagline</div>
              </div>
              <div className="arrow_2">
              <img src={arrow_2} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
