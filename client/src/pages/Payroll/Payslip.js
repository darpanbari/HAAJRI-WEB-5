import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Table from "react-bootstrap/Table";
import SearchBtn from "../../components/SearchBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UseTooltip from "../../components/useTooltip";
import EntriesPerPage from "../../components/EntriesPerPage";
import PayslipModal from "../../components/PayslipModal";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import Breadcrumb from "../../components/Breadcrumb";
import moment from "moment";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";
import SortHeader from "../../components/SortHeader/SortHeader";
import TextBtn from "../../components/IconButton/TextBtn";
import TextBtnDiffLength from "../../components/IconButton/TextBtnDiffLength";

const Payslip = () => {
  const [data] = useState([
    {
      employeeId: "#EMP00001",
      name: "Richard Atkinson",
      payrollType: "Hourly Payslip",
      salary: "12000.0",
      netSalary: "127500.0",
      status: "Paid",
    },
    {
      employeeId: "#EMP00002",
      name: "Adria Blake",
      payrollType: "Yearly Payslip",
      salary: "110000.0",
      netSalary: "79377500.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00003",
      name: "Dale Gill",
      payrollType: "Monthly Payslip",
      salary: "43000.0",
      netSalary: "11754208.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00004",
      name: "Rebecca Shaffer",
      payrollType: "Weekly Payslip",
      salary: "10000.0",
      netSalary: "11336500.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00005",
      name: "Juli Shepherd",
      payrollType: "Hourly Payslip",
      salary: "500.0",
      netSalary: "4511858.0",
      status: "UnPaid",
    },
    {
      employeeId: "#EMP00006",
      name: "Clark Burton",
      payrollType: "Yearly Payslip",
      salary: "500000.0",
      netSalary: "1720596.0",
      status: "UnPaid",
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

  const [selectedPayslip, setSelectedPayslip] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (payslip) => {
    setSelectedPayslip(payslip);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayslip(null);
  };

  const months = moment.months();

  const currentYear = moment().year();
  const lastTenYears = Array.from(
    { length: 10 },
    (_, index) => currentYear - index
  );

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
                title="Manage Payslip"
                breadcrumb1="Dashboard"
                breadcrumb2="Payslip"
              />
            </div>
          </div>
          <div>
            <div className="border-4 py-4 mx-4 custom-border-radius custom-shadow bg-custom-white">
              <div className="d-flex payslip-top-container justify-content-end mx-4">
                <Row className="row justify-content-end ms-auto">
                  <Col
                    xxl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    style={{ width: "300px" }}
                  >
                    <SelectInputField
                      label="Select Month"
                      options={months.map((month, index) => ({
                        label: month,
                      }))}
                      className="p-2"
                    />
                  </Col>
                  <Col
                    xxl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    style={{ width: "300px" }}
                  >
                    <SelectInputField
                      label="Select Year"
                      options={lastTenYears.map((year) => ({
                        label: year,
                        value: year,
                      }))}
                      className="p-2"
                    />
                  </Col>
                </Row>
                <Row>
                  <div className="me-4 mt-4 pt-1 d-flex align-items-center text-end justify-content-end">
                    <button className="btn green-2 text-white">
                      Generate Payslip
                    </button>
                  </div>
                </Row>
              </div>
            </div>
          </div>

          <div>
            <div className="py-4 m-4 custom-border-radius bg-custom-white custom-shadow">
              <Row className="d-flex justify-content-between m-0 px-2 pt-0 pb-4 flex-row border-bottom">
                <Col>
                  <h6>Find Employee Payslip</h6>
                </Col>
                <Col xxl={3} lg={3} md={6} sm={12} style={{ width: "300px" }}>
                  <SelectInputField
                    label="Select Month"
                    options={months.map((month, index) => ({
                      value: month.toLowerCase(),
                      label: month,
                    }))}
                    className="p-2"
                  />
                </Col>
                <Col xxl={3} lg={3} md={6} sm={12} style={{ width: "300px" }}>
                  <SelectInputField
                    label="Select Year"
                    options={lastTenYears.map((year) => ({
                      label: year,
                      value: year,
                    }))}
                    className="p-2"
                  />
                </Col>
              </Row>

              <div className="scroller-div mt-4">
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
                          { label: "employeeId", className: "ms-3" },
                          { label: "name" },
                          { label: "payrollType" },
                          { label: "salary" },
                          { label: "netSalary" },
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
                      {filteredData
                        .slice(0, entriesPerPage)
                        .map((payslip, i) => (
                          <tr key={i}>
                            <td className="ps-4 fw-bold">
                              <button
                                type="button"
                                className="btn btn-outline-success font-size-14 py-2"
                              >
                                {payslip.employeeId}
                              </button>
                            </td>
                            <td>{payslip.name}</td>
                            <td>{payslip.payrollType}</td>
                            <td>{payslip.salary}</td>
                            <td>{payslip.netSalary}</td>

                            <td>
                              <TextBtnDiffLength keyName={payslip.status}/>
                              
                            </td>

                            <td style={{ width: "33%" }}>
                              <div className=" d-flex">
                                <TextBtn
                                  title="Payslip"
                                  className="orange-2"
                                  onClick={() => handleButtonClick(payslip)}
                                />
                                <PayslipModal
                                  showModal={showModal}
                                  onClose={handleCloseModal}
                                  selectedPayslip={selectedPayslip}
                                />
                                {payslip.status === "UnPaid" ? (
                                  <>
                                    <TextBtn
                                      title="Click To Paid"
                                      className="green-3"
                                    />
                                    <TextBtn title="Edit" className="sky-2" />
                                  </>
                                ) : (
                                  ""
                                )}
                                <TextBtn title=" Delete" className="red-icon" />
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

export default Payslip;
