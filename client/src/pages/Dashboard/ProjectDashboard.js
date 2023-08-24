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

const ProjectDashboard = () => {
  const data = [
    {
      title: "UI Development",
      DueDate: "2023-08-24",
      Status: "Todo",
      Project: "Cheyenne Wong",
    },
    {
      title: "Dashboard UI",
      DueDate: "2023-10-10",
      Status: "Done",
      Project: "Amethyst Doyle",
    },
    {
      title: "Dashboard UI - Finish the logo design",
      DueDate: "2023-09-22",
      Status: "Todo",
      Project: "Cheyenne Wong",
    },
    {
      title: "Newsletter Templates - Design Approval",
      DueDate: "2023-10-18",
      Status: "Review",
      Project: "Amethyst Doyle",
    },
    {
      title: "Bootstrap Framework",
      DueDate: "2023-09-14",
      Status: "Done",
      Project: "Cheyenne Wong",
    },
  ];

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
            <Breadcrumb title="Dashboard" breadcrumb1="" breadcrumb2="" />
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
                    title="Total Project"
                    className="green-3"
                    quantity="9"
                    icon={<FaTasks />}
                  />

                  <SupportDashCards
                    title="Total Task"
                    className="bg-info"
                    quantity="21"
                    icon={<BiSolidPurchaseTag />}
                  />
                  <SupportDashCards
                    title="Total Bug"
                    className="red-icon"
                    quantity="7"
                    icon={<BsFillBugFill />}
                  />
                  <SupportDashCards
                    title="Total Users"
                    className="green-2"
                    quantity="0"
                    icon={<FaUsers />}
                  />
                </Row>

                <MainCardComponent
                  title="Tasks"
                  // cardHeight="17rem"
                  content={
                    <>
                      <div class="table-responsive">
                        <table className="table table-centered table-hover">
                          <tbody className="font-size-14">
                            {data.map((project, index) => (
                              <tr key={index}>
                                <td className="text-start" style={{width:"40%"}}>
                                  <div className=" my-1">
                                    
                                      {project.title}
                                  </div>
                                  <span className="text-muted">
                                    Due Date :{" "}
                                    <span className="green-1">
                                      {project.DueDate}
                                    </span>
                                  </span>
                                </td>
                                <td>
                                  <div className="text-muted">
                                    Status
                                  </div>
                                 
                                  <TextBtnDiffLength keyName={project.Status}/>
                                </td>
                                <td className="text-start">
                                  <span className="text-muted">
                                    Project
                                  </span>
                                  <div className="">
                                    {project.Project}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  }
                />
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Tasks Overview"
                  content={<ProjectDashLineChart />}
                  // cardWidth="58rem"
                />
                <MainCardComponent
                  title="Project Status"
                  content={<ProjectDashPieChart />}
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

export default ProjectDashboard;
