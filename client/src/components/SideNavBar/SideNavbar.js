import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { TbProgress } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../SideNavBar/SideNavbar.css";
import { sideNavBarDatas, iconMapping } from "../../api/sideNavBarDatas";

const SideNavbar = () => {
  const [sideBarData, setSideBarData] = useState(sideNavBarDatas);
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const toggleExpand = (itemId) => {
    setSideBarData((prevData) =>
      prevData.map((module) =>
        module.id === itemId ? { ...module, select: !module.select } : module
      )
    );
  };

  const generateSubNavLinks = (subModules) => {
    return subModules.map((subModule) => (
      <NavLink
        key={subModule.moduleName}
        to={subModule.to}
        activeclassname="active-custom"
        className={`nav-item2 ${
          location.pathname === subModule.to ? "active-custom" : ""
        }`}
        onClick={closeOffcanvas}
      >
        <TbProgress className="nested-nav-icon ms-4 me-3" />
        <span className="nav-name2">{subModule.moduleName}</span>
      </NavLink>
    ));
  };

  const navLinks = (
    <Nav className="flex-column side-nav nav-width">
      {sideBarData.map((module) => (
        <div key={module.id}>
          {module.subModules ? (
            <div className="nav-item" onClick={() => toggleExpand(module.id)}>
              <div className="nav-icon">{iconMapping[module.icon]}</div>
              <span className="nav-name">{module.moduleName}</span>
              {module.select ? (
                <ExpandMoreIcon className="nav-expand-icon ms-auto" />
              ) : (
                <ChevronRightIcon className="nav-expand-icon ms-auto" />
              )}
            </div>
          ) : (
            <NavLink
              to={module.to}
              activeclassname="active-custom"
              className="nav-item"
              onClick={closeOffcanvas}
            >
              <div className="nav-icon">{iconMapping[module.icon]}</div>
              <span className="nav-name">{module.moduleName}</span>
            </NavLink>
          )}
          {module.subModules && module.select && (
            <div className="sub-nav-links">
              {generateSubNavLinks(module.subModules)}
            </div>
          )}
        </div>
      ))}
    </Nav>
  );

  return (
    <>
      <div className="sidebar">
        <div className="green-1 fs-2 mb-3 fw-bold ps-4 logo">H A A J R I</div>
        <Navbar expand="lg" className="flex-column1">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav rounded-4"
            className=""
            onClick={toggleOffcanvas}
          />
          {!showOffcanvas && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="nav-links-scrollY">{navLinks}</div>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>

      <Offcanvas
        show={showOffcanvas}
        onHide={closeOffcanvas}
        className="offcanvas-container"
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="green-1 fs-4 text-center fw-bold ps-1">
            H A A J A R I
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar className="offcanvas-navbar">{navLinks}</Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideNavbar;
