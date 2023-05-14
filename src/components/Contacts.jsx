import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contacts = () => {
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
    <section className="container-fluid text-center bg-dark text-white py-5">
      <h2 className="mb-4">Contact Us</h2>
      <p>Get in touch with us for any inquiries or collaborations.</p>
      <div className="mb-4">
        <h4>Email: info@digitallabs.com</h4>
        <h4>Phone: +1 123-456-7890</h4>
        <h4>Address: 123 Main Street, City, Country</h4>
      </div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
            placeholder="Name"
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
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      
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
};

export default Contacts;
