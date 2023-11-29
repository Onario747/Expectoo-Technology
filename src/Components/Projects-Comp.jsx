// import React from 'react'
import '../Stylesheets/Project-Comp.css'
import projectImg from '../Images/Group 3674 4.png'

const ProjectsComp = () => {
  return (
    <div className='ProjectsComp-container'>
      <div className="projects-main-container">
        <h1 className='project-head-txt'>Projects:</h1>
        <div className="project-container">
          <div className="project-writing">
            <div className="project-header"><h1>Travelane</h1></div>
            <div className="project-pg">
              <p>Our vision is to cultivate and propagate as a Major IT service and Sales provider to emerge as a leading performer in providing quality sales, web, and software development solutions in the competitive global market. Our flexible, professional, and integrated process mirror what Gastrown is about.</p>
            </div>
            <div className="project-btn"><button>Get Our Quote</button></div>
            <div className="circle-segments">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
            </div>
          </div>
          <div className="project-img">
            <img src={projectImg} alt="" />
          </div>
          <div className="lane-shape"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComp