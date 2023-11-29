// import React from 'react'
import Typewriter from 'typewriter-effect';
import '../Stylesheets/Typewriter-Animation-Comp.css'
// import mapSvg from '../Images/Map.svg'
const TypewiterAnimationComp = () => {
  return (
    <div className="TypewiterAnimationComp-container">
      {/* <div className="map-container"><img src={mapSvg} alt="" /></div> */}
      <div className="text-container">
        {
          <Typewriter
          options={{
            strings: ['We are the best Software Recruitment Company', 'We are the best IT Training Company'],
            autoStart: true,
            loop: true,
          }}
          
        />
        }
      </div>
    </div>
  )
}

export default TypewiterAnimationComp