 
  import { Card, Carousel} from 'react-bootstrap';
  import { FaPalette, FaTrademark, FaBullhorn, FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa';
  import CustomModal from '../components/ CustomModal';
  import { useNavigate } from 'react-router-dom'
  import React, { useState , useRef, useEffect, useContext, useMemo } from 'react';
  import { Container, Row, Col, Button } from 'react-bootstrap';
  import { useMediaQuery } from 'react-responsive';
  import ImageComponent from '../components/ImageComponent';



  function Dashboard() {
    const clients = [
      { name: 'sokoni', logo: ''},
      { name: 'cpg', logo: '' },
      { name: 'techtips', logo: '' },
      { name: 'civito', logo: ''},
      { name: 'mamaIq', logo: ''},
      { name: 'graphix', logo: ''},
    ];
    
    const [visibleClients, setVisibleClients] = useState(6);

    const loadMoreClients = () => {
      setVisibleClients(prevVisibleClients => prevVisibleClients + 5);
    };

    const scrollPageToTop = () => {
      window.scrollTo(0, 0);
    };

    const navigate = useNavigate()
    const handleGetStarted = ()=>{
      navigate("/about")
      scrollPageToTop();
    }
    const handleviewServices = ()=>{
    navigate("/projects")
    scrollPageToTop();
      
    }
    const handleViewContacts = ()=>{
      navigate("/contacts")
      scrollPageToTop();
    }

    const isLargeScreen = useMediaQuery({ minWidth: 992 });
    return (
      <>
      
        <section className="slideshow" style={{filter: "brightness(100%)",}}>
          
        <Carousel interval={4000} data-bs-ride="carousel">
          <Carousel.Item>
  <div className="carousel-item-container">
     <ImageComponent name = 'carousel1.webp' alt = 'carousel1'/>
    <div className="carousel-caption">
    </div>
  </div>
</Carousel.Item>




            <Carousel.Item>
            <ImageComponent name = 'carousel2.webp'  alt = 'carousel2'/>
              {isLargeScreen ? (
          <Carousel.Caption style={{ marginTop: "200px" }}>
            
            <h1 style={{ color: "white" }}>We transform your unique ideas</h1>
            <button className="btn btn-secondary" onClick={handleGetStarted} style={{backgroundColor: "#520B4D"}}>
              Get Started
            </button>
          </Carousel.Caption>
        ) : (
          <Carousel.Caption>
            
            <h2 style={{ color: "white" }}>We transform your unique ideas</h2>
            <button className="btn btn-secondary" onClick={handleGetStarted} style={{backgroundColor: "#520B4D"}}>
              Get Started
            </button>
          </Carousel.Caption>
        )}
            </Carousel.Item>
            <Carousel.Item>
            <ImageComponent name = 'carousel3.webp'  alt = 'carousel3'/>
              <Carousel.Caption style={{marginTop: isLargeScreen ? "200px" : undefined}}>
              { isLargeScreen ? (<h1 style={{color: "white"}}>
                We empower clients and set new standards
                </h1>) : (
                <h2 style={{color: "white"}}>
                We empower clients and set new standards
                </h2>)}
              
                <button className="btn btn-secondary" onClick={handleviewServices} style={{backgroundColor: "#520B4D"}}>View Our services</button>
              </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
            <ImageComponent name = 'carousel4.webp'  alt = 'carousel4'/>
              <Carousel.Caption  style={{marginTop: isLargeScreen ? "200px" : undefined}}>
                { isLargeScreen ? (
                <h1 style={{color: "white"}}>we drive digital growth and transformation</h1>
                ) : (
                <h2 style={{color: "white"}}>we drive digital growth and transformation</h2>
                )
                }
                <button className="btn btn-secondary" onClick={handleViewContacts} style={{backgroundColor: "#520B4D"}}>Contact Us</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      <br/>
      <section className="heading container" >
    <div className="row">
      <div className="col-md-4 d-md-block">
        <Card className="sparky-card">
          <Card.Body>
            <Card.Title>Graphics Designing</Card.Title>
            <Card.Text>
              <FaPalette style={{ color: '#520B4D' }} />
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>

      <div className="col-md-4 d-md-block">
        <Card className="sparky-card">
          <Card.Body>
            <Card.Title>Brand Creation</Card.Title>
            <Card.Text>
              <FaTrademark style={{ color: '#520B4D' }}  />
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>

      <br />
      <div className="col-md-4 d-md-block">
        <Card className="sparky-card">
          <Card.Body>
            <Card.Title>Social Media Management</Card.Title>
            <Card.Text >
              <FaFacebookSquare style={{color: "#520B4D"}} /> <FaTwitter style={{color: "#520B4D"}}/> <FaInstagram style={{color: "#520B4D"}}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
    </div>
  </section>
  <section className='container'>
    
  </section>

        <section className="content">
          <div className='row'>
            <div className='col-md-7'>
            
            <ImageComponent name = 'exceptional'  alt = 'exceptional'/>

        
        <br/>
            </div>
            <div className='col-md-5 '>
            <div className="mx-2 mb-4">
              <h4 className="card-title mb-3 mb-sm-0" style={{color: "#520B4D"}}>We provide you with exceptional services</h4> <hr/>
              <p style={{ fontSize: '90%', textAlign: 'left' }}>
        We deliver exceptional digital services and innovative{' '}graphics designs empowering
        businesses and individuals to thrive in the digital realm. With a focus
        on creativity, technology, and strategic thinking, we are the go-to
        destination for cutting-edge solutions. Our dedicated team ensures <span className="animated-word">
          unparalleled quality, reliability, and customer satisfaction
        </span>, in every
        project, leveraging the latest advancements in digital technology.
      </p>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <section className='container background-image text-center'>
        
          <br/>
          <br/>
    
      <div className='card' >
        <div className='card-header' style={{ backgroundColor: '#520B4D' }}>
          <h2 className="text-center amazing-heading">Our Vision</h2>
        </div>
        <div className='card-body' style={{ color: "black" }}>
          <p style={{ fontSize: "90%", textAlign: "left" }}>
            Our vision is to be recognized as a leading digital laboratory that transforms ideas into captivating digital experiences. We envision a future where our clients, regardless of their industry or size, can leverage the power of digital services and graphics design to achieve remarkable success. Through our unwavering commitment to innovation, creativity, and collaboration, we aim to set new standards in the digital landscape. By constantly pushing boundaries and embracing emerging technologies, we aspire to be the driving force behind the digital transformation of businesses and the catalyst for their sustained growth.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='card'>
        <div className='card-header' style={{ backgroundColor: '#520B4D' }}>
          <h2 className="text-center amazing-heading">Our Mission</h2>
        </div>
        <div className='card-body' style={{ color: "black" }}>
          <p style={{ fontSize: "90%", textAlign: "left" }}>
            At Digital Lab, our mission is to deliver exceptional digital services and innovative graphics designs that empower businesses and individuals to thrive in the digital realm. We aim to be the go-to destination for cutting-edge solutions that combine creativity, technology, and strategic thinking. Our team of skilled professionals is dedicated to providing unparalleled quality, reliability, and customer satisfaction in every project we undertake. By leveraging the latest advancements in digital technology and staying at the forefront of industry trends, we strive to exceed our clients' expectations and help them achieve their digital goals.
          </p>
        </div>
      </div>
      <br />
      <div className='text-center'>
        <button className='btn btn-secondary' onClick={handleGetStarted} style={{ backgroundColor: '#520B4D' }}>Get Started</button>
      </div>
      <hr />
  
  </section>


        
      
        <section className='text-center'>
        
          <div className='container'>
            
          <h2 className="amazing-heading" style={{color: '#520B4D'}}>Projects</h2>
            <br/>
            </div>
            <div className='row'>
              <div className='col-md-4'>
              <CustomModal name="sokoni" title="Sokoni" imageSource= 'sokoni'
              description="An e-commerce in Dar es salaam" />
              </div> <br/><br/>
              <div className='col-md-4'><CustomModal name="graphix" title="graphix centre" imageSource= 'graphix'
              description="helping with graphic designing" /></div><br/><br/>
              <div className='col-md-4'>
              <button onClick={handleviewServices} className="btn btn-secondary" style={{backgroundColor: '#520B4D'}}>
    See More Projects
  </button>
            </div>
            </div>
            <br/>
            <br/>
            
            </section>

            <hr className='background-image' style={{height: "30px"}}></hr>

      <section>
        <Container>
          <h2 className="amazing-heading" style={{color: '#520B4D'}}>Team Members</h2>
        
          <div className='row'>
            <div className='col-md-3 mb-4'>
              <div className='member-card'>
                <div className='member-image'>
                  <ImageComponent name = 'member1'  alt='Member 1' />
                  </div>
                  <div className='member-details'>
                    <h4>Member 1</h4>
                    <p>Contact information</p>  
                    <p>Description of Member 1</p>
                    </div>
                    </div>
                    </div>
                    
                    <div className='col-md-3 mb-4'>
              <div className='member-card'>
                <div className='member-image'>
                  <ImageComponent name = 'member1' alt='Member 1'  />
                  </div>
                  <div className='member-details'>
                    <h4>Member 2</h4>
                    <p>Contact information</p>
                    <p>Description of Member 2</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3 mb-4'>
              <div className='member-card'>
                <div className='member-image'>
                  <ImageComponent name = 'member1' alt='Member 1' />
                  </div>
                  <div className='member-details'>
                    <h4>Member 3</h4>
                    <p>Contact information</p>
                    <p>Description of Member 3</p>
                    </div>
                    </div>
                    </div>
                    <div className='col-md-3 mb-4'>
                    <div className='member-card'>
                <div className='member-image'>
                  <ImageComponent name = 'member1' alt='Member 1' />
                  </div>
                  <div className='member-details'>
                    <h4>Member 3</h4>
                    <p>Contact information</p>
                    <p>Description of Member 3</p>
                    </div>
                    </div>
                    </div>
                    
                    </div>


        </Container>
      </section>
          
            <hr className='background-image' style={{height: "30px"}}></hr>
            <section className='text-center'>
    <Container>
      <h2 className="amazing-heading" style={{color: '#520B4D'}}>Our Clients</h2>
      <Row style={{paddingLeft: "40px"}}>
        {clients.slice(0, visibleClients).map(client => (
          <Col key={client.name} xs={10} md={4} lg={4}>
            <div style={{backgroundColor: "black"}}>
           
            <ImageComponent name = {client.name} alt={client.name} cls = "client-logo" />
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
      <hr/>
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
     
      </>
    );
  }

  export default Dashboard;
