
import { Card, Carousel} from 'react-bootstrap';
import { FaPalette, FaTrademark, FaBullhorn} from 'react-icons/fa';
import CustomModal from '../components/ CustomModal';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function Dashboard() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam auctor sodales. Fusce ut libero et lectus efficitur tristique. Sed laoreet tristique gravida. Phasellus varius dolor at erat efficitur, ac hendrerit ex accumsan. Integer malesuada lectus eu lectus pulvinar, sit amet pulvinar neque rhoncus. In sed libero non lacus dignissim lacinia. Sed sed ex aliquam, rhoncus mauris ac, ultrices dui. Cras euismod, orci sed tincidunt eleifend, nunc mauris tempus nunc, a commodo mi enim a arcu. Sed auctor enim dolor, ut fermentum eros posuere sit amet. Aliquam et mi id nulla euismod finibus. Curabitur porttitor aliquet varius. Donec mattis urna vel efficitur vulputate. Quisque semper nisi augue, et pellentesque elit egestas id. In sit amet tortor id sem fermentum efficitur sit amet ut mauris. Duis elementum lacus eu libero rutrum, sed semper quam rhoncus.";

  const clients = [
    { name: 'Client 1', logo: 'https://rb.gy/s7bfm' },
    { name: 'Client 2', logo: 'https://tinyurl.com/4xv4zdxu' },
    { name: 'Client 3', logo: 'https://tinyurl.com/yrfth9vj' },
    { name: 'Client 4', logo: 'https://tinyurl.com/ycxthc5f' },
    { name: 'Client 5', logo: 'https://tinyurl.com/yhrn2x8w' },
    { name: 'Client 6', logo: 'https://tinyurl.com/4wr78m6a' },
    { name: 'Client 7', logo: 'https://tinyurl.com/yc6uj5e2' },
    { name: 'Client 8', logo: 'https://tinyurl.com/bdcr9w5k' },
    { name: 'Client 9', logo: 'https://tinyurl.com/ycxthc5f' },
    { name: 'Client 10', logo: 'https://tinyurl.com/4ae7uwt9' },
  ];
  
  const [visibleClients, setVisibleClients] = useState(10);

  const loadMoreClients = () => {
    setVisibleClients(prevVisibleClients => prevVisibleClients + 5);
  };

  const navigate = useNavigate()
  const handleGetStarted = ()=>{
    navigate("/about")
  }
  const handleviewServices = ()=>{
    navigate("/projects")
  }
  const handleViewContacts = ()=>{
    navigate("/contacts")
  }
  return (
    <>
   
      <section className="slideshow" style={{backgroundColor: "black"}}>
        
        <Carousel interval={5000}>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://tinyurl.com/bde9j4sh"
              alt="Slide 1"
            />
            <Carousel.Caption>
              <h2>Welcome to Our Website</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="btn btn-block btn-primary" onClick={handleGetStarted}>Get Started</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://tinyurl.com/47txpzyd"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h2>Discover Our Services and Projects</h2>
              <h2>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
              <button className="btn btn-primary" onClick={handleviewServices}>View Services</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://tinyurl.com/4pe57b2y"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h2>Contact Us Today</h2>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <button className="btn btn-primary" onClick={handleViewContacts}>Contact Us</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    <br/>
      <section className="heading container">
      <div className="row">
        <div className="col-md-4 d-none d-md-block">
          <Card>
            <Card.Body>
              <Card.Title>Graphic Designing</Card.Title>
              <Card.Text>
                <FaPalette/>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
        </div>
       
        <div className="col-md-4 d-none d-md-block">
          <Card>
            <Card.Body>
              <Card.Title>Brand Creation</Card.Title>
              <Card.Text>
              <FaTrademark/>
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
        </div>
        <br/>
        <div className="col-md-4 d-none d-md-block">
          <Card>
            <Card.Body>
              <Card.Title>Marketing</Card.Title>
              <Card.Text>
              <FaBullhorn/>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br/>
      </div>
        
      </section>

      <section className="content">
        <div className='row'>
          <div className='col-md-6'>
          <div className="card">
            <div className="card-body p-1">
            <img className="card-img img-fluid rounded-0 my-3" src="https://tinyurl.com/f8cpy5bt" alt="Card Background" />
            </div>
       </div>
       <br/>
          </div>
          <div className='col-md-6 '>
          <div className="mx-2 mb-4">
            <h2 className="card-title mb-3 mb-sm-0">We provide you with breathtaking services</h2>
            <p className="card-text text-muted mb-0 mb-sm-5">
            Choose Digital Labs to take your business to a whole new level of creativity and outreach. In today's digital age, establishing a strong online presence is crucial for success. At Choose Digital Labs, we specialize in helping businesses thrive in the digital realm by providing innovative solutions tailored to their unique needs.

            With our team of talented professionals,
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className ="background-section" style={{color: "white"}}>
      <br/>
          <br/>
        <Container>
          <button className='btn-block btn btn-warning'><h4>View Your business in a new spectrum</h4></button>
          <div className='card'>
          <div className='card-header'></div>
          <div className='card-body'  style={{color: "black"}}>
          <p>we provide you with we provide you with  {lorem}</p>
          <br/>
          <p>whether it's individual or group projects</p>
          </div>
          </div>
          <br/>
          <button className=' btn btn-success'>we got you</button>
        
        </Container>
      </section>
      <hr/>
      <section className='container-fluid text-center'>
        <div>
          <h2 style={{color:"purple"}}>Projects</h2>
          </div>
          <h4>Take a snippet at this amazing projects by our team</h4>
          <div className='row'>
            <div className='col-md-4'>
            <CustomModal name="Project 1" title="Project Title" imageSource="https://tinyurl.com/yrhmcnha" 
            description="Project Description" />
            </div> <br/><br/>
            <div className='col-md-4'><CustomModal name="Project 2" title="Project Title" imageSource="https://tinyurl.com/yrhmcnha" 
            description="Project Description" /></div><br/><br/>
            <div className='col-md-4'>
            <button className='btn btn-primary' onClick={()=>{navigate("/projects")}}>see more projects</button>
          </div>
          </div>
          <br/>
          <br/>
         
          </section>
          <hr className='background-image' style={{height: "20px"}}></hr>
          <section className="">
          <Container>
          <h2 style={{color:"purple"}}>Our Clients</h2>
      <Row>
        {clients.slice(0, visibleClients).map(client => (
          <Col key={client.name} xs={6} md={4} lg={4}>
            <div className="client-item">
              <img className="client-logo" src={client.logo} alt={client.name} />
            </div>
            <br/>
          </Col>
        ))}
      </Row>
      {visibleClients < clients.length && (
        <Button variant="primary" onClick={loadMoreClients}>
          Load More
        </Button>
      )}
    </Container>
    </section>
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

export default Dashboard;
