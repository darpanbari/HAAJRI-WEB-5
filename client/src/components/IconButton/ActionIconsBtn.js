import React from "react";
import "../IconButton/IconButton.css"

const ActionIconsBtn = ({icon, title , className, onClick}) => {
  return (
    <>
      <span
        type="button"
        className={`custom-tooltip-btn text-white custom-border-radius ${className}`} 
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={title}
      >
       {icon}
      </span>
    </>
  );
};

export default ActionIconsBtn;
