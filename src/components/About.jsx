import React, {useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent';



const About = () => {
  const scrollPageToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
    <div style={{backgroundColor: ""}}>
    <Container className="text-center" style={{color: "black"}}>
      <header className="my-5">
        <hr/>
        <h1 className="amazing-heading"  style={{color: "#520B4D"}}>About Us</h1>
        
      </header>
      <section className="about-section py-5 background-back">
        <ImageComponent name = 'carousel2.webp'
          alt="Location"
          cls="img-fluid"
          styl={{ borderRadius: '50%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', width: '300px', height: '300px', objectFit: 'cover' }}
       />
        <div className="row my-5">
          <div className='container'>
            
            <h4 style={{color: "white", filter: "brightness(300%)"}} className= "amazing-heading">We are located in Dar es Salaam, Tanzania</h4>
            </div>
            </div>
          
     
      </section>
      <hr/>
      <br/>
      <section className="about-section bg-gradient">
        <Row className="align-items-center">
          <Col md={6}>
            <ImageComponent  
              name = 'carousel1.webp'
              alt="About Image"
              styl={{ width: '100%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)' }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{color: "#520B4D"}} className="amazing-heading">Digital Lab</h2>
            <p>
            Welcome to Digital Lab, your premier destination for exceptional digital services and
graphics design solutions. Our team of talented professionals is passionate about
pushing the boundaries of creativity and technology to create captivating digital
experiences that drive results and elevate brands. With expertise in digital services and
graphics design, we are dedicated to delivering innovative solutions that leave a lasting
impression.
            </p>
            <p>
            At Digital Lab, our comprehensive range of services includes web design, UI/UX design,
branding, social media management and graphics design. Whether you're aiming to
establish a strong online presence or revamp your existing brand, we have the
knowledge and skills to bring your vision to life. What sets us apart is our unwavering
focus on collaboration and customer satisfaction. We take the time to truly understand
your unique goals and requirements, ensuring that our solutions are tailored to meet
your specific needs. Our meticulous attention to detail, combined with a strategic
approach, allows us to create impactful designs that resonate with your target
audience.
            </p>
            <p>
            Join us at Digital Lab and let us transform your digital presence into something
extraordinary. Together, we'll collaborate to create digital experiences that captivate,
inspire, and drive success for your business. Experience the difference with Digital Lab
as we leverage our expertise to deliver outstanding results for your digital needs
            </p>
          </Col>
        </Row>
      </section>
      <hr/>
    </Container>
    <div className='amazing-heading container'>
      <div>
    <Link to="/contacts" className="btn btn-secondary" onClick={()=>{scrollPageToTop()}} style={{backgroundColor: "#520B4D"}}>
  Contact Us
</Link> </div> 
<div>
<Link to="/projects" className="btn btn-secondary" onClick={()=>{scrollPageToTop()}} style={{backgroundColor: "#520B4D", color: "white"}} >
  View Our Projects
</Link>
</div>
<div>
<Link to="/socialmedia" className="btn btn-secondary" onClick={()=>{scrollPageToTop()}} style={{backgroundColor: "#520B4D"}}>
  View our social media posts
</Link>
</div>
</div>

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
};

export default About;
