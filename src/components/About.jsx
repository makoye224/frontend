import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
    <Container className="text-center">
      <header className="my-5">
        <h1>About Us</h1>
        <h2>We are Agents for Change</h2>
      </header>
      <section className="about-section py-5">
        <img
          src="https://tinyurl.com/334nfh5k"
          alt="Location"
          className="img-fluid"
          style={{ borderRadius: '50%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)', width: '200px', height: '200px', objectFit: 'cover' }}
        />
        <div className="row my-5">
          <div className="col-md-4">
            <h3 className="text-primary">Place 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="col-md-4">
            <h3 className="text-success">Place 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-danger">Place 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>
      </section>
      <section className="about-section bg-gradient">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://tinyurl.com/4s5skr7f"
              alt="About Image"
              style={{ width: '100%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)' }}
            />
          </Col>
          <Col md={6}>
            <h2 className="text-warning">Welcome to Our Practice</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim turpis non felis faucibus
              finibus. In lacinia, lorem ut egestas tincidunt, quam elit sollicitudin lorem, nec ullamcorper nunc justo
              ac odio. Morbi ac nisi a turpis aliquet lobortis. Pellentesque facilisis neque sit amet sapien lacinia,
              ac luctus nunc sagittis.
            </p>
          </Col>
        </Row>
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
};

export default About;
