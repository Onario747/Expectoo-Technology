// import React from 'react'
import '../Stylesheets/Sponsored-Comp.css'

import clishaImg from '../Images/image 15.png'
import gImg from '../Images/image 18.png'
import vendoImg from '../Images/vendo.png'
import synologyImg from '../Images/synology.png'
import intwinImg from '../Images/image 17.png'

const SponsoredComp = () => {
  return (
    <div className="SponsoredComp-container">
      <div className="sponsored-text-container">
        <div className="sponsored-img clisha">
          <img src={clishaImg} alt="" />
        </div>
        <div className="sponsored-img g-img">
          <img src={gImg} alt="" />
        </div>
        <div className="sponsored-img vendo">
          <img src={vendoImg} alt="" />
        </div>
        <div className="sponsored-img synology">
          <img src={synologyImg} alt="" />
        </div>
        <div className="sponsored-img intwin">
          <img src={intwinImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SponsoredComp