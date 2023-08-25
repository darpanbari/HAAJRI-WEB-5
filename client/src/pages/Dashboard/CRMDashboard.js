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

const CRMDashboard = () => {

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
            <Breadcrumb title="Dashboard" breadcrumb1="Dashboard" breadcrumb2="CRM" />
          </div>
          <div className="mx-4">
            <Row>
              <Col
                xxl={7}
                xl={12}
                lg={12}
                md={12}
                className="support-dash-card"
              >
                <Row>
                  <SupportDashCards
                    status="Good Afternoon"
                    className="red-icon"
                    title="Rajodiya Infotech"
                    icon={<TbHome />}
                  />

                  <SupportDashCards
                    status="Total Client"
                    className="green-2"
                    quantity="4"
                    icon={<TbUser />}
                  />
                  <SupportDashCards
                    status="Total User"
                    className="bg-info"
                    quantity="13"
                    icon={<TbUsers />}
                  />
                  <SupportDashCards
                    status="Total Deal"
                    className="orange-2"
                    quantity="9"
                    icon={<TbRocket />}
                  />
                </Row>

                <MainCardComponent
                  title="Recently created deals"
                  cardHeight="25.8rem"
                  content={
                    <>
                      <div class="table-responsive">
                      <Table hover className="font-size-14 text-start">
                          <thead className="table-head">
                            <tr>
                              <th className="ps-3">DEAL NAME</th>
                              <th>STATUS</th>
                              <th>CREATED AT</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dealsData.map((deal, index) => (
                              <tr key={index}>
                                <td className="p-3 align-middle">{deal.DEAL_NAME}</td>
                                <td className="align-middle">{deal.STATUS}</td>
                                <td className="align-middle">{deal.CREATED_AT}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </>
                  }
                />
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Deal calls by day"
                  content={<CRMDashAreaChart />}
                  // cardWidth="58rem"
                />
                <MainCardComponent
                  title="Project Status"
                  content={<CRMDashColumnChart />}
                />
              </Col>

              <Col xxl={7} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Calendar"
                  content={
                    <ReactCalendar/>
                  }
                />
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                //   cardHeight="22.8rem"
                  title="Recently modified deals"
                  content={
                    <>
                      <div class="table-responsive">
                      <Table hover className="font-size-14 text-start">
                          <thead className="table-head">
                            <tr>
                              <th className="ps-3">DEAL NAME</th>
                              <th>STATUS</th>
                              <th>CREATED AT</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dealsData.map((deal, index) => (
                              <tr key={index}>
                                <td className="p-3 align-middle">{deal.DEAL_NAME}</td>
                                <td className="align-middle">{deal.STATUS}</td>
                                <td className="align-middle">{deal.CREATED_AT}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </>
                  }
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

export default CRMDashboard;
