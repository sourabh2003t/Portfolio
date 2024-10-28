import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Projects.css';
import GymHome from '../assets/Gym_Home.png';
import GymaddTocart from '../assets/Gym_addTocart.png';
import GymLogin from '../assets/Gym_Login.png';
import GymSignup from '../assets/Gym_Signup.png';
import GymFooter from '../assets/Gym_Footer.png';
import Foodie1 from'../assets/Foodie_Home.png';
import Foodie2 from'../assets/Foodie_2.png';
import Foodie3 from'../assets/Foodie_3.png';
import Foodie4 from'../assets/Foodie_4.png';
import Foodie5 from'../assets/Foodie_5.png';
import CarHome from'../assets/Car_Home.png';
import CarService from '../assets/Car_service.png';
import CarLogin from '../assets/Car_login.png';
import CarSignup from '../assets/Car_Signup.png';
import CarSlide from '../assets/Car_Slide.png';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Fitness-Craft</h3>
          <Slider {...settings}>
            <div>
              <img src={GymHome} alt="Project 1 - Screenshot 1" />
            </div>
            <div>
              <img src={GymaddTocart} alt="Project 1 - Screenshot 2" />
            </div>
            <div>
              <img src={GymLogin} alt="Project 1 - Screenshot 3" />
            </div>
            <div>
              <img src={GymSignup} alt="Project 1 - Screenshot 4" />
            </div>
            <div>
              <img src={GymFooter} alt="Project 1 - Screenshot 5" />
            </div>
          </Slider>
          <p>This gym equipment e-commerce website is developed using React for the frontend and Node.js for the backend,
             with MongoDB as the database. The platform provides a sleek, responsive UI for browsing and purchasing gym 
             equipment, complete with product details, categories, and a shopping cart. With secure user authentication, 
             the Node.js backend ensures efficient handling of requests, while MongoDB manages product data and orders, 
             offering a scalable and robust solution for both users and administrators.</p>
        </div>
        <div className="project-card">
          <h3>Foodie-Restaurant</h3>
          <Slider {...settings}>
            <div>
              <img src={Foodie1} alt="Project 2 - Screenshot 1" />
            </div>
            <div>
              <img src={Foodie2} alt="Project 2 - Screenshot 2" />
            </div>
            <div>
              <img src={Foodie3} alt="Project 2 - Screenshot 3" />
            </div>
            <div>
              <img src={Foodie4} alt="Project 2 - Screenshot 4" />
            </div>
            <div>
              <img src={Foodie5} alt="Project 2 - Screenshot 5" />
            </div>
          </Slider>
          <p>Created a React-based landing page for a restaurant focusing on fast and fresh food delivery, achieving a 35%
improvement in online order conversion rates through elevated UI/UX and faster load times. Boosted the website’s performance and mobile responsiveness, leading to a 40% increase in mobile user engagement and a
30% reduction in page load time, enhancing overall user satisfaction.</p>
        </div>
        <div className="project-card">
          <h3>Car Rental</h3>
          <Slider {...settings}>
            <div>
              <img src={CarHome} alt="Project 3 - Screenshot 1" />
            </div>
            <div>
              <img src={CarService} alt="Project 3 - Screenshot 2" />
            </div>
            <div>
              <img src={CarSlide}alt="Project 3 - Screenshot 3" />
            </div>
            <div>
              <img src={CarLogin} alt="Project 3 - Screenshot 4" />
            </div>
            <div>
              <img src={CarSignup} alt="Project 3 - Screenshot 5" />
            </div>
          </Slider>
          <p>Developed a car rental application using HTML, CSS, JavaScript, and MongoDB, allowing users to browse and reserve
cars. The system streamlined the reservation process. Designed a responsive frontend with HTML, CSS, and JavaScript, and upgraded database interactions using MongoDB,
leading to a 35% improvement in query performance and a 25% improvement in page load efficiency, enhancing overall
user experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
