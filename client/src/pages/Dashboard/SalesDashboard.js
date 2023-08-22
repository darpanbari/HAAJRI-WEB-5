import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { MdOutlineViewList } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import {
  TbBuilding,
  TbCurrencyDollarSingapore,
  TbFileInvoice,
} from "react-icons/tb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SalesAreaChart from "../../components/SalesAreaChart";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SalesDashCards from "../../components/DashboardCardComponent/SalesDashCards";

const SalesDashboard = () => {
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
            <Breadcrumb title="Dashboard" breadcrumb1="Home" />
          </div>
          <div className="mx-4 ">
            <Row>
              <Col
                xxl={7}
                xl={12}
                lg={12}
                md={12}
                className="d-flex flex-column support-dash-card"
              >
                <Row className="">
                  <SalesDashCards title="Total User"  quantity="17" className="bg-warning" icon={<BiUser />}/>
                  <SalesDashCards
                    title="Total Account"
                    className="green-2"
                    quantity="6"
                    icon={<TbBuilding />}
                  />
                  <SalesDashCards title="Total Contact" className="red-icon" quantity="6" icon={<MdOutlineViewList />}/>

                  <SalesDashCards title="Total Opportunities" className="bg-info" quantity="5" icon={<TbCurrencyDollarSingapore />}/>
                  <SalesDashCards title="Total Invoice" className="bg-success" quantity="3" icon={<TbFileInvoice />}/>
                  <SalesDashCards title="Total Salesorder" className="bg-secondary" quantity="3" icon={<TbFileInvoice />}/>
                </Row>
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12} className="">
                <Card
                  className="custom-shadow mb-4 custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%"}}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">
                      Invoice & Quote & Sales Order
                    </h6>
                    <div className="p-3 text-center">
                      <SalesAreaChart />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* row 2 */}
            <Row className="sales-row-2">
              <Col sm={12} md={4} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">Invoice Overview</h6>
                    <div className="px-4 pt-4 d-flex mb-0">
                      <div className="progress-bar green-3 w-50 shadow"></div>
                      <div className="progress-bar red-2 w-50 shadow"></div>
                      <div className="progress-bar bg-warning w-50 shadow"></div>
                    </div>
                    <Row className="ms-1 me-5 mt-4">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-success fs-3" />
                          <span className="font-size-12">2 Open (40.00%)</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-danger fs-3" />
                          <span className="font-size-12">
                            1 Not Paid (20.00%)
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row className="ms-1 me-5">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center ">
                          <BsDot className="text-warning fs-3" />
                          <span className="font-size-12 w-100">
                            2 Partialy Paid (40.00%)
                          </span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="green-1 fs-3" />
                          <span className="font-size-12">0 Paid (0.00%)</span>
                        </div>
                      </Col>
                    </Row>
                    <Row className="ms-1 me-5 mb-3">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-info fs-3" />
                          <span className="font-size-12">
                            0 Cancelled (0.00%)
                          </span>
                        </div>
                      </Col>
                      <Col className="ps-0"></Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">Quote Overview</h6>
                    <div className="pt-4 px-4 mb-0 d-flex">
                      <div className="progress-bar green-3 w-25 shadow"></div>
                      <div className="progress-bar bg-info w-75 shadow"></div>
                    </div>
                    <Row className="ms-1 me-5 mt-4">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-success fs-3" />
                          <span className="font-size-12">2 Open (40.00%)</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-info fs-3" />
                          <span className="font-size-12">
                            3 Cancelled (60.00%)
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4} className="mb-4">
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">Sales Order Overview</h6>
                    <div className="pt-4 px-4 mb-0 d-flex">
                      <div className="progress-bar green-3 w-50 shadow"></div>
                      <div className="progress-bar bg-info w-50 shadow"></div>
                    </div>
                    <Row className="ms-1 me-5 mt-4">
                      <Col className="pe-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-success fs-3" />
                          <span className="font-size-12">2 Open (60.00%)</span>
                        </div>
                      </Col>
                      <Col className="ps-0">
                        <div className="d-flex align-items-center">
                          <BsDot className="text-info fs-3" />
                          <span className="font-size-12">
                            3 Cancelled (60.00%)
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* row 3 */}
            <Row className="mb-4">
              <Col>
                <Card
                  className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                  style={{ width: "100%" }}
                >
                  <Card.Body className="p-0">
                    <h6 className="border-bottom p-4">Meeting Schedule</h6>
                    <div className="p-3 text-center">
                      Meeting schedule not found
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

export default SalesDashboard;
