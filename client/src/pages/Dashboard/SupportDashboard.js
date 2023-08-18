import React from "react";
import SideNavbar from "../../components/SideNavbar";
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

const SupportDashboard = () => {
  return (
    <>
      <div className="display-side d-flex">
        <div style={{width:"0px"}}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <HeaderSectionWithElements/>
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
              <Col xxl={7} xl={12} lg={12} md={12} className="d-flex support-dash-card">
                <Row>
                  <Col md={3} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white custom-border-radius border-0"
                      style={{ height: "17rem", width: "100%" }}
                    >
                      <Card.Body className="p-4" style={{width:"320px"}}>
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

                  <Col md={3} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0"
                      style={{ height: "17rem", width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <MdOutlineViewList className="green-3 rounded-4 white-icon" />
                        </div>
                        <p className="text-secondary font-size-12 mt-3 mb-2">
                          Total
                        </p>
                        <h6>Categories</h6>
                        <h3 className="mt-3">3</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0"
                      style={{ height: "17rem", width: "100%" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <FaTicketAlt className="bg-info rounded-4 white-icon" />
                        </div>
                        <p className="text-secondary font-size-12 mt-3 mb-2">
                          Open
                        </p>
                        <h6>Tickets</h6>
                        <h3 className="mt-3">5</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} sm={6} className="mb-4">
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0"
                      style={{ height: "17rem", width: "100%", marginRight:"220px" }}
                    >
                      <Card.Body className="p-4">
                        <div>
                          <FaTicketAlt className="bg-warning rounded-4 white-icon" />
                        </div>
                        <p className="text-secondary font-size-12 mt-3 mb-2">
                          Closed
                        </p>
                        <h6>Tickets</h6>
                        <h3 className="mt-3">1</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xxl={5} xl={8} lg={8} md={12} sm={12} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ height: "17rem" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Tickets by Category
                    </h6>
                    <div className="p-3 text-center">
                      <PieChart />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "99%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      This Year Tickets
                    </h6>
                    <div className="p-3 text-center">
                      <SupportAreaChart/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportDashboard;
