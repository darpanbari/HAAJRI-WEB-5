import React, { useState } from "react";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SalesCardMenuBar from "../components/SalesCardMenuBar";
import UseTooltip from "../components/useTooltip";
import GenerateWithAiBtn from "../components/GenerateWithAiBtn";
import ModalComponent from "../components/ModalComponent";
import Breadcrumb from "../components/Breadcrumb";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SelectInputField from "../components/Input&Buttons/SelectInputField";
import TextAreaField from "../components/Input&Buttons/TextAreaField";
import TextInputField from "../components/Input&Buttons/TextInputField";

const Notes = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    colors: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const notesData = [
    {
      id: 1,
      title: "Website Redesign",
      description:
        "The project involves redesigning the company website to improve the user experience and enhance its visual appeal. The current website has outdated design elements and lacks responsiveness across different devices. The primary goal is to create a modern and user-friendly website that effectively represents the company's brand and engages visitors.",
    },
    {
      id: 2,
      title: "Development Phase",
      description:
        "Development lead started implementing the new design using HTML, CSS, and JavaScript. Prioritized mobile responsiveness and optimized page load times. Conducted regular code reviews and addressed any technical issues or bugs.",
    },
    {
      id: 3,
      title: "Hello",
      description: "hello",
    },
    {
      id: 4,
      title: "Project Kick-off Meeting",
      description: " Discussed project objectives, scope, and timeline with stakeholders. Agreed to focus on improving user experience, visual appeal, and mobile responsiveness. Assigned roles and responsibilities to team members: design lead, development lead, content writer.",
    },
    {
      id: 5,
      title: "Launch Preparation",
      description: " Conducted final rounds of quality assurance and testing across different devices and browsers. Created a detailed launch plan, including backup and rollback procedures. Communicated with the marketing team to coordinate promotional efforts for the website launch.",
    },
  ];

  const getRandomColor = () => {
    const colors = ["success", "info", "danger", "warning", "primary"]; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

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
                        <TextInputField
                          label="Title"
                          type="text"
                          placeholder="Enter Title"
                          value={formData.title}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3 mx-2">
                        <TextAreaField
                          label="Description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Enter Description"
                        />
                      </div>
                      <div className="mb-3 w-100 px-2">
                        <SelectInputField
                          label="Colors"
                          options={[
                            { value: "red", label: "Red" },
                            { value: "green", label: "Green" },
                            { value: "blue", label: "Blue" },
                          ]}
                          selectedValue={formData.colors}
                          onChange={handleInputChange}
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
              {notesData.map((note) => (
                <Col
                  key={note.id}
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  className="mb-4"
                >
                  <Card
                    className={`custom-shadow custom-border-radius bg-custom-white border-0 me-4`}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Card.Header className="px-3 py-4 notes-card-radius position-relative border-bottom bg-custom-white">
                      <div className="d-flex align-items-center">
                      <div className={`notes-circle bg-${getRandomColor()}`}></div>
                        <h6 className="mb-0 mx-2">{note.title}</h6>
                        <div
                          className="position-absolute"
                          style={{ right: "0", top: "15px" }}
                        >
                          <SalesCardMenuBar />
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className="pe-3 text-secondary font-size-15">
                        {note.description}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
