import React from "react";
import { Card, Col } from "react-bootstrap";

const MainCardComponent = ({title, cardHeight, cardWidth, content }) => {
  return (
    <>
      <Col className="mb-4">
        <Card
          className="custom-shadow custom-border-radius bg-custom-white border-0"
          style={{ height: cardHeight, width: cardWidth }}
        >
          <Card.Body className="p-0">
            <h6 className="border-bottom p-4 mb-0">{title}</h6>
            <div className=" text-center">
              {content}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MainCardComponent;
