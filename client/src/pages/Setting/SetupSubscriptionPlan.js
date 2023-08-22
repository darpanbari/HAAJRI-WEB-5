import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbCornerUpRight } from "react-icons/tb";
import UseTooltip from "../../components/useTooltip";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";

const SetupSubscriptionPlan = () => {
  UseTooltip();
  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header*/}
          <HeaderSectionWithElements />

          <div className="d-flex flex-col2 justify-content-between ">
            <div className="mb-2">
              <Breadcrumb
                title="Manage Plan"
                breadcrumb1="DAshboard"
                breadcrumb2="Plan"
              />
            </div>
          </div>

          <div>
            <Row className="" style={{ margin: "40px 12px" }}>
              <Col
                xxxl={3}
                xxl={3}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                className="mb-5"
              >
                <Card className="custom-shadow custom-border-radius bg-custom-white h-100 border-0">
                  <button className="btn green-2 text-white rounded-5 font-size-14 sub-plan-card">
                    Free Plan
                  </button>
                  <Card.Body className="p-4">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2>$0</h2>
                        <span className="font-size-12 ms-2">/per Year</span>
                      </div>
                      <div className="text-secondary text-center font-size-14 mt-2">
                        Duration: Per Year
                      </div>
                    </div>
                    <Row>
                      <Col xxs={6} className="pe-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Users
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Customers
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Vendors
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Clients
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            1024 MB Storage
                          </li>
                        </ul>
                      </Col>
                      <Col xxs={6} className="px-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Account
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable CRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable HRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Project
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable POS
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Chat GPT
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xxxl={3}
                xxl={3}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                className="mb-5"
              >
                <Card className="custom-shadow custom-border-radius bg-custom-white h-100 border-0">
                  <button className="btn green-2 text-white rounded-5 font-size-14 sub-plan-card">
                    Platinum
                  </button>
                  <Card.Body className="p-4">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2>$500</h2>
                        <span className="font-size-12 ms-2">/per Year</span>
                      </div>
                      <div className="text-secondary text-center font-size-14 mt-2">
                        Duration: Per Year
                      </div>
                    </div>
                    <Row>
                      <Col xxs={6} className="pe-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Users
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Customers
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Vendors
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Clients
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            1024 MB Storage
                          </li>
                        </ul>
                      </Col>
                      <Col xxs={6} className="px-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Account
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable CRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable HRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Project
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable POS
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Chat GPT
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <div className="">
                      <div className="bg-light-gray border border-1 font-size-14 rounded-2 text-center py-3 px-5">
                        Plan Expired : 20-07-2024
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xxxl={3}
                xxl={3}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                className="mb-5"
              >
                <Card className="custom-shadow custom-border-radius bg-custom-white h-100 border-0">
                  <button className="btn green-2 text-white rounded-5 font-size-14 sub-plan-card">
                    Gold
                  </button>
                  <Card.Body className="p-4">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2>$400</h2>
                        <span className="font-size-12 ms-2">/per Year</span>
                      </div>
                      <div className="text-secondary text-center font-size-14 mt-2">
                        Duration: Per Year
                      </div>
                    </div>
                    <Row>
                      <Col xxs={6} className="pe-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Users
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Customers
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Vendors
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Clients
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            1024 MB Storage
                          </li>
                        </ul>
                      </Col>
                      <Col xxs={6} className="px-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Account
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable CRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable HRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Project
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable POS
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Chat GPT
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <div className=" text-center">
                      <button
                        className="btn green-2 px-4 py-2 mx-1 text-white h-100 font-size-14"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Buy Plan"
                      >
                        Buy Plan
                      </button>
                      <button
                        className="btn green-2 px-4 py-1 mx-1 fs-5 text-white"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Send Request"
                      >
                        <TbCornerUpRight />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xxxl={3}
                xxl={3}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                className="mb-5"
              >
                <Card className="custom-shadow custom-border-radius bg-custom-white h-100 border-0">
                  <button className="btn green-2 text-white rounded-5 font-size-14 sub-plan-card">
                    Silver
                  </button>
                  <Card.Body className="p-4">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2>$300</h2>
                        <span className="font-size-12 ms-2">/per Year</span>
                      </div>
                      <div className="text-secondary text-center font-size-14 mt-2">
                        Duration: Per Year
                      </div>
                    </div>
                    <Row>
                      <Col xxs={6} className="pe-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Users
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Customers
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Vendors
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            5 Clients
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            1024 MB Storage
                          </li>
                        </ul>
                      </Col>
                      <Col xxs={6} className="px-0">
                        <ul class="list-unstyled my-5 font-size-14">
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Account
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable CRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable HRM
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Project
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable POS
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <span className="green-1 me-3 fs-5 d-flex align-items-center">
                              <AiOutlinePlusCircle />
                            </span>
                            Enable Chat GPT
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <div className=" text-center">
                      <button
                        className="btn green-2 px-4 py-2 mx-1 text-white h-100 font-size-14"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Buy Plan"
                      >
                        Buy Plan
                      </button>
                      <button
                        className="btn green-2 px-4 py-1 mx-1 fs-5 text-white"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Send Request"
                      >
                        <TbCornerUpRight />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupSubscriptionPlan;
