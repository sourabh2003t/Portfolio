import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'Jun 2024 - Aug 2024',
      title: 'Sharada Productions',
      description: 'I was a Full Stack Developer worked on Developing a full-stack e-commerce platform for gym equipment using React.js, Node.js, Express.js, and MongoDB.',
      location: 'Remote'
    },
    {
      date: 'Sep 2017 - May 2020',
      title: 'ITEASE',
      description: 'I was a Software Developer worked on Designing and implementing responsive user interfaces using React.js.',
      location: 'Remote'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="date">{exp.date}</div>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            <p className="location">{exp.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
