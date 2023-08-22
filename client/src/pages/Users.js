import React, { useState } from "react";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import { Table } from "react-bootstrap";
import { RiDeleteBin5Line, RiKey2Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../components/SearchBtn";
import { BiSolidEdit } from "react-icons/bi";
import UseTooltip from "../components/useTooltip.js";
import EntriesPerPage from "../components/EntriesPerPage";
import Breadcrumb from "../components/Breadcrumb";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeader from "../components/SortHeader/SortHeader";
import SortHeaderLogic from "../components/SortHeader/SortHeaderLogic";
import ActionIconsBtn from "../components/IconButton/ActionIconsBtn";
import HeaderIconsBtn from "../components/IconButton/HeaderIconsBtn";
import TextBtnSameLength from "../components/IconButton/TextBtnSameLength";

const Users = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Agent",
      email: "agent@example.com",
      category: ["Support", "Questions", "Bug"],
      role: "Agent",
    },
    {
      id: 2,
      name: "Virginia Wilkerson",
      email: "xiriqyhy@mailinator.com",
      category: ["Support", "New Installation"],
      role: "Agent",
    },
    {
      id: 3,
      name: "Cyrus Bailey",
      email: "sakinecig@mailinator.com",
      category: ["Support", "Bug"],
      role: "Agent",
    },
    {
      id: 4,
      name: "Jayme Keller",
      email: "tety@mallinator.com",
      category: ["Support", "Questions", "New Installation"],
      role: "Agent",
    },
    {
      id: 5,
      name: "Derek Rollins",
      email: "xiwisero@mallinator.com",
      category: ["Questions"],
      role: "Agent",
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
              title="Manage Users"
              breadcrumb1="Home"
              breadcrumb2="Users"
            />
          </div>
          <div className="me-5 d-flex breadcrumb-rightside-btn">
            <HeaderIconsBtn
              title="Create User"
              icon={<AiOutlinePlus />}
            />
          </div>
       
        </div>

        <div className="mx-4 mb-4 py-4 custom-border-radius custom-shadow bg-custom-white scroller-div">
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

            <Table responsive>
              <thead>
                <tr className="table-head">
                  {[
                    { label: "id", className: "ms-2" },
                    { label: "picture" },
                    { label: "name" },
                    { label: "email" },
                    { label: "category" },
                    { label: "role" },
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
                {filteredData.slice(0, entriesPerPage).map((row) => (
                  <tr key={row.id}>
                    <td className="text-center fw-bold">{row.id}</td>
                    <td className="ps-4">
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="user1.png"
                          alt="img"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>
                      <div className="me-5">
                        {row.category.map((category) => (
                          <TextBtnSameLength key={category} keyName={category} className="me-2"/> 
                        ))}         
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn green-2 text-white px-0 border-0 px-3 agent"
                        style={{
                          background: "#6FD943 !important",
                          borderRadius: "13px",
                        }}
                      >
                        {row.role}
                      </button>
                    </td>
                    <td className="text-center">
                      <div className="mx-2 d-flex justify-content-center">
                        <ActionIconsBtn
                          title="Reset Password"
                          icon={<RiKey2Fill />}
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
            <p className="p-4">
              Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
              {data.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
