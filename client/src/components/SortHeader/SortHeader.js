import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const SortHeader = ({ label, orderBy, order, onClick, className }) => {
  const isActive = orderBy === label;

  return (
    <th onClick={() => onClick(label)}>
      <div className={`d-flex justify-content-between align-items-center ${className}`}>
        {label.toUpperCase()}
        {isActive && (
          <span>
            {order === "asc" || order === "" ? (
              <div className="d-flex flex-column">
                <TiArrowSortedUp />
                <TiArrowSortedDown className="text-light-gray" />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <TiArrowSortedUp className="text-light-gray" />
                <TiArrowSortedDown />
              </div>
            )}
          </span>
        )}
        {!isActive && (
          <div className="d-flex flex-column">
            <TiArrowSortedUp className="text-light-gray" />
            <TiArrowSortedDown className="text-light-gray" />
          </div>
        )}
      </div>
    </th>
  );
};

export default SortHeader;
