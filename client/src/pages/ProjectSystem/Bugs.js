import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import UseTooltip from "../../components/useTooltip";
import { GrAttachment } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import EntriesPerPage from "../../components/EntriesPerPage";
import SearchBtn from "../../components/SearchBtn";
import ModalComponent from "../../components/ModalComponent";
import { Form } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import TextBtnSameLength from "../../components/IconButton/TextBtnSameLength";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const Bugs = () => {
  const [data] = useState([
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Forgot password error",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Medium",
      endDate: "21 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/mick.jpg",
      attachment: {
        attach: "1",
        comment: "3",
      },
    },
    {
      name: {
        desc: "Validation remaining",
        sts: "Newsletter Templates",
      },
      bugStatus: "Unconfirmed",
      priority: "High",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/user-3.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/user-4.jpg",
      attachment: {
        attach: "2",
        comment: "7",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Medium",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "High",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Medium",
      endDate: "23 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Login page failure",
        sts: "Newsletter Templates",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "11 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "3",
        comment: "6",
      },
    },
    {
      name: {
        desc: "Forgot password error",
      },
      bugStatus: "Confirmed",
      priority: "High",
      endDate: "08 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "7",
        comment: "2",
      },
    },
    {
      name: {
        desc: "Forgot password error",
      },
      bugStatus: "Confirmed",
      priority: "Medium",
      endDate: "08 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "7",
        comment: "2",
      },
    },
    {
      name: {
        desc: "Forgot password error",
      },
      bugStatus: "Confirmed",
      priority: "Medium",
      endDate: "08 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "7",
        comment: "2",
      },
    },
    {
      name: {
        desc: "Forgot password error",
      },
      bugStatus: "Confirmed",
      priority: "Low",
      endDate: "08 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "7",
        comment: "2",
      },
    },
    {
      name: {
        desc: "Forgot password error",
      },
      bugStatus: "Confirmed",
      priority: "High",
      endDate: "08 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "7",
        comment: "2",
      },
    },
    {
      name: {
        desc: "Forgot password error",
      },
      bugStatus: "Confirmed",
      priority: "Medium",
      endDate: "08 Jul 2024",
      createdBy: "Rajodiya Infotech",
      assignedTo: "/rajodiya.jpg",
      attachment: {
        attach: "7",
        comment: "2",
      },
    },
  ]);

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    priority: "",
    status: "",
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

  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
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
                title="Manage Bug Report"
                breadcrumb1="Dashboard"
                breadcrumb2="Bug Report"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <div className="breadcrumb-rightside-btn d-flex">
                <ModalComponent
                  modalTitle="Add Bugs"
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
                          controlId="subject"
                        />
                        <div className="d-flex">
                          <TextInputField
                            label="Name"
                            type="text"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-50 me-3"
                            controlId="name"
                          />
                          <SelectInputField
                            label="Priority"
                            options={[
                              { value: "Low", label: "Low" },
                              { value: "Medium", label: "Medium" },
                              { value: "High", label: "High" },
                            ]}
                            selectedValue={formData.priority}
                            onChange={handleInputChange}
                            className="w-50"
                            controlId="priority"
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
                            selectedValue={formData.status}
                            onChange={handleInputChange}
                            className="w-50 me-3"
                            controlId="status"
                          />
                          <TextInputField
                            label="End Date"
                            type="date"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="w-50"
                            controlId="endDate"
                          />
                        </div>
                        <TextInputField
                          label="Description"
                          type="textarea"
                          rows={4}
                          value={formData.description}
                          onChange={handleInputChange}
                          controlId="description"
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
            <div className="">
              <div className="border-4 pb-2 m-4 mt-0 custom-border-radius bg-custom-white custom-shadow scroller-div">
                <div className="table-responsive1">
                  <div className="d-flex justify-content-between py-4 px-4">
                    <EntriesPerPage
                      value={entriesPerPage}
                      onChange={handleEntriesPerPage}
                    />
                    <div>
                      <SearchBtn />
                    </div>
                  </div>

                  <Table hover>
                    <thead className="table-head">
                      <tr>
                        <th className="ps-4">
                          <div>NAME</div>
                        </th>
                        <th>
                          <div>BUG STATUS</div>
                        </th>
                        <th>
                          <div>PRIORITY</div>
                        </th>
                        <th>
                          <div>END DATE</div>
                        </th>
                        <th>
                          <div>CREATED BY</div>
                        </th>
                        <th>
                          <div>ASSIGNED TO</div>
                        </th>
                        <th>
                          <div></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {data.map((ss, i) => (
                        <tr key={i}>
                          <td style={{ width: "29%" }}>
                            <div className="d-flex align-items-center justify-content-between ps-3 me-5 py-1">
                              <div>
                                <div className="font-size-12 fw-bold green-1">
                                  {ss.name.desc}
                                </div>
                                <div className="fw-normal text-secondary">
                                  {ss.name.sts}
                                </div>
                              </div>
                              <button className="btn green-2 font-size-12 text-white btn-width1">
                                Owner
                              </button>
                            </div>
                          </td>

                          <td>{ss.bugStatus}</td>
                          <td>
                            {/* <button
                              className={`btn btn-success border-0 btn-width ${
                                ss.priority === "Low"
                                  ? "sky-2"
                                  : ss.priority === "Medium"
                                  ? "green-2"
                                  : ss.priority === "High"
                                  ? "orange-2"
                                  : "green-2"
                              }`}
                            >
                              {ss.priority}
                            </button> */}
                            <TextBtnSameLength
                              keyName={ss.priority}
                              className="w-75"
                            />
                          </td>

                          <td className="text-danger">{ss.endDate}</td>
                          <td>{ss.createdBy}</td>
                          <td style={{ width: "15%" }}>
                            <img
                              src={`${ss.assignedTo}`}
                              alt="img"
                              style={{
                                height: "38px",
                                width: "38px",
                                borderRadius: "100%",
                              }}
                            />
                          </td>
                          <td className="text-center">
                            <div>
                              <span className="me-2">
                                <GrAttachment className="me-1" />
                                {ss.attachment.attach}
                              </span>
                              <span>
                                <FaRegCommentDots className="me-1" />
                                {ss.attachment.comment}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bugs;
