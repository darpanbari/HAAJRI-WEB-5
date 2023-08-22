import React, { useState } from "react";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import { BsFileEarmarkPlus } from "react-icons/bs";
import SearchBtn from "../components/SearchBtn";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UseTooltip from "../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../components/EntriesPerPage";
import GenerateWithAiBtn from "../components/GenerateWithAiBtn";
import ModalComponent from "../components/ModalComponent";
import HeaderIconsBtn from "../components/IconButton/HeaderIconsBtn";
import Breadcrumb from "../components/Breadcrumb";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../components/SortHeader/SortHeaderLogic";
import TextAreaField from "../components/Input&Buttons/TextAreaField";
import TextInputField from "../components/Input&Buttons/TextInputField";
import SelectInputField from "../components/Input&Buttons/SelectInputField";

const Assets = () => {
  const [data] = useState([
    {
      employee: "Richard Atkinson",
      name: "Winifred Stone",
      purchaseDate: "18-01-2024",
      supportedDate: "18-06-2024",
      amount: "81.0 USD",
      description: "Sint repellendus Qu",
      action: "",
    },
    {
      employee: "Sonya Sims",
      name: "Sage Mcfadden",
      purchaseDate: "18-01-2024",
      supportedDate: "18-01-2024",
      amount: "58.0 USD",
      description: "Consequatur minus qu",
      action: "",
    },
    {
      employee: "Joseph Fiennes",
      name: "Tamara Figueroa",
      purchaseDate: "18-01-2024",
      supportedDate: "27-06-2024",
      amount: "25.0 USD",
      description: "Laboris corrupti ul",
      action: "",
    },
    {
      employee: "Joseph Fiennes",
      name: "Bo Underwood",
      purchaseDate: "18-05-2024",
      supportedDate: "18-11-2024",
      amount: "60.0 USD",
      description: "Omnis molestiae pari",
      action: "",
    },
  ]);

  const [formData, setFormData] = useState({
    assetTitle: "",
    branch: "",
    department: "",
    employee: "",
    complaintDate1: "",
    complaintDate2: "",
    description: "",
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
                title="Assets"
                breadcrumb1="Home"
                breadcrumb2="Assets"
              />
            </div>
            <div className="me-5 d-flex breadcrumb-rightside-btn">
              <HeaderIconsBtn title="Import" icon={<BsFileEarmarkPlus />} />

              <div className="breadcrumb-rightside-btn d-flex">
                <ModalComponent
                  modalTitle="Create Assets"
                  modalContent={
                    <>
                      <div>
                        <GenerateWithAiBtn />
                      </div>
                      <form className="mt-3">
                        <div className="d-flex">
                          <div className="mb-3 w-50 mx-2">
                            <TextInputField
                              label="Asset Title"
                              type="text"
                              placeholder="Enter Asset Title"
                              value={formData.assetTitle}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 w-50 mx-2">
                            <SelectInputField
                              label="Branch"
                              options={[
                                { value: "all", label: "All" },
                                { value: "india", label: "India" },
                                { value: "gujarat", label: "Gujarat" },
                              ]}
                              selectedValue={formData.branch}
                              onChange={handleInputChange}
                              className="form-select"
                            />
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="mb-3 w-50 mx-2">
                            <SelectInputField
                              label="Department"
                              options={[
                                { value: "", label: "Select Department" },
                                { value: "india", label: "India" },
                                { value: "gujarat", label: "Gujarat" },
                              ]}
                              selectedValue={formData.department}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3 w-50 mx-2">
                            <TextInputField
                              label="Employee"
                              type="text"
                              value={formData.employee}
                              onChange={handleInputChange}
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="mb-3 w-50 mx-2">
                            <TextInputField
                              label="Complaint Date"
                              type="date"
                              value={formData.complaintDate1}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 w-50 mx-2">
                            <TextInputField
                              label="Complaint Date"
                              type="date"
                              value={formData.complaintDate2}
                              onChange={handleInputChange}
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
          </div>

          <div>
            <div className="">
              <div
                className="border-4 py-4 mx-4 mb-4 custom-border-radius custom-shadow scroller-div"
                style={{
                  background: "#ffffff",
                }}
              >
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
                        <th onClick={() => handleSort("employee")}>
                          <div className="d-flex justify-content-between px-3 align-items-center">
                            EMPLOYEE
                            {orderBy === "employee" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "employee" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("name")}>
                          <div className="d-flex justify-content-between align-items-center">
                            NAME
                            {orderBy === "name" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "name" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("purchaseDate")}>
                          <div className="d-flex justify-content-between align-items-center">
                            PURCHASE DATE
                            {orderBy === "purchaseDate" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "purchaseDate" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                        <th onClick={() => handleSort("supportedDate")}>
                          <div className="d-flex justify-content-between align-items-center">
                            SUPPORTED DATE
                            {orderBy === "supportedDate" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "supportedDate" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("amount")}>
                          <div className="d-flex justify-content-between align-items-center">
                            AMOUNT
                            {orderBy === "amount" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "amount" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th onClick={() => handleSort("description")}>
                          <div className="d-flex justify-content-between align-items-center">
                            DESCRIPTION
                            {orderBy === "description" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "description" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>

                        <th className="" onClick={() => handleSort("action")}>
                          <div className="d-flex justify-content-end pe-3 align-items-center">
                            <span className="mx-2">ACTION</span>
                            {orderBy === "action" && (
                              <span>
                                {order === "asc" || order === "" ? (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp />
                                    <TiArrowSortedDown className="text-light-gray" />
                                  </div>
                                ) : (
                                  <div className="d-flex flex-column">
                                    <TiArrowSortedUp className="text-light-gray" />
                                    <TiArrowSortedDown />
                                  </div>
                                )}
                              </span>
                            )}
                            {orderBy !== "action" && (
                              <div className="d-flex flex-column">
                                <TiArrowSortedUp className="text-light-gray" />
                                <TiArrowSortedDown className="text-light-gray" />
                              </div>
                            )}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {filteredData
                        .slice(0, entriesPerPage)
                        .map((ticket, i) => (
                          <tr key={i}>
                            <td className="ps-4" style={{ maxWidth: "80px" }}>
                              {ticket.employee}
                            </td>
                            <td style={{ maxWidth: "80px" }}>{ticket.name}</td>
                            <td style={{ maxWidth: "80px" }}>
                              {ticket.purchaseDate}
                            </td>
                            <td style={{ maxWidth: "110px" }}>
                              {ticket.supportedDate}
                            </td>

                            <td style={{ maxWidth: "0px" }}>{ticket.amount}</td>
                            <td style={{ maxWidth: "0px" }}>
                              {ticket.description}
                            </td>
                            <td
                              className="text-end pe-4"
                              style={{ maxWidth: "0px" }}
                            >
                              <div className="mx-2 d-flex justify-content-end">
                                <span
                                  type="button"
                                  className="custom-tooltip-btn bg-sky-2 text-white custom-border-radius me-2"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <BiSolidEdit />
                                </span>
                                <span
                                  type="button"
                                  className="custom-tooltip-btn custom-border-radius text-white red-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                >
                                  <RiDeleteBin5Line />
                                </span>
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

export default Assets;
