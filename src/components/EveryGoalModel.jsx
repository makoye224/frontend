import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';

function EveryGoalModal() {
  const [show, setShow] = useState(false);
  const [goals, setGoals] = useState([]);
  const [uniqueGoals, setUniqueGoals] = useState(new Set());

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    try {
      const response = await axios.get('/api/goals/all');
      const fetchedGoals = response.data;
      setGoals(fetchedGoals);
      // Create a Set of unique goals
      const unique = new Set();
      fetchedGoals.forEach((goal) => unique.add(goal.text));
      setUniqueGoals(unique);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       All Plans
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>These Are Summer Plans From All Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            {[...uniqueGoals].map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EveryGoalModal;