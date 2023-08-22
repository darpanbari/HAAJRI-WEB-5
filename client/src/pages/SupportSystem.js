import React, { useState } from "react";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  PiArrowBendUpLeftBold,
  PiCubeFocusDuotone,
  PiDownloadSimpleBold,
} from "react-icons/pi";
import SearchBtn from "../components/SearchBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UseTooltip from "../components/useTooltip";
import EntriesPerPage from "../components/EntriesPerPage";
import { Card, Form } from "react-bootstrap";
import { CgCast } from "react-icons/cg";
import { BiPencil } from "react-icons/bi";
import ModalComponent from "../components/ModalComponent";
import Breadcrumb from "../components/Breadcrumb";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../components/SortHeader/SortHeaderLogic";
import SortHeader from "../components/SortHeader/SortHeader";
import ActionIconsBtn from "../components/IconButton/ActionIconsBtn";
import TextBtnDiffLength from "../components/IconButton/TextBtnDiffLength";
import TextBtnSameLength from "../components/IconButton/TextBtnSameLength";
import TextInputField from "../components/Input&Buttons/TextInputField";
import SelectInputField from "../components/Input&Buttons/SelectInputField";

const SupportSystem = () => {
  const [data] = useState([
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090117",
      attachment: "",
      assignUser: "Richard Atkinson",
      status: "Open",
      createdAt: "10-01-2022",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090141",
      attachment: "",
      assignUser: "Mick Aston",
      status: "Close",
      createdAt: "10-01-2022",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090124",
      attachment: "",
      assignUser: "Mick Aston",
      status: "On Hold",
      createdAt: "10-01-2022",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Suscipit ratione dol",
        sts: "High",
      },
      code: "100122",
      attachment: "",
      assignUser: "Mick Aston",
      status: "Open",
      createdAt: "10-01-2022",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "Low",
      },
      code: "090836",
      attachment: "",
      assignUser: "Mick Aston",
      status: "Open",
      createdAt: "15-08-2022",
    },
    {
      createdBy: {
        image: "/mick.jpg",
        name: "Mick Aston",
      },
      ticket: {
        desc: "test purpes",
        sts: "Medium",
      },
      code: "120405",
      attachment: "",
      assignUser: "Buffy Walter",
      status: "On Hold",
      createdAt: "10-04-2023",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Test Demo",
        sts: "High",
      },
      code: "090417",
      attachment: "-",
      assignUser: "Larson LLC",
      status: "Open",
      createdAt: "25-04-2023",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Rerum molestiae volu",
        sts: "High",
      },
      code: "100535",
      attachment: "-",
      assignUser: "Larson LLC",
      status: "Open",
      createdAt: "03-05-2023",
    },
    {
      createdBy: {
        image: "/rajodiya.jpg",
        name: "Rajodiya Infotech",
      },
      ticket: {
        desc: "Officia deserunt est",
        sts: "Critical",
      },
      code: "060516",
      attachment: "-",
      assignUser: "Emilia Fox",
      status: "Open",
      createdAt: "04-05-2023",
    },
    {
      createdBy: {
        image: "/walter.jpg",
        name: "Buffy Walter",
      },
      ticket: {
        desc: "gdf",
        sts: "Medium",
      },
      code: "030619",
      attachment: "-",
      assignUser: "Abel Callahan",
      status: "Open",
      createdAt: "16-06-2023",
    },
  ]);

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    priority: "Low",
    status: "Open",
    endDate: "",
    description: "",
    attachment: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const { orderBy, order, filteredData, handleSort, setFilteredData } =
    SortHeaderLogic(data);

  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  // search
  const handleSearchData = (searchedData) => {
    setFilteredData(searchedData);
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
                title="Support"
                breadcrumb1="Dashboard"
                breadcrumb2="Support"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <div className="breadcrumb-rightside-btn d-flex">
                <ModalComponent
                  modalTitle="Add Support System"
                  modalWidth="custom-width-2"
                  modalContent={
                    <>
                      <Form>
                        <TextInputField
                          label="Subject"
                          type="text"
                          placeholder="Enter Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          name="subject"
                        />
                        <div className="d-flex">
                          <TextInputField
                            label="Name"
                            type="text"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-50 me-3"
                            name="name"
                          />
                          <SelectInputField
                            label="Priority"
                            options={[
                              { value: "Low", label: "Low" },
                              { value: "Medium", label: "Medium" },
                              { value: "High", label: "High" },
                            ]}
                            value={formData.priority}
                            onChange={handleInputChange}
                            className="w-50"
                            name="priority"
                          />
                        </div>
                        <div className="d-flex">
                          <SelectInputField
                            label="Status"
                            options={[
                              { value: "Open", label: "Open" },
                              { value: "Closed", label: "Closed" },
                              { value: "In Progress", label: "In Progress" },
                            ]}
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-50 me-3"
                            name="status"
                          />
                          <TextInputField
                            label="End Date"
                            type="date"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="w-50"
                            name="endDate"
                          />
                        </div>
                        <TextInputField
                          label="Description"
                          type="textarea"
                          rows={4}
                          value={formData.description}
                          onChange={handleInputChange}
                          name="description"
                        />
                        <div className="w-50">
                          <label htmlFor="attachment" className="form-label">
                            Attachment
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            onChange={handleInputChange}
                            name="attachment"
                          />
                        </div>
                      </Form>
                    </>
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <Row>
              <Col className="d-flex flex-column support-dash-card">
                {/* 1st Row */}
                <Row className="" style={{ margin: "auto 12px" }}>
                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="green-2 rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">Total</p>
                            <h6 className="mb-0">Ticket</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">17</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="sky-2 rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">Open</p>
                            <h6 className="mb-0">Ticket</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">7</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="orange-2 rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">On Hold</p>
                            <h6 className="mb-0">Ticket</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">2</h3>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xl={3} lg={4} md={4} sm={6} className="mb-4">
                    <Card className="custom-shadow custom-border-radius bg-custom-white border-0 me-4 w-100">
                      <Card.Body className="p-4 d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <CgCast className="red-icon rounded-4 white-icon " />
                          </div>
                          <div className="mx-3">
                            <p className="font-size-12 mb-0">Total</p>
                            <h6 className="mb-0">Close</h6>
                          </div>
                        </div>
                        <h3 className="mb-0">1</h3>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div>
            <div className="">
              <div className="border-4 py-4 m-4 mt-0 custom-border-radius bg-custom-white custom-shadow scroller-div">
                <div className="table-responsive1">
                  <div className="d-flex justify-content-between pb-4 px-4">
                    <EntriesPerPage
                      value={entriesPerPage}
                      onChange={handleEntriesPerPage}
                    />
                    <div>
                      <SearchBtn data={data} onDataSearch={handleSearchData} />
                    </div>
                  </div>

                  <Table hover>
                    <thead className="table-head">
                      <tr className="table-head">
                        {[
                          { label: "name", className: "ms-3" },
                          { label: "desc" },
                          { label: "code" },
                          { label: "attachment" },
                          { label: "assignUser" },
                          { label: "status" },
                          { label: "createdAt" },
                          { label: "action" },
                        ].map((header) => (
                          <SortHeader
                            key={header.label}
                            label={header.label}
                            orderBy={orderBy}
                            order={order}
                            onClick={handleSort}
                            className={header.className}
                          />
                        ))}
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {filteredData.slice(0, entriesPerPage).map((ss, i) => (
                        <tr key={i}>
                          <td>
                            <div className="d-flex align-items-center ps-3 py-1">
                              <img
                                src={`${ss.createdBy.image}`}
                                style={{
                                  height: "38px",
                                  width: "38px",
                                  borderRadius: "100%",
                                }}
                                alt="img"
                              />
                              <div className="fw-normal">
                                {ss.createdBy.name}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p className="mb-0 font-size-12 fw-bold">
                                {ss.ticket.desc}
                              </p>

                              <TextBtnDiffLength keyName={ss.ticket.sts} />
                            </div>
                          </td>
                          <td>{ss.code}</td>
                          <td>
                            <div className="mx-2 d-flex justify-content-start">
                              <ActionIconsBtn
                                title="Download"
                                icon={<PiDownloadSimpleBold />}
                                className="me-2 green-2"
                              />
                              <ActionIconsBtn
                                title="Preview"
                                icon={<PiCubeFocusDuotone />}
                                className="bg-secondary"
                              />
                            </div>
                          </td>

                          <td>{ss.assignUser}</td>
                          <td>
                            <TextBtnSameLength
                              keyName={ss.status}
                              className="w-75"
                            />
                          </td>
                          <td>{ss.createdAt}</td>
                          <td className="text-center">
                            <div className="mx-2 d-flex">
                              <ActionIconsBtn
                                title="Reply"
                                icon={<PiArrowBendUpLeftBold />}
                                className="me-2 orange-2"
                              />
                              <ActionIconsBtn
                                title="Edit"
                                icon={<BiPencil />}
                                className="me-2 green-2"
                              />
                              <ActionIconsBtn
                                title="Delete"
                                icon={<RiDeleteBin5Line />}
                                className="red-icon"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <p className="p-4">
                    Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
                    {data.length} entries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportSystem;
