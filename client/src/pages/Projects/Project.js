import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { GrUnorderedList } from "react-icons/gr";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "@mui/material/Avatar";
import ProjectCardMenuBar from "../../components/Project/ProjectCardMenuBar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ProjectModalForm from "../../components/Project/ProjectModalForm";
import UseTooltip from "../../components/useTooltip";
import HeaderIconsBtn from "../../components/IconButton/HeaderIconsBtn";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import { Form } from "react-bootstrap";
import TextAreaField from "../../components/Input&Buttons/TextAreaField";
import { projectDatas } from "../../api/projectDatas";
import { ThreeCircles } from "react-loader-spinner";
import ProjectCsvDownModal from "../../components/Project/ProjectCsvDownModal";
import {
  PiDownloadFill,
} from "react-icons/pi";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import ProjectTabs from "../../components/Project/ProjectTabs";

const Project = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [csvModalVisible, setCsvModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("ALL"); 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const fetchProjects = () => {
    setLoading(true);
    try {
      setData(projectDatas);
      setLoading(false);
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const colors = ["deepOrange", "blue", "green", "purple", "pink", "teal"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleOpenCsvModal = () => {
    setCsvModalVisible(true);
  };

  const handleCloseCsvModal = () => {
    setCsvModalVisible(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCSVDownload = () => {
    const csvContent = [
      "ShortForm,Title,Status,Due Date,Description,Members,Tasks,Comments"
    ];
  
    data.forEach((project) => {
      const members = "--"
      const row = [
        project.shortForm,
        project.title,
        project.status,
        project.dueDate,
        project.description,
        members,
        project.tasks,
        project.comments
      ];
      const formattedRow = row.map((field) => `"${field}"`).join(",");
      csvContent.push(formattedRow);
    });
  
    const csvData = csvContent.join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute("download", "projects.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const filteredProjects = data.filter((project) => {
    if (selectedTab === "ALL") return true;
    return project.status === selectedTab;
  });

  UseTooltip();

  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header */}
          <HeaderSectionWithElements />

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mb-2">
              <Breadcrumb
                title="Manage Projects"
                breadcrumb1="Dashboard"
                breadcrumb2="Projects"
              />
            </div>
            <div className="me-5 d-flex breadcrumb-rightside-btn">
              <HeaderIconsBtn
                title="Import"
                icon={<BsFileEarmarkPlus />}
                onClick={handleOpenCsvModal}
              />

              <ProjectCsvDownModal
                modalTitle="Project Import"
                modalContent={
                  <>
                    <div>
                      <div className="text-danger font-size-15 d-flex align-items-center">
                        <span className="me-3">
                          Download Sample Project CSV And Excel File
                        </span>
                        <ActionIconsBtn
                          title="CSV"
                          icon={<PiDownloadFill />}
                          className="me-2 green-2"
                          onClick={handleCSVDownload}
                        />
                       
                      </div>
                      <div className="w-75">
                        <label
                          htmlFor="attachment"
                          className=" fw-normal my-3 font-size-15"
                        >
                          Select CSV file
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={handleFileChange}
                          name="attachment"
                        />
                        {selectedFile && (
                          <p className="mt-2 mb-0 font-size-14">{selectedFile.name}</p>
                        )}
                      </div>
                    </div>
                  </>
                }
                modalWidth="custom-width"
                show={csvModalVisible}
                handleCloseModal={handleCloseCsvModal}
              />
              <HeaderIconsBtn title="List View" icon={<GrUnorderedList />} />
              <div className="breadcrumb-rightside-btn d-flex">
                <ModalComponent
                  modalTitle="Create New Document"
                  modalContent={
                    <>
                      <div>
                        <GenerateWithAiBtn />
                      </div>
                      <Form onSubmit={handleSubmit}>
                        <TextInputField
                          label="Name"
                          type="text"
                          placeholder="Enter Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                        <TextAreaField
                          label="Description"
                          placeholder="Enter Description"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                        <TextInputField
                          label="User"
                          type="text"
                          placeholder="Users...."
                          value={formData.user}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </Form>
                    </>
                  }
                />
              </div>
            </div>

          </div>
          <ProjectTabs
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />


          <div className="mx-4">
            <Row>
              <>
                {filteredProjects.map((project, key) => (
                  <Col
                    key={key}
                    xxl={3}
                    xl={4}
                    lg={6}
                    md={6}
                    sm={12}
                    className="mb-4"
                  >
                    <Card
                      className="custom-shadow custom-border-radius bg-custom-white border-0 me-4"
                      style={{ width: "100%" }}
                    >
                      <Card.Header className="px-4 pt-4 border-0 position-relative rounded-4 bg-custom-white">
                        <div className="d-flex align-items-center">
                          <Avatar
                            sx={{
                              bgcolor: getRandomColor(), // Fetch a random background color
                            }}
                          >
                            {project.shortForm}
                          </Avatar>
                          <h6 className="mb-0 mx-2 text-purple">
                            {project.title}
                          </h6>
                          <div
                            className="position-absolute"
                            style={{ right: "0", top: "15px" }}
                          >
                            <ProjectCardMenuBar />
                          </div>
                        </div>
                      </Card.Header>
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between">
                          <p
                            className={`rounded-4 text-center text-white mb-2 ${
                              project.status === "OnHold"
                                ? "bg-warning"
                                : project.status === "Ongoing"
                                ? "bg-secondary"
                                : project.status === "Finished"
                                ? "green-2"
                                : ""
                            }`}
                            style={{ fontSize: "12px", width: "55px" }}
                          >
                            {project.status}
                          </p>
                          <div>
                            <h6 className="project-dueDate-fs">
                              Due Date:{" "}
                              <span className="fw-normal">
                                {project.dueDate}
                              </span>
                            </h6>
                          </div>
                        </div>
                        <p className="my-2 pe-3 text-secondary font-size-12">
                          {project.description}
                        </p>
                        <h6 className="mt-3 text-secondary">MEMBERS</h6>
                        <div className="d-flex justify-content-start">
                          <AvatarGroup max={4}>
                            {project.members.map((member, index) => (
                              <Avatar
                                key={index}
                                alt={`Member ${index + 1}`}
                                src={member.image}
                                style={{ height: "25px", width: "25px" }}
                              />
                            ))}
                          </AvatarGroup>
                        </div>
                        <div className="card-body p-3 mt-3 custom-shadow custom-border-radius">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="mb-0">{project.tasks}</h6>
                              <p className="text-muted text-sm mb-0">Tasks</p>
                            </div>
                            <div className="col-6 text-end">
                              <h6 className="mb-0">{project.comments}</h6>
                              <p className="text-muted text-sm mb-0">
                                Comments
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
                <Col className="my-auto">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <ProjectModalForm /> {/*project modal form */}
                    <h6 className="mt-2">Add Project</h6>
                    <p className="text-secondary">
                      Click here to add new project
                    </p>
                  </div>
                </Col>
              </>
            </Row>
            {loading && (
              <div className="loader-container">
                <ThreeCircles
                  height="50"
                  width="50"
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor="white"
                  innerCircleColor="#6fd943"
                  middleCircleColor="white"
                />
              </div>
            )}
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
