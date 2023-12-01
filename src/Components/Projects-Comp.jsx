import { useState } from 'react'
import '../Stylesheets/Project-Comp.css'
import projectImg1 from '../Images/mobile.png'
import projectImg2 from '../Images/mobile (1).png'

const ProjectsComp = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = [
    {
      header: 'Travelane',
      pg: 'Our vision is to cultivate and propagate as a Major IT service and Sales provider to emerge as a leading performer in providing quality sales, web, and software development solutions in the competitive global market. Our flexible, professional, and integrated process mirror what Gastrown is about.',
      img: projectImg1,
    },
    {
      header: 'Clisha',
      pg: 'Our vision is to cultivate and propagate as a Major IT service and Sales provider to emerge as a leading performer in providing quality sales, web, and software development solutions in the competitive global market. Our flexible, professional, and integrated process mirror what Gastrown is about.',
      img: projectImg2,
    },
    {
      header: 'Vendo',
      pg: 'Our vision is to cultivate and propagate as a Major IT service and Sales provider to emerge as a leading performer in providing quality sales, web, and software development solutions in the competitive global market. Our flexible, professional, and integrated process mirror what Gastrown is about.',
      img: projectImg2,
    },
    {
      header: 'Intwin',
      pg: 'Our vision is to cultivate and propagate as a Major IT service and Sales provider to emerge as a leading performer in providing quality sales, web, and software development solutions in the competitive global market. Our flexible, professional, and integrated process mirror what Gastrown is about.',
      img: projectImg2,
    },
    {
      header: 'Synology',
      pg: 'Our vision is to cultivate and propagate as a Major IT service and Sales provider to emerge as a leading performer in providing quality sales, web, and software development solutions in the competitive global market. Our flexible, professional, and integrated process mirror what Gastrown is about.',
      img: projectImg2,
    },
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    toggleAnimationClasses();
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
    toggleAnimationClasses();
  };

  const currentProject = projectData[currentIndex];

  const toggleAnimationClasses = () => {
    const projectHeader = document.querySelector('.project-header');
    const projectPg = document.querySelector('.project-pg');
    const projectImg = document.querySelector('.project-img');

    projectHeader.classList.add('fade-in-hd');
    projectPg.classList.add('fade-in-pg');
    projectImg.classList.add('fade-in-img');

    setTimeout(() => {
      projectHeader.classList.remove('fade-in-hd');
      projectPg.classList.remove('fade-in-pg');
      projectImg.classList.remove('fade-in-img');
    }, 1000);
  };

  return (
    <div className='ProjectsComp-container'>
      <div className="projects-main-container">
        <h1 className='project-head-txt'>Projects:</h1>
        <div className="project-container">
          <div className="project-writing">
            <div className="project-header"><h1>{currentProject.header}</h1></div>
            <div className="project-pg">
            <p>{currentProject.pg}</p>
            </div>
            <div className="project-btn"><button>Get Our Quote</button></div>
            <div className="circle-segments">
              <div className="circle-1" onClick={handlePrevClick}></div>
              <div className="circle-2" onClick={handleNextClick}></div>
            </div>
          </div>
          <div className="project-img">
            <img src={currentProject.img} alt="" />
          </div>
          <div className="lane-shape"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComp