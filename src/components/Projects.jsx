import React, {useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent';


const Projects = () => {
  
  const scrollPageToTop = () => {
    window.scrollTo(0, 0);
  };
  const projects = [
    {
      name: 'SOKONI',
      imageSource: 'sokoni',
      description: 'An e-commerce aiming to transform shopping experience in Dar es Salaam',
    },
    {
      name: 'CPG',
      imageSource: 'cpg',
      description: 'Project Description 2',
    },
    {
      name: 'CIVITO COMPANY LIMITED',
      imageSource:  'civito',
      description: 'Project Description 3',
    },
    {
      name: 'TECH TIPS',
      imageSource: 'techtips',
      description: 'Project Description 4',
    },
    {
      name: 'MAMA IQRAM COLLECTION',
      imageSource: 'mamaIq',
      description: 'Project Description 4',
    },
    {
      name: 'GRAPHICS CENTRE',
      imageSource: 'graphix',
      description: 'Project Description 4',
    },
  ];

  

  return (
    <>
    <div className ="background-section" >
    <Container>
      <section className="container-fluid text-center">
        <div>
        <hr/>
          <h2 style={{color: "#520B4D", backgroundColor: "white"}} className="amazing-heading">projects</h2>
        </div>
        <hr style={{color:"white"}}/>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <ImageComponent name = {project.imageSource}/>
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
        <br />
        <Link to="/contacts" className="btn btn-secondary" onClick={()=>{scrollPageToTop()}} style={{backgroundColor: "#520B4D"}}>
  Contact Us
</Link>
      </section>
    </Container>
    <hr className='background-image' style={{height: "20px"}}></hr>
    <section className="container-fluid text-center" style={{ backgroundColor: "#212529", color: "white" }}>
      <footer className="footer">
      <Container>
          <p>&copy; 2023 Digital Labs. All rights reserved.</p>
          <h6>Email: digitallabtz@gmail.com</h6>
        <h6>Phone: +255 692-0833-236</h6>
        <h6>Address: Dar es Salaam, Tanzania</h6>
        <h6>Facebook: <a href = "#facebook" target="_blank" >Digital Lab</a></h6>
        <h6>Instagram: <a href="https://www.instagram.com/digital_lab_tz/" target="_blank" rel="noopener noreferrer">digital_lab_tz</a>
        </h6>
        <hr/>
        </Container>
      </footer>
    </section>
    </div>
    </>
  );
}

export default Projects;
