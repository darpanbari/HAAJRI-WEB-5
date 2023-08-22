import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFileEarmarkPlus } from "react-icons/bs";
import SearchBtn from "../../components/SearchBtn";
import { TbVectorBezier } from "react-icons/tb";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderIconsBtn from "../../components/IconButton/HeaderIconsBtn";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";

const KnowledgeBase = () => {
  const [data] = useState([
    {
      id: 1,
      title: "How to Create a new Database",
      description:
        "McClintock's 15th century claims:Whether a medieval typesetter chose to garble a well-known.Survived not only four centuries of letter-by-letter resetting.",
      category: "Basic Usage",
    },
    {
      id: 2,
      title: "Best Format for Logo to Upload",
      description:
        "McClintock's 15th century claims:Whether a medieval typesetter chose to garble a well-known.",
      category: "Installation",
    },
    {
      id: 3,
      title: "Users Live System Notifications",
      description:
        "McClintock's 15th century claims: The 1914 Loeb Classical Library Edition ran out of room on page. Survived not only four centuries of letter-by-letter resetting. Survived not only four centuries of letter-by-letter resetting.",
      category: "Basic Usage",
    },
    {
      id: 4,
      title: "Tickets Files Attachment Support",
      description:
        "Whether a medieval typesetter chose to garble a well-known.",
      category: "Google reCaptcha",
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

          <div className="d-flex flex-col2 justify-content-between ">
            <div className="mb-2">
              <Breadcrumb
                title="Knowledge Base"
                breadcrumb1="Home"
                breadcrumb2="Knowledge Base"
              />
            </div>
            <div className="me-5 d-flex breadcrumb-rightside-btn">
              <HeaderIconsBtn title="Import" icon={<BsFileEarmarkPlus />} />
              <HeaderIconsBtn title="Create" icon={<AiOutlinePlus />} />
              <HeaderIconsBtn
                title="Knowledge Category"
                icon={<TbVectorBezier />}
              />
            </div>
          </div>
          <div>
            <div className="border-4 py-4 mx-4 custom-shadow custom-border-radius bg-custom-white scroller-div">
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
                  <thead>
                    <tr className="table-head">
                      {[
                        { label: "id", className: "ms-3" },
                        { label: "title" },
                        { label: "description" },
                        { label: "category" },
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
                    {filteredData.slice(0, entriesPerPage).map((know) => (
                      <tr key={know.id}>
                        <td className="ps-4 fw-bold" style={{ width: "40px" }}>
                          {know.id}
                        </td>
                        <td style={{ maxWidth: "350px" }}>{know.title}</td>
                        <td style={{ maxWidth: "600px" }}>
                          {know.description}
                        </td>
                        <td style={{}}>{know.category}</td>
                        <td className="text-end ">
                          <div className="ms-auto justify-content-center d-flex">
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
                  Showing 1 to {Math.min(filteredData.length, entriesPerPage)}{" "}
                  of {filteredData.length} entries
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgeBase;
