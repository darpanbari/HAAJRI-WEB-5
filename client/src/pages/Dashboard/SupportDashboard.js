import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { FiLink } from "react-icons/fi";
import { MdOutlineViewList } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PieChart from "../../components/SupportPieChart";
import SupportAreaChart from "../../components/SupportAreaChart";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SupportDashCards from "../../components/DashboardCardComponent/SupportDashCards";
import MainCardComponent from "../../components/DashboardCardComponent/MainCardComponent";

const SupportDashboard = () => {
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
              breadcrumb2="Support-Ticket"
            />
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
                  <Col md={3} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white custom-border-radius border-0"
                      style={{ height: "17rem" }}
                    >
                      <Card.Body className="p-4" style={{ width: "320px" }}>
                        <div>
                          <FiLink className="red-icon rounded-4 white-icon" />
                        </div>
                        <h6 className="mt-3 mb-4">Rajodiya infotech</h6>
                        <button className="btn green-3 rounded-3 text-white font-size-12">
                          <span className="me-2">
                            <FiLink />
                          </span>
                          Create Ticket
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <SupportDashCards
                    title="Categories"
                    className="green-3"
                    status="Total"
                    quantity="3"
                    icon={<MdOutlineViewList />}
                    cardHeight="17rem"
                  />
                  <SupportDashCards
                    title="Tickets"
                    className="bg-info"
                    status="Open"
                    quantity="5"
                    icon={<FaTicketAlt />}
                    cardHeight="17rem"
                  />
                  <SupportDashCards
                    title="Tickets"
                    className="bg-warning"
                    status="Closed"
                    quantity="1"
                    icon={<FaTicketAlt />}
                    cardHeight="17rem"
                  />
                </Row>
              </Col>

              <MainCardComponent
                title="Tickets by Category"
                content={<PieChart />}
                cardHeight="17rem"
              />
            </Row>
            <Row className="mb-4">
              <MainCardComponent
                title="This Year Tickets"
                content={<SupportAreaChart />}
              />
            </Row>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportDashboard;
