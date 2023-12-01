// import React from 'react'


import teamImg_1 from '../Images/Rectangle 70.png'
import teamImg_2 from '../Images/Rectangle 71.png'
import teamImg_3 from '../Images/Rectangle 72.png'
import teamImg_4 from '../Images/Rectangle 73.png'

import '../Stylesheets/Our-Team.css'

const ourTeamComp = () => {
  return (
    <div className="ourTeamComp-container">
      <div className="aligned-team-container" id='team'>
        <div className="team-text">
          <h2>Our Team</h2>
          <p><span>Meet the Minds Behind the Innovation:</span>Our Exceptional Team Pioneering Tech Solutions</p>
        </div>
        <div className="card-container">
          <div className="card-box">
            <div className="card-img">
              <img src={teamImg_1} alt="" />
            </div>
            <div className="team-name">
              <h2>Kevin Duru</h2>
            </div>
            <div className="team-portfolio">
              <p>Managing Director</p>
            </div>
          </div>
          <div className="card-box">
            <div className="card-img">
              <img src={teamImg_2} alt="" />
            </div>
            <div className="team-name">
              <h2>Jonah Myles</h2>
            </div>
            <div className="team-portfolio">
              <p>Creative Director</p>
            </div>
          </div>
          <div className="card-box">
            <div className="card-img">
              <img src={teamImg_3} alt="" />
            </div>
            <div className="team-name">
              <h2>Victor Jess</h2>
            </div>
            <div className="team-portfolio">
              <p>Head Of Technology</p>
            </div>
          </div>
          <div className="card-box">
            <div className="card-img">
              <img src={teamImg_4} alt="" />
            </div>
            <div className="team-name">
              <h2>Evelyn Benz</h2>
            </div>
            <div className="team-portfolio">
              <p>Peoples Person</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line_1 line"></div>
      <div className="line_2 line"></div>
      <div className="line_3 line"></div>
    </div>
  )
}

export default ourTeamComp