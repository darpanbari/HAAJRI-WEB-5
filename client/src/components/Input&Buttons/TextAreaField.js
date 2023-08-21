import React from "react";

const TextAreaField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor="description" className="form-label mt-2">
        {label}
      </label>
      <textarea
        className="form-control"
        id="description"
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaField;