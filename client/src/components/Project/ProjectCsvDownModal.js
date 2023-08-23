import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

const ProjectCsvDownModal = ({
  modalTitle,
  modalContent,
  modalWidth,
  show,
  handleCloseModal,
}) => {
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModal}
        id="customModal"
        tabIndex="-1"
        aria-labelledby="customModalLabel"
        aria-hidden="true"
        dialogClassName={`custom-modal-dialog ${modalWidth}`}
        
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="customModalLabel"
            className="fs-6 p-1"
            style={{ fontWeight: "600" }}
          >
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">{modalContent}</Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn bg-light-gray"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button type="submit" className="btn green-2 text-white mx-2">
            Upload
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCsvDownModal;
