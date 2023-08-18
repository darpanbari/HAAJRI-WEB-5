import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SelectInputField = ({ label, options, onSelect, selectedValue, className, noLabel, labelClassName }) => {
  return (
    <Form.Group as={Row} controlId="languageSelect" className="d-flex">
      {label && ( 
        <Form.Label className={` ${noLabel ? "no-label" : ""} ${labelClassName}`}>
          {label}
        </Form.Label>
      )}
      <Col>
        <Form.Select
          className={` ${className}`}
          value={selectedValue}
          onChange={onSelect}
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
