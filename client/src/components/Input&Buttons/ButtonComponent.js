import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ className, style, type, text, href }) => {
  return (
    <div>
      <Button
        href={href}
        className={`border-0 ${className}`}
        style={style}
        variant="primary green-2 "
        type={type ? type : "submit"}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
