import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import TextAreaField from "../../components/Input&Buttons/TextAreaField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const Announcement = () => {
  const [data] = useState([
    {
      title: "WE WANT TO EARN YOUR DEEPEST TRUST.",
      startdate: "15-06-2023",
      enddate: "17-06-2023",
      description: "WE WANT TO EARN YOUR DEEPEST TRUST.",
    },
    {
      title: "Sports Scream",
      startdate: "21-07-2023",
      enddate: "28-07-2023",
      description: "Sports Scream",
    },
    {
      title: "Meeting Related",
      startdate: "17-08-2023",
      enddate: "23-08-2023",
      description:
        'I want the name "Doe Product" to be synonymous in your mind with quality.',
    },
    {
      title: "Live new site",
      startdate: "01-10-2023",
      enddate: "19-10-2023",
      description:
        'I want the name "Doe Product" to be synonymous in your mind with quality.',
    },
    {
      title: "Event Related",
      startdate: "01-01-2024",
      enddate: "10-01-2024",
      description: "Event Related",
    },
  ]);

  const [formData, setFormData] = useState({
    announcementTitle: "",
    branch: "",
    department: "",
    employee: "",
    complaintDate1: "",
    complaintDate2: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mb-2">
              <Breadcrumb
                title="Manage Announcement"
                breadcrumb1="Announcement"
                breadcrumb2="Complaints"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create New Announcement"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <TextInputField
                            label="Announcement Title"
                            type="text"
                            placeholder="Enter Announcement Title"
                            value={formData.announcementTitle}
                            onChange={handleInputChange}
                            name="announcementTitle"
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <SelectInputField
                            label="Branch"
                            placeholder="Select Branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                            name="branch"
                            options={[
                              { value: "all", label: "All" },
                              { value: "india", label: "India" },
                              { value: "gujarat", label: "Gujarat" },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <SelectInputField
                            label="Department"
                            placeholder="Select Department"
                            value={formData.department}
                            onChange={handleInputChange}
                            name="department"
                            options={[
                              { value: "all", label: "All" },
                              { value: "india", label: "India" },
                              { value: "gujarat", label: "Gujarat" },
                            ]}
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <TextInputField
                            label="Employee"
                            type="text"
                            placeholder="Enter Employee"
                            value={formData.employee}
                            onChange={handleInputChange}
                            name="employee"
                          />
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <TextInputField
                            label="Complaint Date"
                            type="date"
                            placeholder="Select Complaint Date"
                            value={formData.complaintDate1}
                            onChange={handleInputChange}
                            name="complaintDate1"
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <TextInputField
                            label="Complaint Date"
                            type="date"
                            placeholder="Select Complaint Date"
                            value={formData.complaintDate2}
                            onChange={handleInputChange}
                            name="complaintDate2"
                          />
                        </div>
                      </div>
                      <div className="mb-3 mx-2">
                        <TextAreaField
                          label="Description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Enter Description"
                          name="description"
                        />
                      </div>
                    </form>
                  </>
                }
              />
            </div>
          </div>

          <div>
            <div className="">
              <div className="border-4 py-4 bg-custom-white mx-4 mb-4 custom-border-radius custom-shadow scroller-div">
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
                      <tr>
                        {[
                          { label: "title", className: "ms-3" },
                          { label: "startdate" },
                          { label: "enddate" },
                          { label: "description" },
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
                      {filteredData
                        .slice(0, entriesPerPage)
                        .map((complaints, i) => (
                          <tr key={i}>
                            <td className="ps-4" style={{ width: "600px" }}>
                              {complaints.title}
                            </td>
                            <td>{complaints.startdate}</td>
                            <td>{complaints.enddate}</td>

                            <td
                              className="text-truncate"
                              style={{ maxWidth: "0px", paddingRight: "200px" }}
                            >
                              {complaints.description}
                            </td>
                            <td className="">
                              <div className="mx-2 d-flex justify-content-start">
                                <ActionIconsBtn
                                  title="Edit"
                                  icon={<BiSolidEdit />}
                                  className="me-2 bg-sky-2"
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

                  <h6 className="p-4 fw-normal">
                    Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
                    {data.length} entries
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
