import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
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
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";

const Award = () => {
  const [data] = useState([
    {
      employee: "Richard Atkinson",
      award: "Trophy",
      date: "24-05-2023",
      gift: "Books",
      description: "Classic trophy cups symbolize victory and recognition.",
    },
    {
      employee: "Sonya Sims",
      award: "Medals",
      date: "02-06-2023",
      gift: "Gold",
      description:
        "Recognize employees who have displayed exceptional leadership skills, inspiring and guiding their team members towards success.",
    },
    {
      employee: "Joseph Fiennes",
      award: "Trophy",
      date: "15-07-2023",
      gift: "Trophy",
      description:
        "A versatile option that allows employees to choose something they genuinely want.",
    },
    {
      employee: "Sonya Sims",
      award: "Certificat",
      date: "21-09-2023",
      gift: "Success certificate",
      description:
        "Provide employees with access to subscription services that align with their interests.",
    },
    {
      employee: "Richard Atkinson",
      award: "Medals",
      date: "08-12-2023",
      gift: "Silver Medals",
      description:
        "Thoughtfully chosen books related to professional development, leadership, or personal growth can be valuable gifts.",
    },
    {
      employee: "Joseph Fiennes",
      award: "Trophy",
      date: "21-03-2024",
      gift: "Trophy",
      description:
        "Provide employees with access to subscription services that align with their interests.",
    },
    {
      employee: "Joseph Fiennes",
      award: "Certificat",
      date: "11-05-2024",
      gift: "Certificate",
      description: "Recognize employees who have dis",
    },
  ]);

  // modal
  const [employee, setEmployee] = useState("");
  const [awardType, setAwardType] = useState("");

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
                title="Manage Award"
                breadcrumb1="Dashboard"
                breadcrumb2="Award"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-5 d-flex">
              <ModalComponent
                modalTitle="Create Award"
                modalContent={
                  <>
                    <div>
                      <GenerateWithAiBtn />
                    </div>
                    <form className="mt-3">
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="employee" className="form-label">
                            Employee
                          </label>
                          <select
                            id="employee"
                            className="form-select"
                            value={employee}
                            onChange={(e) => setEmployee(e.target.value)}
                          >
                            <option value="">Select Employee</option>
                            <option value="employee1">Richard Atkinson</option>
                            <option value="employee2">Employee 2</option>
                          </select>
                        </div>

                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="awardType" className="form-label">
                            Award Type
                          </label>
                          <select
                            id="awardType"
                            className="form-select"
                            value={awardType}
                            onChange={(e) => setAwardType(e.target.value)}
                          >
                            <option value="">Select Award Type</option>
                            <option value="award1">Award 1</option>
                            <option value="award2">Award 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="date" className="form-label">
                            Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            required
                          />
                        </div>

                        <div className="mb-3 w-50 mx-2">
                          <label htmlFor="gift" className="form-label">
                            Gift
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="gift"
                            placeholder="Enter Gift"
                          />
                        </div>
                      </div>
                      <div className="mb-3 mx-2">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="4"
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
                          { label: "employee", className: "px-3" },
                          { label: "award" },
                          { label: "date" },
                          { label: "gift" },
                          { label: "description" },
                          { label: "action", className: "pe-3" },
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
                          <td className="ps-4">{award.employee}</td>
                          <td>{award.award}</td>
                          <td>{award.date}</td>
                          <td>{award.gift}</td>

                          <td
                            className="text-truncate"
                            style={{ maxWidth: "0px", paddingRight: "200px" }}
                          >
                            {award.description}
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

export default Award;
