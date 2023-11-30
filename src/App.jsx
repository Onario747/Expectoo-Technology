import { useEffect } from 'react'
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
import BackToTop from './Components/Back-To-Top'

import expectooLogo from './Images/expectoo logo white png.png'

import './App.css'

function App() {

  useEffect(() => {
    const loader = document.querySelector('.loader');

    const handleTransitionEnd = () => {
      document.body.removeChild(loader);
    };


    const hideLoader = () => {
      loader.classList.add('loader-hidden');
      loader.addEventListener('transitionend', handleTransitionEnd);
    };

    const timeoutId = setTimeout(hideLoader, 3000);

    return () => {
      clearTimeout(timeoutId);
      loader.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

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
      <BackToTop />
      <div className="loader">
        <img src={expectooLogo} alt="Loading" className="loader-image" />
      </div>
    </div>
  )
}

export default App
