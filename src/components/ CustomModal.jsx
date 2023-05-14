import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CustomModal(props) {
  const { name, title, imageSource, description } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title></Modal.Title>
          <img className='container-fluid' src={imageSource} alt="photo" />
          <p>{description}</p>
          <div className="d-flex">
            <div className="d-flex justify-content-start" style={{ flex: '100%' }}></div>
            <div className="d-flex justify-content-end" style={{ flex: '100%' }}></div>
          </div>
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
