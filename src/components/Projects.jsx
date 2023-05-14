import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      imageSource: 'https://tinyurl.com/yrhmcnha',
      description: 'Project Description 1',
    },
    {
      name: 'Project 2',
      imageSource: 'https://tinyurl.com/yrhmcnha',
      description: 'Project Description 2',
    },
    {
      name: 'Project 3',
      imageSource: 'https://tinyurl.com/yrhmcnha',
      description: 'Project Description 3',
    },
    {
      name: 'Project 4',
      imageSource: 'https://tinyurl.com/yrhmcnha',
      description: 'Project Description 4',
    },
    {
      name: 'Project 5',
      imageSource: 'https://tinyurl.com/yrhmcnha',
      description: 'Project Description 4',
    },
    {
      name: 'Project 6',
      imageSource: 'https://tinyurl.com/yrhmcnha',
      description: 'Project Description 4',
    },
  ];

  return (
    <>
    <Container>
      <section className="container-fluid text-center">
        <div>
        <hr className='background-image' style={{height: "50px"}}></hr>
          <h2 style={{ color: 'purple' }}>Projects</h2>
        </div>
        <h3 style={{color:"magenta"}}>Amazing Projects by Our Team </h3>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img className="card-img-top" src={project.imageSource} alt={project.name} />
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
        <Button variant="primary" href="/contacts">Contact Us</Button>
      </section>
    </Container>
    <hr className='background-image' style={{height: "20px"}}></hr>
    <section className="container-fluid text-center" style={{ backgroundColor: "#212529", color: "white" }}>
      <footer className="footer">
        <Container>
          <p>&copy; 2023 Digital Labs. All rights reserved.</p>
          <p>Random content 1</p>
          <p>Random content 2</p>
          <p>Random content 3</p>
          {/* Add more random content here */}
        </Container>
      </footer>
    </section>
    </>
  );
}

export default Projects;
