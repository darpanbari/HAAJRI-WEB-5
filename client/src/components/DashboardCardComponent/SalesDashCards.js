import React from "react";
import { Card, Col } from "react-bootstrap";
import "../DashboardCardComponent/DashIcons.css"

const SalesDashCards = ({
  title,
  quantity,
  icon,
  className,
}) => {
  return (
    <Col lg={4} md={4} sm={6} className="mb-4">
      <Card
        className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
        style={{ width: "100%" }}
      >
        <Card.Body className="p-4">
          <span className={`white-icon dash-icon ${className}`} >
           {icon}
          </span>
          <h6 className="my-2">{title}</h6>
          <h3 className="mt-2">{quantity}</h3>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SalesDashCards;
