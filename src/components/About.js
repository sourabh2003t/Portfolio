import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import myPhoto from '../assets/pp.jpg'; 
import reactt from '../assets/react.png';
import mong from '../assets/mongg.png';
import jsss from '../assets/jssss.png';
import jss from '../assets/js.png';
import gitt from '../assets/git.png';



const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current); 
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current); 
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
        <img src={myPhoto} alt="Your Photo" className={`about-img ${isVisible ? 'slide-in-left' : ''}`} />
        <div className={`about-text ${isVisible ? 'slide-in-right' : ''}`}>
          <h2 className={`about-title ${isVisible ? 'pop-up' : ''}`}>About Me</h2>
          <p>
          My self Sourabh Totod and I am a final year college student pursuing a Bachelor of Technology in Computer Science and 
          Engineering at the Indian Institute of Information Technology Vadodara. With a strong foundation 
          in full stack development, I have honed my skills in technologies like React.js, Node.js, and MongoDB 
          through various internships and projects. My passion for coding drives me to create innovative solutions 
          that enhance user experiences. I thrive in collaborative environments, and I’m eager to contribute to impactful
           projects that challenge my abilities and foster my growth as a developer. Outside of coding, I enjoy staying
            updated with the latest industry trends and exploring new technologies.
          </p>

        </div>
      </div>
          <div className="technology-section">
            <h3>Technologies</h3>
            <div className="tech-grid">
              <div className="tech-box">
                <img src={ reactt } alt="React" />
              </div>
              <div className="tech-box">
                <img src={ jss} alt="Node.js" />
              </div>
              <div className="tech-box">
                <img src={jsss} alt="JavaScript" />
              </div>
              <div  className="tech-box">
                <img src= {mong} alt="MongoDB" />
              </div>
              <div className="tech-box">
                <img src= {gitt} alt="Github" />
              </div>
            </div>
          </div>
    </section>
  );
};

export default About;
