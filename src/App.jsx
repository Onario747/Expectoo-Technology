// import { useState } from 'react'
import TopBarComp from './Components/Top-bar-Comp'
import HeroComp from './Components/Hero-Comp'
import SponsoredComp from './Components/Sponsored-Comp'
import ServicesComp from './Components/Services-Comp'
import TypewiterAnimationComp from './Components/Typewiter-Animation-Comp'
import ProjectsComp from './Components/Projects-Comp'
import TestimonialsComp from './Components/Testimonials-Comp'
import MissionComp from './Components/Mission-Comp'
import OurTeamComp from './Components/Our-Team-Comp'
import FormBoxComp from './Components/Form-Box-Comp'
import BottomBarComp from './Components/Bottom-bar-Comp'
import FooterComp from './Components/Footer-Comp'

import './App.css'

function App() {

  return (
    <div className='App-container'>
      <div className="app-container-aligned">
        <TopBarComp />
        <HeroComp />
        <SponsoredComp />
        <ServicesComp />
        <TypewiterAnimationComp />
        <ProjectsComp />
        <TestimonialsComp />
        <MissionComp />
        <OurTeamComp />
        <FormBoxComp />
        <BottomBarComp />
        <FooterComp />
      </div>
    </div>
  )
}

export default App
