// import React from 'react'
import '../Stylesheets/Mission-Comp.css'
import missionImg from '../Images/unsplash_dzPiGfGY8Rs.svg'
import missionIco from '../Images/Subtract.svg'
import visionIco from '../Images/telescope.svg'
import cultureIco from '../Images/Culturee.svg'

const MissionComp = () => {
  return (
    <div className="MissionComp-container">
      <div className="mission-container">
        <div className="mission-about">
          <div className="about-hd">
            <h2>Exp<span>ec</span>too</h2>
          </div>
          <div className="about-pg">
          At Expectoo, we embark on a relentless journey to push the boundaries of innovation, crafting modern technologies that redefine industries. With a passionate team dedicated to pioneering advancements, we strive to shape the future of technology. 
          </div>
        </div>
        <div className="mission-text-container">
          <div className="mission-text">
            <div className="mission-icon">
              <img src={missionIco} alt="" />
            </div>
            <div className="mission-hd">Our <span>Mission</span></div>
            <div className="mission-pg">
              <p>Our mission is to connect professionals and companies globally with trusted IT solutions that empower businesses to achieve their goals.</p>
            </div>
          </div>
          <div className="mission-text">
            <div className="mission-icon">
              <img src={visionIco} alt="" />
            </div>
            <div className="mission-hd">Our <span>Vision</span></div>
            <div className="mission-pg">
              <p>To simplify business operations and drive growth by offering innovative IT solutions and becoming the most reliable partner for professionals and companies globally.
            </p>
            </div>
          </div>
          <div className="mission-text">
            <div className="mission-icon">
              <img src={cultureIco} alt="" />
            </div>
            <div className="mission-hd">Our <span>Culture</span></div>
            <div className="mission-pg">
              <p>Our culture is centred around empowering our team to reach their full potential as well as providing a working space that is an ideal environment for our team to spark innovation and weave their magic.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-img">
        <img src={missionImg} alt="" />
      </div>
    </div>
  )
}

export default MissionComp