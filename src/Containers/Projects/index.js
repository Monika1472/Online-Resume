import React,{useState} from 'react'
import "./index.css"

const Projects=()=> {

  const [showModal,setShowModal]=useState(false);
  const [modalContent,setModalContent]=useState({});

  const projects = [
    {
      title: 'DATA QUERY TOOL',
      description:
        'A tool that allows users to manage SQL queries with placeholders, supports multiple data sources, and role-based access.',
      link: 'https://github.com/Monika1472/Query-Producer-Tool/tree/main',
    },
    {
      title: 'KAFKA PRODUCER TOOL',
      description:
        'An interface for managing Kafka message templates, supporting multiple Kafka servers, and role-based message posting.',
      link: 'https://github.com/Monika1472/KafkaProducerToolApp',
    },
    {
      title: 'ONE-Z APP',
      description:
        'A shopping app that lets users select multiple carts simultaneously, featuring an intuitive user experience and efficient cart management.',
      link: 'https://github.com/Monika1472/OneZShop/tree/main/practise',
    },
    {
      title:'SMART CONTRACT BASED E-VOTING SYSTEM USING BLOCKCHAIN',
      description:'Developed a secure and transparent e-voting system leveraging blockchain technology to ensure the integrity and anonymity of votes. Utilized smart contracts to automate the voting process, preventing tampering and fraud. ',
      link:'https://drive.google.com/file/d/1dz3wWd1sVwc7--olCD5B8qdgX997iWGZ/view?usp=sharing',
    },
    {
      title:'COLLISION DETECTION WARNING SYSTEM USING ARDUINO',
      description:
      'Designed a real-time collision detection system using Arduino, ultrasonic sensors, and buzzers to prevent accidents. This project aims to enhance safety by providing early warnings to users when objects are detected within a certain range.',
      link:'https://drive.google.com/file/d/1bO3yDTWgASU6ujzEeJzMgLLnA1A9UK7y/view?usp=sharing',
    },
    {
      title:'HEART DISEASE PREDICTION SYSTEM',
      description:
      'Implemented a machine learning-based prediction system to assess the risk of heart disease in patients based on clinical data. The system uses algorithms like Logistic Regression, Decision Trees, and Random Forest to analyze risk factors and provide accurate predictions, aiding early diagnosis and preventive care.',
      link:'https://github.com/orgs/Project-Heart/repositories',
    }
  ];

  const openModal=(proj)=>{
      setModalContent(proj)
      setShowModal(true);
  }
  const closeModal=()=>{
    setShowModal(false);
  }
  return (
    <div className='Projects-Container'>
        <h3 className='Projects-title'><strong>PROJECTS</strong></h3>
        <div className='Projects-grid'>
        {projects.map((project, index) => (
          <div className='Projects-card' key={index}>
            <button onClick={() => openModal(project)}>
              <h3>{project.title}</h3>
            </button>
          </div>
        ))}
      {showModal &&(
         <div className='Modal-overlay'>
         <div className='Modal-box'>
           <h3>{modalContent.title}</h3>
           <p>{modalContent.description}</p>
           <a
             href={modalContent.link}
             target='_blank'
             rel='noopener noreferrer'
             className='Modal-link'
           >
             View
           </a>
           <button className='Modal-close' onClick={closeModal}>
             Close
           </button>
         </div>
       </div>
      )}
        </div>
    </div>
  )
}

export default Projects