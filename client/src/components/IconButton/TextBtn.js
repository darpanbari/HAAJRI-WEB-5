import React from "react";
import { Button } from "react-bootstrap";

const TextBtn = ({title, className, onClick}) => {
  return (
    <>
      <Button className={`btn rounded-1 border-0 font-size-14 py-1 text-white me-1 ${className}`} onClick={onClick}>
       {title}
      </Button>
    </>
  );
};

export default TextBtn;
