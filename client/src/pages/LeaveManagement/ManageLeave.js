import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import EntriesPerPage from "../../components/EntriesPerPage";
import { BsPlay } from "react-icons/bs";
import ModalComponent from "../../components/ModalComponent";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import Breadcrumb from "../../components/Breadcrumb";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";
import TextBtnDiffLength from "../../components/IconButton/TextBtnDiffLength";
import TextAreaField from "../../components/Input&Buttons/TextAreaField";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const ManageLeave = () => {
  const [data] = useState([
    {
      employee: "Juli Shepherd",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "23-08-2023",
      enddate: "26-08-2023",
      totaldays: "4",
      leavereason: "Optio eiusmod in cu",
      status: "Reject",
    },
    {
      employee: "Chloe Humphrey",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "20-06-2023",
      enddate: "24-06-2023",
      totaldays: "5",
      leavereason: "Laboriosam perspici",
      status: "Approved",
    },
    {
      employee: "August Mclaughlin",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "01-06-2023",
      enddate: "03-06-2023",
      totaldays: "3",
      leavereason: "Sit laboriosam eaq",
      status: "Pending",
    },
    {
      employee: "Joseph Fiennes",
      leavetype: "Medical Leave",
      appliedon: "19-05-2023",
      startdate: "23-05-2023",
      enddate: "26-05-2023",
      totaldays: "4",
      leavereason: "Emergency medical procedure",
      status: "Approved",
    },
    {
      employee: "Richard Atkinson",
      leavetype: "Casual Leave",
      appliedon: "19-05-2023",
      startdate: "20-05-2023",
      enddate: "26-05-2023",
      totaldays: "7",
      leavereason: "Emergency medical procedure",
      status: "Pending",
    },
  ]);

  const [formData, setFormData] = useState({
    employee: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    leaveReason: "",
    remark: "",
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
                title="Manage Leave"
                breadcrumb1="Home"
                breadcrumb2="Leave"
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
                          label="Employee"
                          options={[
                            { value: "richard", label: "Richard" },
                            { value: "employee2", label: "Employee2" },
                          ]}
                          selectedValue={formData.employee}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3 w-100 px-2">
                        <SelectInputField
                          label="Leave Type"
                          options={[
                            { value: "casual", label: "Casual Leave (7)" },
                            { value: "medical", label: "Medical Leave (5)" },
                          ]}
                          selectedValue={formData.leaveType}
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
                        <TextAreaField
                          label="Leave Reason"
                          value={formData.leaveReason}
                          onChange={handleInputChange}
                          placeholder="Leave Reason"
                        />
                      </div>

                      <div className="mb-3 mx-2">
                        <TextAreaField
                          label="Remark"
                          value={formData.remark}
                          onChange={handleInputChange}
                          placeholder="Leave Remark"
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
                          { label: "employee", className: "ms-3" },
                          { label: "leavetype" },
                          { label: "appliedon" },
                          { label: "startdate" },
                          { label: "enddate" },
                          { label: "totaldays" },
                          { label: "leavereason" },
                          { label: "status" },
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
                      {filteredData.slice(0, entriesPerPage).map((m, i) => (
                        <tr key={i}>
                          <td className="ps-4">{m.employee}</td>
                          <td>{m.leavetype}</td>
                          <td>{m.appliedon}</td>
                          <td>{m.startdate}</td>
                          <td>{m.enddate}</td>
                          <td>{m.totaldays}</td>
                          <td className="pb-4">{m.leavereason}</td>
                          <td>
                            <TextBtnDiffLength keyName={m.status} />
                          </td>
                          <td>
                            <div className="mx-2 d-flex justify-content-start">
                              <ActionIconsBtn
                                title="Leave Action"
                                icon={<BsPlay />}
                                className="me-2 green-3"
                              />
                              {m.status === "Pending" ? (
                                <>
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
                                </>
                              ) : (
                                ""
                              )}
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

export default ManageLeave;
