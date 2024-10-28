import React, { useEffect, useState } from 'react';
import './Hero.css';
import myPhoto from '../assets/p.jpg';
import myCV from '../assets/Sourabh_Totod.pdf';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <img src={myPhoto} alt="Your Photo" className={`hero-img ${isVisible ? 'zoom' : ''}`} />
        <h1 className={`hero-title ${isVisible ? 'slide-up' : ''}`}>Hello, I'm Sourabh</h1>
        <p className={`hero-description ${isVisible ? 'slide-up' : ''}`}>Full Stack Developer | Building seamless digital experiences</p>
        <div className={`btn-container ${isVisible ? 'slide-up' : ''}`}>
          <a href={myCV} download="Sourabh_CV.pdf" className="btn">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
