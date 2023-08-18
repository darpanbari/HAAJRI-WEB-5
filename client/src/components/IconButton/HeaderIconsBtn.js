import React from "react";
import "../IconButton/IconButton.css";

const HeaderIconsBtn = ({ icon, title, className }) => {
  return (
    <>
      <span
        type="button"
        className={`custom-tooltip-btn2 green-2 text-white rounded-2 ms-2 ${className}`}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={title}
      >
        {icon}
      </span>
    </>
  );
};

export default HeaderIconsBtn;
