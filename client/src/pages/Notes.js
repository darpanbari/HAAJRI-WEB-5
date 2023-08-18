import React from "react";
import SideNavbar from "../components/SideNavbar";
import { AiOutlinePlus } from "react-icons/ai";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SalesCardMenuBar from "../components/SalesCardMenuBar";
import TopHeaderModal from "../components/CreateWorkspace";
import AdminSelectBtn from "../components/AdminInfotechBtn";
import UseTooltip from "../components/useTooltip";
import GenerateWithAiBtn from "../components/GenerateWithAiBtn";
import ModalComponent from "../components/ModalComponent";
import Breadcrumb from "../components/Breadcrumb";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";

const Notes = () => {
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
                title="Notes"
                breadcrumb1="Dashboard"
                breadcrumb2="Notes"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5">
              <ModalComponent
                modalTitle="Add Notes"
                modalWidth="custom-width-2"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="mb-3 w-100 px-2">
                        <label htmlFor="Name" className="form-label">
                          Title
                        </label>
                        <input
                          id="Name"
                          className="form-control"
                          placeholder="Enter Title"
                        />
                      </div>

                      <div className="mb-3 mx-2">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="4"
                          placeholder="Enter Description"
                        />
                      </div>

                      <div className="mb-3 w-100 px-2">
                        <label htmlFor="User" className="form-label">
                          Colors
                        </label>
                        <input
                          id="User"
                          className="form-control"
                          placeholder="Select Colors..."
                        />
                      </div>
                    </form>
                  </>
                }
              />
            </div>
          </div>

          <div className="mx-4">
            <Row>
              <h5 className="mb-2">Personal Notes</h5>
              <>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative border-bottom bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-success"></div>
                        <h6 className="mb-0 mx-2">Website Redesign</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        The project involves redesigning the company website to
                        improve the user experience and enhance its visual
                        appeal. The current website has outdated design elements
                        and lacks responsiveness across different devices. The
                        primary goal is to create a modern and user-friendly
                        website that effectively represents the company's brand
                        and engages visitors.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-info"></div>
                        <h6 className="mb-0 mx-2">Development Phase</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        Development lead started implementing the new design
                        using HTML, CSS, and JavaScript. Prioritized mobile
                        responsiveness and optimized page load times. Conducted
                        regular code reviews and addressed any technical issues
                        or bugs.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-danger"></div>
                        <h6 className="mb-0 mx-2">Hello</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">hello</p>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            </Row>

            <Row>
              <h5 className="mb-2">Shared Notes</h5>
              <>
                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-secondary"></div>
                        <h6 className="mb-0 mx-2">Project Kick-off Meeting</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        Discussed project objectives, scope, and timeline with
                        stakeholders. Agreed to focus on improving user
                        experience, visual appeal, and mobile responsiveness.
                        Assigned roles and responsibilities to team members:
                        design lead, development lead, content writer.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <Card
                    className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative bg-custom-white">
                      <div className="d-flex align-items-center">
                        <div className="notes-circle bg-warning"></div>
                        <h6 className="mb-0 mx-2">Launch Preparation</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className=" pe-3 text-secondary font-size-15">
                        Conducted final rounds of quality assurance and testing
                        across different devices and browsers. Created a
                        detailed launch plan, including backup and rollback
                        procedures. Communicated with the marketing team to
                        coordinate promotional efforts for the website launch.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            </Row>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
