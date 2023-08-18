import React from 'react';

const color = {
  Reject: "red-icon",
  Approved: "green-2",
  Pending: "orange-2",
  Paid: "green-2",
  UnPaid: "red-icon",
  Low:"green-2",
  High:"orange-2",
  Medium:"sky-2",
  Critical: "red-icon",
};

const TextBtnDiffLength = ({ keyName, className }) => {
  const buttonClass = color[keyName] || 'green-2';

  return (
    <button className={`btn btn-success border-0 btn-width1 ${className} ${buttonClass}`}>
      {keyName}
    </button>
  );
};

export default TextBtnDiffLength;
