import React from "react";
import { Card, Col } from "react-bootstrap";

const SupportDashCards = ({title,icon, status, quantity, className}) => {
  return (
    <>
      <Col md={3} sm={6} className="mb-4">
        <Card
          className="custom-shadow custom-border-radius bg-custom-white border-0"
          style={{ height: "17rem"}}
        >
          <Card.Body className="p-4">
          <span className={`white-icon dash-icon ${className}`} >
           {icon}
          </span>
            <p className="text-secondary font-size-12 mt-3 mb-2">{status}</p>
            <h6>{title}</h6>
            <h3 className="mt-3">{quantity}</h3>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SupportDashCards;
