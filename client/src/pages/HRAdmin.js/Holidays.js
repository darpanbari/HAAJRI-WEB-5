import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import { RiDeleteBin2Line, RiDeleteBin5Line } from "react-icons/ri";
import { ImSearch } from "react-icons/im";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import SearchBtn from "../../components/SearchBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UseTooltip from "../../components/useTooltip";
import EntriesPerPage from "../../components/EntriesPerPage";
import { BiSolidEdit } from "react-icons/bi";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import HeaderIconsBtn from "../../components/IconButton/HeaderIconsBtn";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import TextInputField from "../../components/Input&Buttons/TextInputField";

const Holidays = () => {
  const [data] = useState([
    {
      occasion: "celebration",
      startdate: "19-05-2023",
      enddate: "20-05-2023",
    },
    {
      occasion: "party",
      startdate: "25-05-2023",
      enddate: "26-05-2023",
    },
    {
      occasion: "good friday",
      startdate: "06-07-2023",
      enddate: "06-07-2023",
    },
    {
      occasion: "event",
      startdate: "24-06-2023",
      enddate: "24-06-2023",
    },
    {
      occasion: "krishna janmashtami",
      startdate: "07-09-2023",
      enddate: "07-09-2023",
    },
    {
      occasion: "indian independence day",
      startdate: "15-08-2023",
      enddate: "15-08-2023",
    },
    {
      occasion: "parsi new year's day",
      startdate: "16-08-2023",
      enddate: "16-08-2023",
    },
    {
      occasion: "raksha bandhan",
      startdate: "30-08-2023",
      enddate: "30-08-2023",
    },
    {
      occasion: "ganesh chaturthi",
      startdate: "19-09-2023",
      enddate: "19-09-2023",
    },
    {
      occasion: "gandhi jayanti",
      startdate: "02-10-2023",
      enddate: "02-10-2023",
    },
  ]);

  const [formData, setFormData] = useState({
    occasion: "",
    startDate: "",
    endDate: "",
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
                title="Manage Holydays"
                breadcrumb1="Dashboard"
                breadcrumb2="Holydays"
              />
            </div>

            <div className="breadcrumb-rightside-btn me-0 d-flex">
              <HeaderIconsBtn
                title="Export Tickets CSV File"
                icon={<BsFileEarmarkPlus />}
              />
              <HeaderIconsBtn
                title="Export Tickets CSV File"
                icon={<AiOutlineCalendar />}
              />

              <div className="breadcrumb-rightside-btn me-5 d-flex">
                <ModalComponent
                  modalTitle="Create New Holiday"
                  modalContent={
                    <>
                      <div>
                        <GenerateWithAiBtn />
                      </div>
                      <form className="mt-3">
                        <div className="mb-3 w-100 px-2">
                          <TextInputField
                            label="Occasion"
                            type="text"
                            placeholder="Enter Occasion"
                            value={formData.occasion}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="d-flex">
                          <div className="mb-3 w-50 mx-2">
                            <TextInputField
                              label="Start Date"
                              type="date"
                              value={formData.startDate}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 w-50 mx-2">
                            <TextInputField
                              label="End Date"
                              type="date"
                              value={formData.endDate}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="mb-3 mx-2">
                          <label htmlFor="description" className="form-label">
                            Synchronize in Google Calendar ?
                          </label>
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                      </form>
                    </>
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex ticket-top-container justify-content-end mx-4">
                <Row
                  className="row justify-content-end ms-auto"
                  style={{ width: "60%" }}
                >
                  <Col xxl={3} lg={3} md={6} sm={12} className="w-50">
                    <TextInputField label="Start Date" type="Date" />
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12} className="w-50">
                    <TextInputField label="End Date" type="Date" />
                  </Col>
                </Row>
                <Row>
                  <div className="mx-1 mt-4 pt-1 d-flex align-items-center text-end justify-content-end">
                    <HeaderIconsBtn title="Apply" icon={<ImSearch />} />
                    <span
                      type="button"
                      className="custom-tooltip-btn2 red-icon custom-border-radius text-white ms-1 me-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Reset"
                    >
                      <RiDeleteBin2Line />
                    </span>
                  </div>
                </Row>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4">
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
                          { label: "occasion", className: "ps-3" },
                          { label: "startdate" },
                          { label: "enddate" },
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
                            <td className="ps-4">{cpolicy.occasion}</td>

                            <td>{cpolicy.startdate}</td>

                            <td>{cpolicy.enddate}</td>
                            <td className="" style={{ width: "200px" }}>
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

export default Holidays;
