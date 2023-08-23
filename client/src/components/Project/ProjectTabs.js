import React from "react";
import Nav from "react-bootstrap/Nav";

const ProjectTabs = ({ selectedTab, onTabChange }) => {
  const Tabs = ["ALL", "Ongoing", "Finished", "OnHold"];
  return (
    <div>
      <Nav
        variant="green-2"
        defaultActiveKey="#"
        className="d-flex justify-content-end me-5"
      >
        <div
          className="d-flex mb-3 border border-1 rounded-2 font-size-14"
          style={{ background: "#BDBDBD" }}
        >
          {Tabs.map((tab) => (
            <Nav.Link
              key={tab}
              className={`text-white fw-600 ${
                selectedTab === tab ? "active" : ""
              }`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </Nav.Link>
          ))}
        </div>
      </Nav>
    </div>
  );
};

export default ProjectTabs;
