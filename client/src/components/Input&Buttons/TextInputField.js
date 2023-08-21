import React from "react";
import { Form } from "react-bootstrap";

const TextInputField = ({ label, type, placeholder, value, onChange, className }) => {
  return (
    <Form.Group className={className} controlId={placeholder}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default TextInputField;
