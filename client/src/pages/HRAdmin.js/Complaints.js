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
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import Breadcrumb from "../../components/Breadcrumb";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import SortHeader from "../../components/SortHeader/SortHeader";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import TextAreaField from "../../components/Input&Buttons/TextAreaField";

const Complaints = () => {
  const [data] = useState([
    {
      complaintfrom: "Richard Atkinson",
      complaintagainst: "Sonya Sims",
      title: "Communication",
      complaintdate: "01-06-2023",
      description: "Lack of Communication.",
    },
    {
      complaintfrom: "Richard Atkinson",
      complaintagainst: "Sonya Sims",
      title: "discipline",
      complaintdate: "01-07-2023",
      description: "discipline",
    },
    {
      complaintfrom: "Joseph Fiennes",
      complaintagainst: "Chloe Humphrey",
      title: "Work Reason",
      complaintdate: "15-09-2023",
      description: "Work Reason",
    },
    {
      complaintfrom: "Juli Shepherd",
      complaintagainst: "August Mclaughlin",
      title: "Consectetur ullamco",
      complaintdate: "10-01-2024",
      description: "it is always very special. it is always very special.",
    },
    {
      complaintfrom: "Juli Shepherd",
      complaintagainst: "Joseph Fiennes",
      title: "Project Issue",
      complaintdate: "05-10-2023",
      description: "Project Issue",
    },
  ]);

  const [formData, setFormData] = useState({
    employee: "",
    complaintAgainst: "",
    title: "",
    date: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const employeeOptions = [
    { value: "employee1", label: "Richard Atkinson" },
    { value: "employee2", label: "Employee 2" },
  ];

  const complaintAgainstOptions = [
    { value: "against1", label: "Against 1" },
    { value: "against2", label: "Against 2" },
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
                title="Manage Compliants"
                breadcrumb1="Dashboard"
                breadcrumb2="Compliants"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create Complaints"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <SelectInputField
                            label="Complaint Form"
                            options={employeeOptions}
                            selectedValue={formData.employee}
                            onChange={handleInputChange}
                            className="form-select"
                            name="employee"
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <SelectInputField
                            label="Complaint Against"
                            options={complaintAgainstOptions}
                            selectedValue={formData.complaintAgainst}
                            onChange={handleInputChange}
                            className="form-select"
                            name="complaintAgainst"
                          />
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <TextInputField
                            label="Title"
                            type="text"
                            placeholder="Enter Complaint Title"
                            value={formData.title}
                            onChange={handleInputChange}
                            name="title"
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <TextInputField
                            label="Complaint Date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="31-07-2023"
                            name="date"
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
              <div className="border-4 bg-custom-white py-4 mx-4 mb-4 custom-border-radius custom-shadow scroller-div">
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
                          { label: "complaintfrom", className: "ps-3" },
                          { label: "complaintagainst" },
                          { label: "title" },
                          { label: "complaintdate" },
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
                            <td className="ps-4">{complaints.complaintfrom}</td>
                            <td>{complaints.complaintagainst}</td>
                            <td>{complaints.title}</td>
                            <td>{complaints.complaintdate}</td>

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

export default Complaints;
