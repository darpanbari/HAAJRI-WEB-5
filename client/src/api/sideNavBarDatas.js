import {
  AiOutlineBug,
  AiOutlineCheckSquare,
  AiOutlinePayCircle,
} from "react-icons/ai";
import { BiHomeSmile, BiSupport, BiTimer } from "react-icons/bi";
import { BsBuildingAdd } from "react-icons/bs";
import { PiCirclesThreePlus, PiHandshake, PiHeadphones } from "react-icons/pi";
import { RiRadio2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import {
  TbTicket,
  TbSettings,
  TbProgress,
  TbCalculator,
  TbDeviceFloppy,
  TbLayoutGridAdd,
  TbGridDots,
} from "react-icons/tb";
import {
  HiOutlineCubeTransparent,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { MdViewModule } from "react-icons/md";

const sideNavBarDatas = [
  {
    moduleName: "Dashboard",
    icon: "BiHomeSmile",
    id: 1,
    select: false,
    to: "#",
    subModules: [
      { moduleName: "Sales Dashboard", to: "/dashboard/sales-dashboard" },
      { moduleName: "Support Dashboard", to: "/dashboard/support-dashboard" },
      { moduleName: "Project Dashboard", to: "/dashboard/project-dashboard" },
      {
        moduleName: "Accounting Dashboard",
        to: "/dashboard/accounting-dashboard",
      },
      { moduleName: "POS Dashboard", to: "/dashboard/pos-dashboard" },
      { moduleName: "HRM Dashboard", to: "/dashboard/hrm-dashboard" },
      { moduleName: "CRM Dashboard", to: "/dashboard/crm-dashboard" },
    ],
  },
  {
    moduleName: "Tickets",
    icon: "TbTicket",
    id: 2,
    select: false,
    to: "/tickets",
  },
  {
    moduleName: "Access Module",
    icon: "MdViewModule",
    id: 17,
    select: false,
    to: "/access-module",
  },
  {
    moduleName: "Projects",
    icon: "AiOutlineCheckSquare",
    id: 3,
    select: false,
    to: "/projects/project",
  },
  {
    moduleName: "Accounting",
    icon: "PiCirclesThreePlus",
    id: 4,
    select: false,
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
    select: false,
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
    select: false,
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
    select: false,
    to: "/payroll/payslip",
  },
  {
    moduleName: "Indicator",
    icon: "BiTimer",
    id: 8,
    select: false,
    to: "/performance/indicator",
  },
  {
    moduleName: "Report",
    icon: "TbGridDots",
    id: 9,
    select: false,
    to: "#",
    subModules: [
      { moduleName: "Monthly Attendance", to: "/report/monthly-report" },
      { moduleName: "Daily Attendance", to: "/report/daily-attendance" },
      {
        moduleName: "User Custom Attendance",
        to: "/report/usercustom-attendance",
      },
    ],
  },
  {
    moduleName: "Registrations",
    icon: "TbGridDots",
    id: 10,
    select: false,
    to: "#",
    subModules: [
      { moduleName: "Users", to: "/users" },
      {
        moduleName: "Register Locations",
        to: "/registrations/register-locations",
      },
      { moduleName: "Locations", to: "/registrations/all-locations" },
      { moduleName: "Register Photo", to: "/registrations/register-photo" },
    ],
  },
  {
    moduleName: "Support System",
    icon: "BiSupport",
    id: 11,
    select: false,
    to: "/support-system",
  },
  {
    moduleName: "Bugs",
    icon: "AiOutlineBug",
    id: 12,
    select: false,
    to: "/project-system/bugs",
  },
  {
    moduleName: "Setup Subscription Plan",
    icon: "PiHandshake",
    id: 13,
    select: false,
    to: "/setting/setup-subscription-plan",
  },
  {
    moduleName: "Assets",
    icon: "TbCalculator",
    id: 14,
    select: false,
    to: "/assets",
  },
  {
    moduleName: "Notes",
    icon: "RiRadio2Line",
    id: 15,
    select: false,
    to: "/notes",
  },
  {
    moduleName: "Settings",
    icon: "TbSettings",
    id: 16,
    select: false,
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
  TbLayoutGridAdd: <TbLayoutGridAdd />,
  RiRadio2Line: <RiRadio2Line />,
  AiOutlineBug: <AiOutlineBug />,
  PiHandshake: <PiHandshake />,
  TbCalculator: <TbCalculator />,
  TbSettings: <TbSettings />,
  TbProgress: <TbProgress />,
  TbDeviceFloppy: <TbDeviceFloppy />,
  FiUsers: <FiUsers />,
  BsBuildingAdd: <BsBuildingAdd />,
  MdViewModule: <MdViewModule/>,
  TbGridDots: <TbGridDots/>
};

export { sideNavBarDatas, iconMapping };
