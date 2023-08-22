import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SelectInputField = ({ label, options, onChange, value, className, noLabel, labelClassName }) => {
  return (
    <Form.Group as={Row} controlId="languageSelect" className="d-flex">
      {label && ( 
        <Form.Label className={` ${noLabel ? "no-label" : ""} ${labelClassName}`}>
          {label}
        </Form.Label>
      )}
      <Col>
        <Form.Select
          className={className}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Form.Group>
  );
};

export default SelectInputField;
