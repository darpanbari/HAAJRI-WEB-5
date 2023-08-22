import React, { useState } from "react";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import { RiDeleteBin2Line, RiDeleteBin5Line } from "react-icons/ri";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../components/SearchBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UseTooltip from "../components/useTooltip";
import EntriesPerPage from "../components/EntriesPerPage";
import Breadcrumb from "../components/Breadcrumb";
import HeaderIconsBtn from "../components/IconButton/HeaderIconsBtn";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../components/SortHeader/SortHeaderLogic";
import SelectInputField from "../components/Input&Buttons/SelectInputField";
import { BsFileEarmarkPlus } from "react-icons/bs";
import SortHeader from "../components/SortHeader/SortHeader";
import ActionIconsBtn from "../components/IconButton/ActionIconsBtn";
import TextBtnSameLength from "../components/IconButton/TextBtnSameLength";

const Tickets = () => {
  const [data] = useState([
    {
      id: 1234567890,
      name: "aaa",
      email: "sanjay.dahal90@gmail.com",
      category: "Bug",
      status: "New Ticket",
      priority: "Urgent",
      timing: "Response time: 43 seconds after Resolve In: 2 Hour",
      created: "2 hours ago",
    },
    {
      id: 1234567891,
      name: "John",
      email: "john@example.com",
      category: "Questions",
      status: "In Progress",
      priority: "High",
      timing: "Response time: 2 minutes after Resolve In: 2 Hour",
      created: "1 week ago",
    },
    {
      id: 1234567892,
      name: "pearl smith",
      email: "xoxigif@mailinator.com",
      category: "New Installation",
      status: "In Progress",
      priority: "Low",
      timing: "Response Overdue: 2 weeks after Resolve In: 4 Day",
      created: "1 month ago",
    },
    {
      id: 1234567893,
      name: "Nell Macdonald",
      email: "kuwexi@mailinator.com",
      category: "New Installation",
      status: "On Hold",
      priority: "Low",
      timing: "Response In: 4 Day Resolve In: 4 Day",
      created: "1 month ago",
    },
    {
      id: 1234567894,
      name: "Stuart Fitzpatrick",
      email: "jejitajar@mailinator.com",
      category: "Questions",
      status: "In Progress",
      priority: "Medium",
      timing: "Response In: 3 Hour Resolve In: 3 Hour",
      created: "1 month ago",
    },
    {
      id: 1234567895,
      name: "Emerald Colon",
      email: "fityfapimy@mailinator.com",
      category: "Bug",
      status: "On Hold",
      priority: "High",
      timing: "Response In: 2 Hour Resolve In: 2 Hour",
      created: "1 month ago",
    },
    {
      id: 1234567896,
      name: "abc",
      email: "yoxigif@mailinator.com",
      category: "Bug",
      status: "In Progress",
      priority: "Urgent",
      timing: "Response time: 43 seconds after Resolve In: 2 months",
      created: "2 months ago",
    },
  ]);

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
                title="Manage Tickets"
                breadcrumb1="Home"
                breadcrumb2="Tickets"
                // breadcrumb2Link="/tickets/create"
              />
            </div>
            <div className="me-5 d-flex breadcrumb-rightside-btn">
              <HeaderIconsBtn
                title="Export Tickets CSV File"
                icon={<BsFileEarmarkPlus />}
              />
              <HeaderIconsBtn title="Create User" icon={<AiOutlinePlus />} to="/tickets/create"/>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex ticket-top-container justify-content-end mx-4">
                <Row
                  className="row justify-content-end ms-auto"
                  style={{ width: "60%" }}
                >
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <SelectInputField
                      label="Category"
                      options={[
                        { value: "Category1", label: "Category1" },
                        { value: "Category2", label: "Category2" },
                        { value: "Category3", label: "Category3" },
                      ]}
                      className="p-2"
                    />
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <SelectInputField
                      label="Status"
                      options={[
                        { value: "Status1", label: "Status1" },
                        { value: "Status2", label: "Status2" },
                        { value: "Status3", label: "Status3" },
                      ]}
                      className="p-2"
                    />
                  </Col>
                  <Col xxl={3} lg={3} md={6} sm={12}>
                    <SelectInputField
                      label="Priority"
                      options={[
                        { value: "Priority1", label: "Priority1" },
                        { value: "Priority2", label: "Priority2" },
                        { value: "Priority3", label: "Priority3" },
                      ]}
                      className="p-2"
                    />
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
            <div className="">
              <div className="border-4 py-4 m-4 custom-border-radius bg-custom-white custom-shadow scroller-div">
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
                          { label: "ticket id" },
                          { label: "name" },
                          { label: "email" },
                          { label: "category" },
                          { label: "status" },
                          { label: "priority" },
                          { label: "timing" },
                          { label: "created" },
                          { label: "action" },
                        ].map((header) => (
                          <SortHeader
                            key={header.label}
                            label={header.label}
                            orderBy={orderBy}
                            order={order}
                            onClick={handleSort}
                          />
                        ))}
                      </tr>
                    </thead>
                    <tbody className="y-center">
                      {filteredData.slice(0, entriesPerPage).map((ticket) => (
                        <tr key={ticket.id}>
                          <td className="text-center fw-bold">
                            <button
                              type="button"
                              className="btn btn-outline-success font-size-14 py-2"
                            >
                              {ticket.id}
                            </button>
                          </td>
                          <td>{ticket.name}</td>
                          <td>{ticket.email}</td>
                          <td>
                            <TextBtnSameLength keyName={ticket.category} />
                          </td>
                          <td>
                            <TextBtnSameLength keyName={ticket.status} />
                          </td>
                          <td>
                            <TextBtnSameLength keyName={ticket.priority} />
                          </td>
                          <td>{ticket.timing}</td>
                          <td>{ticket.created}</td>
                          <td className="text-center">
                            <div className="mx-2 d-flex">
                              <ActionIconsBtn
                                title="Reply"
                                icon={<PiArrowBendUpLeftBold />}
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

export default Tickets;
