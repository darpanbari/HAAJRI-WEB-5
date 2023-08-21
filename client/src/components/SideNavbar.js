import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import {
  AiOutlineBug,
  AiOutlineCheckSquare,
  AiOutlinePayCircle,
} from "react-icons/ai";
import {
  BiCalendarCheck,
  BiHomeSmile,
  BiSupport,
  BiTimer,
} from "react-icons/bi";
import { PiCirclesThreePlus, PiHandshake, PiHeadphones } from "react-icons/pi";
import { RiQuestionLine, RiRadio2Line } from "react-icons/ri";
import { TbTicket, TbSettings, TbProgress, TbCalculator, TbGridDots } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/SideNavbar.css";
import {
  HiOutlineCubeTransparent,
  HiOutlineDocumentReport,
} from "react-icons/hi";

const SideNavbar = () => {
  const sideBarData = [
    {
      moduleName: "Dashboard",
      icon: "BiHomeSmile",
      id: 1,
      to: "#",
      subModules: [
        { moduleName: "Sales Dashboard", to: "/dashboard/sales-dashboard" },
        { moduleName: "Support Dashboard", to: "/dashboard/support-dashboard" },
      ],
    },
    {
      moduleName: "Tickets",
      icon: "TbTicket",
      id: 2,
      to: "/tickets",
    },
    {
      moduleName: "Projects",
      icon: "AiOutlineCheckSquare",
      id: 3,
      to: "/projects/project",
    },
    {
      moduleName: "Accounting",
      icon: "PiCirclesThreePlus",
      id: 4,
      to: "#",
      subModules: [
        { moduleName: "Customer", to: "/accounting/customer" },
        { moduleName: "Vendor", to: "/accounting/vendor" },
      ],
    },
    {
      moduleName: "HR Admin",
      icon: "HiOutlineCubeTransparent",
      id: 5,
      to: "#",
      subModules: [
        { moduleName: "Award", to: "/hr-admin/award" },
        { moduleName: "Complaints", to: "/hr-admin/complaints" },
        { moduleName: "Announcement", to: "/hr-admin/announcement" },
        { moduleName: "Holidays", to: "/hr-admin/holidays" },
        { moduleName: "Document", to: "/hr-admin/document" },
        { moduleName: "Company Policy", to: "/hr-admin/company-policy" },
        { moduleName: "Manage Leave", to: "/leave-management/manage-leave" },
        { moduleName: "Depart/Design", to: "/depart-design" },
      ],
    },
    {
      moduleName: "Support Ticket",
      icon: "PiHeadphones",
      id: 6,
      to: "#",
      subModules: [
        { moduleName: "Tickets", to: "/support-ticket/tickets" },
        { moduleName: "Knowledge Base", to: "/support-ticket/knowledgebase" },
        { moduleName: "FAQ", to: "/support-ticket/faq" },
      ],
    },
    {
      moduleName: "Payslip",
      icon: "AiOutlinePayCircle",
      id: 7,
      to: "/payroll/payslip",
    },
    {
      moduleName: "Indicator",
      icon: "BiTimer",
      id: 8,
      to: "/performance/indicator",
    },
    {
      moduleName: "Report",
      icon: "TbGridDots",
      id: 9,
      to: "#",
      subModules: [
        { moduleName: "Monthly Attendance", to: "/report/monthly-report" },
        { moduleName: "Daily Attendance", to: "/report/daily-attendance" },
        { moduleName: "User Custom Attendance", to: "/report/usercustom-attendance" },
      ],
    },
    {
      moduleName: "Registrations",
      icon: "TbGridDots",
      id: 10,
      to: "#",
      subModules: [
        { moduleName: "Users", to: "/users" },
        { moduleName: "Register Locations", to: "/registrations/register-locations" },
        { moduleName: "Locations", to: "/registrations/all-locations" },
        { moduleName: "Register Photo", to: "/registrations/register-photo" },
      ],
    },
    {
      moduleName: "Support System",
      icon: "BiSupport",
      id: 11,
      to: "/support-system",
    },
    {
      moduleName: "Bugs",
      icon: "AiOutlineBug",
      id: 12,
      to: "/project-system/bugs",
    },
    {
      moduleName: "Setup Subscription Plan",
      icon: "PiHandshake",
      id: 13,
      to: "/setting/setup-subscription-plan",
    },
    {
      moduleName: "Assets",
      icon: "TbCalculator",
      id: 14,
      to: "/assets",
    },
    {
      moduleName: "Notes",
      icon: "RiRadio2Line",
      id: 15,
      to: "/notes",
    },
    {
      moduleName: "Settings",
      icon: "TbSettings",
      id: 16,
      to: "/settings",
    },
  ];

  const iconMapping = {
    BiHomeSmile: <BiHomeSmile />,
    BiSupport: <BiSupport />,
    TbTicket: <TbTicket />,
    AiOutlineCheckSquare: <AiOutlineCheckSquare />,
    PiCirclesThreePlus: <PiCirclesThreePlus />,
    HiOutlineCubeTransparent: <HiOutlineCubeTransparent />,
    HiOutlineDocumentReport: <HiOutlineDocumentReport />,
    PiHeadphones: <PiHeadphones />,
    AiOutlinePayCircle: <AiOutlinePayCircle />,
    BiTimer: <BiTimer />,
    TbGridDots: <TbGridDots />,
    RiRadio2Line: <RiRadio2Line />,
    AiOutlineBug: <AiOutlineBug />,
    PiHandshake: <PiHandshake />,
    TbCalculator: <TbCalculator />,
    TbSettings: <TbSettings/>
  };

  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const initialExpandedItems = {};
    sideBarData.map((item) => {
      initialExpandedItems[item.id] = false;
    });
    setExpandedItems(initialExpandedItems);
  }, []);

  const toggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const toggleExpand = (itemId) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [itemId]: !prevExpandedItems[itemId],
    }));
  };

  const generateSubNavLinks = (subModules) => {
    return subModules.map((subModule) => (
      <NavLink
        key={subModule.moduleName}
        to={subModule.to}
        activeClassName="active-custom"
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
              {expandedItems[module.id] ? (
                <ExpandMoreIcon className="nav-expand-icon ms-auto" />
              ) : (
                <ChevronRightIcon className="nav-expand-icon ms-auto" />
              )}
            </div>
          ) : (
            <NavLink
              to={module.to}
              activeClassName="active-custom"
              className="nav-item"
              onClick={closeOffcanvas}
            >
              <div className="nav-icon">{iconMapping[module.icon]}</div>
              <span className="nav-name">{module.moduleName}</span>
            </NavLink>
          )}
          {module.subModules && expandedItems[module.id] && (
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
      <div class="sidebar">
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
