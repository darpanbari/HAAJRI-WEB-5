import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import { TbEye } from "react-icons/tb";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import ModalComponent from "../../components/ModalComponent";
import Rating from "@mui/material/Rating";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import Ratings from "../../components/Ratings";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const Indicator = () => {
  const [data] = useState([
    {
      branch: "india",
      department: "Bangalore",
      designation: "Financials",
      overallRating: "3.4",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "Gujarat",
      department: "Surat",
      designation: "Computer technology",
      overallRating: "2.2",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "Japan",
      department: "Tokyo",
      designation: "Industrials",
      overallRating: "2.6",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "Gujarat",
      department: "Ahmadabad",
      designation: "Technology",
      overallRating: "3.0",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "UK",
      department: "London",
      designation: "Industrials",
      overallRating: "4.0",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "France",
      department: "Paris",
      designation: "Financials",
      overallRating: "3.6",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
    {
      branch: "USA",
      department: "New York",
      designation: "IT Hubs",
      overallRating: "3.4",
      addedBy: "Rajodiya infotech",
      createdAt: "19-05-2023",
    },
  ]);

  const [formData, setFormData] = useState({
    branch: "",
    department: "",
    destination: "",
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

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mb-2">
              <Breadcrumb
                title="Manage Indicator"
                breadcrumb1="Home"
                breadcrumb2="Indicator"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create New Company Policy"
                modalWidth="custom-width-2"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="mb-3 w-100 px-2">
                        <SelectInputField
                          label="Branch"
                          options={[
                            { value: "India", label: "India" },
                            { value: "Gujarat", label: "Gujarat" },
                          ]}
                          selectedValue={formData.branch}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <SelectInputField
                            label="Department"
                            options={[
                              { value: "dept1", label: "Department 1" },
                              { value: "dept2", label: "Department 2" },
                            ]}
                            selectedValue={formData.department}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3 w-50 mx-2">
                          <SelectInputField
                            label="Destination"
                            options={[
                              { value: "dest1", label: "Destination 1" },
                              { value: "dest2", label: "Destination 2" },
                            ]}
                            selectedValue={formData.destination}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="my-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                          Behavioural Competencies
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Business Process</p>
                          <Ratings />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                          Organizational Competencies
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Leadership</p>
                          <Ratings />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                          Technical Competencies
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Oral Communication</p>
                          <Ratings />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label border-bottom pb-2 w-100 ">
                          Productivity measures
                        </label>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Allocating Resources</p>
                          <Ratings />
                        </div>
                        <div className="d-flex justify-content-between mx-1">
                          <p className="font-size-14">Project Management</p>
                          <Ratings />
                        </div>
                      </div>
                    </form>
                  </>
                }
              />
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
                        {[
                          { label: "branch", className: "ms-3" },
                          { label: "department" },
                          { label: "designation" },
                          { label: "overallRating" },
                          { label: "addedBy" },
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
                      {filteredData.slice(0, entriesPerPage).map((award, i) => (
                        <tr key={i}>
                          <td className="ps-4">{award.branch}</td>
                          <td>{award.department}</td>
                          <td>{award.designation}</td>
                          <td className="d-flex">
                            <Rating
                              name="read-only"
                              value={award.overallRating}
                              precision={0.5}
                              className="orange-1"
                              readOnly
                            />
                            <p className="mb-2">{`(${award.overallRating})`}</p>
                          </td>
                          <td>{award.addedBy}</td>
                          <td>{award.createdAt}</td>
                          <td>
                            <div className="ms-2 d-flex justify-content-start">
                              <ActionIconsBtn
                                title="View"
                                icon={<TbEye />}
                                className="me-2 orange-2"
                              />
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

export default Indicator;
