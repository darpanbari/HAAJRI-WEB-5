import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import ModalComponent from "../../components/ModalComponent";
import { CgSoftwareUpload } from "react-icons/cg";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeader from "../../components/SortHeader/SortHeader";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import TextAreaField from "../../components/Input&Buttons/TextAreaField";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const CompanyPolicy = () => {
  const [data] = useState([
    {
      branch: "india",
      title: "Employment Contracts.",
      description: "Code of Conduct.Code of Conduct.Code of Conduct.",
      attachment: "--",
    },
    {
      branch: "USA",
      title: "Code of Conduct.",
      description: "Employment Contracts.Employment Contracts.",
      attachment: "--",
    },
    {
      branch: "UK",
      title: "Originated",
      description: "Originated policies are formulated by top level management",
      attachment: "--",
    },
    {
      branch: "Japan",
      title: "Recruitment policy",
      description:
        "These four policy types differ in terms of what their goals",
      attachment: "--",
    },
    {
      branch: "France",
      title: "internet and email policy.",
      description:
        "reference to the objectives of the organization and their achievement.",
      attachment: "--",
    },
  ]);

  const [formData, setFormData] = useState({
    branch: "",
    title: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const branchOptions = [
    { value: "india", label: "India" },
    { value: "gujarat", label: "Gujarat" },
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
                title="Manage Company Policy"
                breadcrumb1="Dashboard"
                breadcrumb2="Company Policy"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create New Company Policy"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="mb-3 w-100 px-2">
                        <SelectInputField
                          label="Branch"
                          options={branchOptions}
                          selectedValue={formData.branch}
                          onChange={handleInputChange}
                          className="form-select"
                        />
                      </div>
                      <div className="mb-3 w-100 px-2">
                        <TextInputField
                          label="Title"
                          type="text"
                          placeholder="Enter Company Policy Title"
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
                      <div className="mb-3 w-50 mx-2">
                        <label htmlFor="document" className="form-label">
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
                          { label: "branch", className: "ps-3" },
                          { label: "title" },
                          { label: "description" },
                          { label: "attachment" },
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
                        .map((cpolicy, i) => (
                          <tr key={i}>
                            <td className="ps-4">{cpolicy.branch}</td>

                            <td style={{ width: "600px" }}>{cpolicy.title}</td>

                            <td
                              className="text-truncate"
                              style={{ maxWidth: "0px", paddingRight: "200px" }}
                            >
                              {cpolicy.description}
                            </td>
                            <td>{cpolicy.attachment}</td>
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

export default CompanyPolicy;
