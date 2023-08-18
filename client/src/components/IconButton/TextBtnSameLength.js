import React from 'react';

const color = {
  Urgent: 'black-2',
  High: 'red-2',
  Low: 'yellow-2',
  Medium: 'green-3',
  'New Ticket': "bg-secondary",
  "In Progress": "sky-2",
  "On Hold": "orange-2",
  Questions: 'navy-2',
  Bug: 'red-2',
  Support: 'black-2',
  'New Installation': 'green-3',
  Questions: "navy-2",
  Bug: "red-2",
  Support : "black-2",
  Open: "green-2",
  Close : "red-icon"

};

const TextBtnSameLength = ({ keyName, className }) => {
  const buttonClass = color[keyName] || 'green-2';

  return (
    <button className={`btn btn-success border-0 btn-width ${className} ${buttonClass}`}>
      {keyName}
    </button>
  );
};

export default TextBtnSameLength;
