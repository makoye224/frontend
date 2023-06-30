import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function CustomModal(props) {
  const { name, title, imageSource, description } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor: '#520B4D'}}>
        {name}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title></Modal.Title>
          <Container>
          <img className='container-fluid client-logo' src={imageSource} alt="photo" style={{backgroundColor:"black"}}/>
          <p>{description}</p>
          <div className="d-flex">
            <div className="d-flex justify-content-start" style={{ flex: '100%' }}></div>
            <div className="d-flex justify-content-end" style={{ flex: '100%' }}></div>
          </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect()(CustomModal);
