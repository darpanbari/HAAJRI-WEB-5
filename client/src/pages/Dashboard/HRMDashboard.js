import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { FiLink } from "react-icons/fi";
import { MdOutlineViewList } from "react-icons/md";
import { FaTasks, FaTicketAlt, FaUsers } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PieChart from "../../components/SupportPieChart";
import SupportAreaChart from "../../components/SupportAreaChart";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SupportDashCards from "../../components/DashboardCardComponent/SupportDashCards";
import MainCardComponent from "../../components/DashboardCardComponent/MainCardComponent";
import ProjectDashLineChart from "../../components/Charts/ProjectDashLineChart";
import TextBtnDiffLength from "../../components/IconButton/TextBtnDiffLength";
import ProjectDashPieChart from "../../components/Charts/ProjectDashPieChart";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BsFillBugFill } from "react-icons/bs";
import { TbHome, TbRocket, TbUser, TbUsers } from "react-icons/tb";
import { dealsData } from "../../api/crmDashDatas";
import { Table } from "react-bootstrap";
import CRMDashAreaChart from "../../components/Charts/CRMDashAreaChart";
import CRMDashColumnChart from "../../components/Charts/CRMDashColumnChart";
import ReactCalendar from "../../components/Calendar/ReactCalendar";
import { ClockInData, AnnouncementListData } from "../../api/hrmDashDatas";

const HRMDashboard = () => {
  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <HeaderSectionWithElements />
          {/* Top Header End*/}

          <div className="mb-2">
            <Breadcrumb
              title="Dashboard"
              breadcrumb1="Dashboard"
              breadcrumb2="HRM"
            />
          </div>
          <div className="mx-4">
            <Row>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                  cardHeight="23rem"
                  title="Today's Not Clock In"
                  content={
                    <div style={{ maxHeight: "18.8rem", overflowY: "auto" }}>
                      <div className="table-responsive">
                        <Table hover className="font-size-14 text-start">
                          <thead className="table-head">
                            <tr>
                              <th className="ps-3">NAME</th>
                              <th>STATUS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ClockInData.map((deal, index) => (
                              <tr key={index}>
                                <td className="p-3 align-middle">
                                  {deal.NAME}
                                </td>
                                <td className="align-middle">{deal.STATUS}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  }
                />
                <MainCardComponent
                  cardHeight="23rem"
                  title="Announcement List"
                  content={
                    <div className="scroller-div" style={{overflowX:"auto"}}>
                    <div
                      className="table-responsive1"
                      style={{
                        width: "1100px",
                        height: "18.8rem",
                        overflowX: "auto",
                      }}
                    >
                      <div className="">
                        <Table hover className="font-size-14 text-start">
                          <thead className="table-head">
                            <tr>
                              <th className="ps-3">TITLE</th>
                              <th>START DATE</th>
                              <th>END DATE</th>
                              <th>DESCRIPTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            {AnnouncementListData.map((event, index) => (
                              <tr key={index}>
                                <td className="p-3 align-middle">{event.TITLE}</td>
                                <td className="align-middle">{event.START_DATE}</td>
                                <td className="align-middle">{event.END_DATE}</td>
                                <td className="align-middle">{event.DESCRIPTION}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  
                  }
                />
              </Col>

              <Col xxl={7} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Holiday's & Event's"
                  content={<ReactCalendar />}
                />
              </Col>
            </Row>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default HRMDashboard;
