import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {PiWarningCircleLight } from 'react-icons/pi';

const ProjectCardDeleteAlert = ({ show, handleClose }) => {
  const handleDelete = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
    <span className='d-flex align-items-center justify-content-center text-warning pt-4 pb-2' style={{fontSize:"100px"}}><PiWarningCircleLight/></span>
      <Modal.Header className='justify-content-center border-0 p-0'>
        <Modal.Title className='fs-2 fw-600'>Are You Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center fw-600 text-secondary'>This action can not be undone. Do you want to continue?</Modal.Body>
      <Modal.Footer className='d-flex justify-content-center border-0'>
        <Button className="red-icon border-0 font-size-14 px-4 py-2" onClick={handleClose}>
          No
        </Button>
        <Button className="green-2 border-0 font-size-14 px-4 py-2" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectCardDeleteAlert;
