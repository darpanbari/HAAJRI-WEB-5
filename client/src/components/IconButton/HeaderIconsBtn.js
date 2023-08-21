import React from "react";
import "../IconButton/IconButton.css";
import { Link } from "react-router-dom";

const HeaderIconsBtn = ({ icon, title, className, to }) => {
  return (
    <>
       <Link
        to={to}
        className={`custom-tooltip-btn2 green-2 text-white rounded-2 ms-2 ${className}`}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={title}
      >
        {icon}
      </Link>
    </>
  );
};

export default HeaderIconsBtn;
