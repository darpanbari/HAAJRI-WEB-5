import React from "react";
import { Card, Col } from "react-bootstrap";

const POSDashCard = ({
  title,
  icon,
  status,
  quantity,
  cardHeight,
  className,
  quantColor
}) => {
  return (
    <>
      <Col xxl={3} md={6} sm={6} className="mb-4">
        <Card
          className="custom-shadow custom-border-radius bg-custom-white border-0"
          style={{ height: cardHeight }}
        >
          <Card.Body className="p-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className={`white-icon dash-icon ${className}`}>
                {icon}
              </span>
              <div className="d-flex flex-column ms-3">
                {status ? (
                  <p className="text-secondary font-size-12  mb-0">{status}</p>
                ) : (
                  ""
                )}

                {title ? <h6 className="mb-0">{title}</h6> : ""}
              </div>
            </div>
            <h4 className={`mt-3 ${quantColor}`}>{quantity}</h4>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default POSDashCard;
