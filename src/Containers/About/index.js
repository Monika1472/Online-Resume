import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const About=()=> {
  return (
    <div className="about-container">
      <div className="about-box">
        <h3 >ABOUT ME</h3>
        <p><b>
        Hi, I'm Monika, a passionate software developer with one year of experience at <b>WiseTech Global</b>, 
        where I worked closely with customers to meet their requirements. During my time there, 
        I primarily focused on React.js for frontend development and Java for backend services.
        I had the opportunity to work on a variety of tasks, including building user-friendly interfaces, 
        implementing enhancements, and managing SQL queries efficiently. I also gained experience in 
        Kafka message handling and its integration into solutions. Additionally, I have written efficient 
        test cases, optimized application performance and collaborated with cross-functional teams to 
        deliver high-quality solutions.
        </b></p>

        <h3>PERSONAL INFORMATION</h3>
        <div className="personal-info">
          <div className="info-item">
            <strong>Name:</strong> <b>Monika R</b>
          </div>
          <div className="info-item">
            <strong>Age:</strong><b>22</b>
          </div>
          <div className="info-item">
            <strong>Address:</strong> <b>Chennai,India</b>
          </div>
          <div className="info-item">
            <strong>Email:</strong> <b>monirajan1472@gmail.com</b>
          </div>
          <div className="info-item">
            <strong>Contact No:</strong> <b>+91-7358114702</b>
          </div>
        </div>
      <div className="button-group">
          <Link to="/Contact">
            <button className="button">Contact Me</button>
          </Link>
          <a
            href="https://www.linkedin.com/in/monika-rajan-66b95521a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">View LinkedIn</button>
          </a>
        </div>
        </div>
    </div>
  );
}

export default About;