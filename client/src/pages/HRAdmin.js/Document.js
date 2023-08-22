import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import { PiCubeFocusDuotone, PiDownloadSimpleBold } from "react-icons/pi";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import ModalComponent from "../../components/ModalComponent";
import { CgSoftwareUpload } from "react-icons/cg";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";
import TextAreaField from "../../components/Input&Buttons/TextAreaField";

const Document = () => {
  const [data] = useState([
    {
      name: "All Users",
      role: "All",
      description:
        "Follow these step-by-step instructions to start a document in Microsoft Word.",
    },
    {
      name: "Employee Document",
      role: "staff",
      description:
        "Follow these step-by-step instructions to start a document in Microsoft Word.",
    },
    {
      name: "HR Document",
      role: "All",
      description:
        "Follow these step-by-step instructions to start a document in Microsoft Word.",
    },
    {
      name: "Contracts and Agreements",
      role: "All",
      description:
        "Follow these step-by-step instructions to start a document in Microsoft Word.",
    },
    {
      name: "Research Papers",
      role: "staff",
      description: "Follow these step-by-step instructions to start a doc",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const roleOptions = [
    { value: "All", label: "All" },
    { value: "Staff", label: "Staff" },
  ];

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

  const handleDownloadImage = () => {
    const imageUrl = "/certificate.jpg";
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.png";
    link.click();
  };

  const handlePreviewImage = () => {
    const imageUrl = "/certificate.jpg";
    window.open(imageUrl);
  };

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
                breadcrumb1="Dashboard"
                breadcrumb2="Announcement"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create New Document"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="mb-3 w-100 px-2">
                        <TextInputField
                          label="Name"
                          type="text"
                          placeholder="Enter Document Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          name="name"
                        />
                      </div>

                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="Name" className="form-label">
                            Document
                          </label>
                          <label
                            htmlFor="fileInput1"
                            className="btn green-2 justify-content-center setting-fcont-btn text-white d-flex align-items-center font-size-12 mb-1 border-0"
                          >
                            <CgSoftwareUpload className="me-1 fs-6 text-white" />
                            Choose file here
                          </label>
                        </div>
                        <div className="mb-3 w-50 mx-2">
                      
                          <SelectInputField
                            label="Role"
                            options={roleOptions}
                            value={formData.role}
                            onChange={handleInputChange}
                            className="form-select"
                            name="complaintAgainst"
                          />
                        </div>
                      </div>
                      <div className="mb-3 mx-2">
                      <TextAreaField
                          label="Description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Enter Description"
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
              <div className="border-4 py-4 mx-4 mb-4 bg-custom-white custom-border-radius custom-shadow scroller-div">
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
                          { label: "name", className: "ps-3" },
                          { label: "document" },
                          { label: "role" },
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
                              {complaints.name}
                            </td>
                            <td className="">
                              <div className="mx-2 d-flex justify-content-start">
                                <ActionIconsBtn
                                  title="Download"
                                  icon={<PiDownloadSimpleBold />}
                                  className="me-2 green-3"
                                  onClick={handleDownloadImage}
                                />
                                <ActionIconsBtn
                                  title="Preview"
                                  icon={<PiCubeFocusDuotone />}
                                  className="bg-secondary"
                                  onClick={handlePreviewImage}
                                />
                              </div>
                            </td>
                            <td>{complaints.role}</td>

                            <td
                              className="text-truncate"
                              style={{ maxWidth: "0px", paddingRight: "200px" }}
                            >
                              {complaints.description}
                            </td>
                            <td>
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

export default Document;
