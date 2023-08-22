import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EntriesPerPage from "../../components/EntriesPerPage";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";

const FAQ1 = () => {
  const [data] = useState([
    {
      id: 1,
      title: "Information",
      description:
        "making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      action: "",
    },
    {
      id: 2,
      title: "Why do we use it?",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      action: "",
    },
    {
      id: 3,
      title: "Where does it come from?",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      action: "",
    },
    {
      id: 4,
      title: "Where can I get some?",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      action: "",
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
                title="FAQ"
                breadcrumb1="DAshboard"
                breadcrumb2="FAQ"
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
                    {filteredData.slice(0, entriesPerPage).map((faq) => (
                      <tr key={faq.id}>
                        <td className="ps-4 fw-bold" style={{ width: "40px" }}>
                          {faq.id}
                        </td>
                        <td style={{ minWidth: "300px" }}>{faq.title}</td>
                        <td style={{ maxWidth: "900px" }}>{faq.description}</td>
                        <td className="text-end ">
                          <div className="me-5 d-flex justify-content-center">
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
                  Showing 1 to {Math.min(data.length, entriesPerPage)} of{" "}
                  {data.length} entries
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ1;
