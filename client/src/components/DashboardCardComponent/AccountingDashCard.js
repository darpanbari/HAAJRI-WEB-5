import React from "react";
import { Card, Col } from "react-bootstrap";

const AccountingDashCard = ({
  title,
  icon,
  status,
  quantity,
  cardHeight,
  className,
  quantColor,
}) => {
  return (
    <>
      <Col xxl={6} md={6} sm={6} className="">
        <Card
          className="bg-custom-white border-0 d-flex"
          style={{ height: cardHeight }}
        >
          <Card.Body className="p-2  d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className={`white-icon dash-icon text-white ${className}`}>
                {icon}
              </span>
              <div className="d-flex flex-column ms-3 text-start">
                {status ? (
                  <p className="text-secondary font-size-12  mb-0">{status}</p>
                ) : (
                  ""
                )}

                <h5 className={`mb-0 ${quantColor}`}>{quantity}</h5>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AccountingDashCard;
