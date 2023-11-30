// import React from 'react'
import { useState, useEffect } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import '../Stylesheets/Back-To-Top-Comp.css'

const BackToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
    onClick={scrollToTop}>
      <IoIosArrowUp className="back-to-top-ico" />
    </div>
  )
}

export default BackToTop