import { Container, Row, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import React, {useContext, useState } from 'react';
import ImageComponent from './ImageComponent';


const Contacts = () => {
  
const serviceId = 'service_tyyy4kp';
const templateId = 'template_yhjsukc';
const userId = 'SmSgw9F01Mk2r-4jY';

const sendEmail = () => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  emailjs.send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      // Handle success, e.g., show a success message to the user
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      // Handle error, e.g., show an error message to the user
    });
};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Send the email
    sendEmail();

    // Form is valid, handle form submission
    // Add your logic here

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormErrors({});
  };

  return (
    <>
    <section className="container-fluid text-center text-white py-5 background-back">
      
      <div className='row' style={{color: "black"}}>
        <div className='col-md-6 card container' >
      <h2 className="mb-4 amazing-heading card-header">Contact Us</h2>
      <h5 style={{color: "black"}}>Get in touch with us for any inquiries or collaborations</h5>
      <br/>
      <div className="mb-4" style={{color: "black"}}>
      <h4>Email: <a href="mailto:digitallabtz@gmail.com">digitallabtz@gmail.com</a></h4>
        <h4>Phone: +255 692-0833-236</h4>
        <h4>Address: Dar es Salaam, Tanzania</h4>
        <h4>Facebook: <a href = "#facebook" target="_blank" style={{color: "#520B4D", filter: "brightness(300%)"}} >Digital Lab</a></h4>
        <h4>Instagram: <a href="https://www.instagram.com/digital_lab_tz/" target="_blank" rel="noopener noreferrer" style={{color: "#520B4D", filter: "brightness(300%)"}} >digital_lab_tz</a></h4>

        
      </div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
        </div>
        <div className="mb-3">
          <textarea
            className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
        </div>
        <button type="submit" className="btn btn-secondary" onClick={handleSubmit} style={{backgroundColor: "#520B4D"}}>
  Send Message
</button>
<hr/>
      </form>
      </div>
      <div className='col-md-6 container'>
  <ImageComponent name ='exceptional.webp' cls="img-fluid" alt="Image" />
</div>

      </div>
    </section>
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
</>
    
  );
};

export default Contacts;
