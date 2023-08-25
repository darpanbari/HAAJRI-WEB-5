import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { MdOutlineViewList } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SupportDashCards from "../../components/DashboardCardComponent/SupportDashCards";
import MainCardComponent from "../../components/DashboardCardComponent/MainCardComponent";
import ProjectDashLineChart from "../../components/Charts/ProjectDashLineChart";
import TextBtnDiffLength from "../../components/IconButton/TextBtnDiffLength";
import ProjectDashPieChart from "../../components/Charts/ProjectDashPieChart";
import AccountingDashAreaChart from "../../components/Charts/AccountingDashAreaChart";
import ProgressBar from "react-bootstrap/ProgressBar";

import {
  TbChartBar,
  TbFileInvoice,
  TbNote,
  TbReportMoney,
  TbUsers,
} from "react-icons/tb";
import { PiNoteBlankLight } from "react-icons/pi";
import { Table } from "react-bootstrap";
import {
  bankData,
  expenseData,
  invoiceData,
  billData,
  weeklyInvoicesData,
  goalsData,
} from "../../api/accountingDashDatas";
import AccountingDashCard from "../../components/DashboardCardComponent/AccountingDashCard";
import GenerateWithAiBtn from "../../components/GenerateWithAiBtn";

const AccountingDashboard = () => {
  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <HeaderSectionWithElements />
          {/* Top Header End*/}

          <div className="mb-2">
            <Breadcrumb
              title="Dashboard"
              breadcrumb1="Dashboard"
              breadcrumb2="Accounting"
            />
          </div>
          <div className="mx-4">
            <Row>
              <Col
                xxl={7}
                xl={12}
                lg={12}
                md={12}
                className="support-dash-card"
              >
                <Row>
                  <SupportDashCards
                    title="Customers"
                    status="Total"
                    className="green-3"
                    quantity="3"
                    icon={<TbUsers />}
                  />

                  <SupportDashCards
                    title="Vendor"
                    status="Total"
                    className="bg-info"
                    quantity="3"
                    icon={<TbNote />}
                  />
                  <SupportDashCards
                    title="Invoices"
                    status="Total"
                    className="orange-2"
                    quantity="5"
                    icon={<TbFileInvoice />}
                  />
                  <SupportDashCards
                    title="Bills"
                    status="Total"
                    className="red-icon"
                    quantity="8"
                    icon={<TbReportMoney />}
                  />
                </Row>

                <MainCardComponent
                  title="Account Balance"
                  content={
                    <div>
                      <Table hover className="font-size-14 text-start">
                        <thead className="table-head">
                          <tr>
                            <th className="ps-3">BANK</th>
                            <th>HOLDER NAME</th>
                            <th>BALANCE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bankData.map((row, index) => (
                            <tr key={index}>
                              <td className="p-3">{row.BANK}</td>
                              <td className="p-3">{row.HOLDER_NAME}</td>
                              <td className="p-3">{row.BALANCE}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  }
                />
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Cashflow"
                  // cardHeight="17rem"
                  content={<AccountingDashAreaChart />}
                />
                <MainCardComponent
                  title="Income Vs Expense"
                  cardHeight="18.2rem"
                  content={
                    <Row className="d-flex px-3 py-5">
                      <AccountingDashCard
                        status="Sales Of This Month"
                        className="green-3"
                        quantity="$400"
                        quantColor="text-success"
                        icon={<TbReportMoney />}
                      />

                      <AccountingDashCard
                        status="Total Sales Amountl"
                        className="bg-info"
                        quantity="$16,030.0"
                        quantColor="text-info"
                        icon={<TbReportMoney />}
                      />
                      <AccountingDashCard
                        status="Purchase Of This Month"
                        className="orange-2"
                        quantity="$0.0"
                        quantColor="text-warning"
                        icon={<TbChartBar />}
                      />
                      <AccountingDashCard
                        status="Total Purchase Amount"
                        className="red-icon"
                        quantity="$1,756.6"
                        quantColor="text-danger"
                        icon={<TbChartBar />}
                      />
                    </Row>
                  }
                />
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Latest Expense"
                  content={
                    <div>
                      <Table hover className="font-size-14 text-start">
                        <thead className="table-head">
                          <tr>
                            <th className="ps-3">DATE</th>
                            <th>CUSTOMER</th>
                            <th>AMOUNT DUE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {expenseData.map((row, index) => (
                            <tr key={index}>
                              <td className="p-3">{row.DATE}</td>
                              <td className="p-3">--</td>
                              <td className="p-3">{row.BALANCE}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  }
                />
              </Col>
              <Col xxl={7} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Recent Invoices"
                  content={
                    <div>
                      <Table hover className="font-size-14 text-start">
                        <thead className="table-head">
                          <tr>
                            <th className="ps-3">#</th>
                            <th>CUSTOMER</th>
                            <th>ISSUE DATE</th>
                            <th>DUE DATE</th>
                            <th>AMOUNT</th>
                            <th>STATUS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.map((invoice, index) => (
                            <tr key={index}>
                              <td className="p-3 align-middle">{invoice.ID}</td>
                              <td className="align-middle">
                                {invoice.CUSTOMER}
                              </td>
                              <td className="align-middle">
                                {invoice.ISSUE_DATE}
                              </td>
                              <td className="align-middle">
                                {invoice.DUE_DATE}
                              </td>
                              <td className="align-middle">{invoice.AMOUNT}</td>
                              <td className="align-middle p-3">
                                <TextBtnDiffLength keyName={invoice.STATUS} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  }
                />
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                  cardHeight="22.8rem"
                  title={
                    <>
                      <button
                        className="btn btn-success font-size-15 d-flex align-items-center green-2 border-0"
                        type="submit"
                      >
                        Invoices Weekly Statistics
                      </button>
                    </>
                  }
                  content={
                    <div className="table-responsive">
                      <table className="table table-centered table-hover">
                        <tbody className="font-size-14">
                          {weeklyInvoicesData.map((project, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td className="text-start ps-4">
                                  <h6 className="mb-0">Total</h6>
                                  <p className="text-muted text-sm mb-0">
                                    {project.Total}
                                  </p>
                                </td>
                                <td className="text-start">
                                  <h5 className="text-muted">
                                    {project.Amount}
                                  </h5>
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  }
                />
              </Col>

              <Col xxl={7} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Recent Bills"
                  content={
                    <div>
                      <Table hover className="font-size-14 text-start">
                        <thead className="table-head">
                          <tr>
                            <th className="ps-3">#</th>
                            <th>VENDOR</th>
                            <th>BILL DATE</th>
                            <th>DUE DATE</th>
                            <th>AMOUNT</th>
                            <th>STATUS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {billData.map((bill, index) => (
                            <tr key={index} className="">
                              <td className="p-3 align-middle">{bill.ID}</td>
                              <td className="align-middle">{bill.VENDOR}</td>
                              <td className="align-middle">{bill.BILL_DATE}</td>
                              <td className="align-middle">{bill.DUE_DATE}</td>
                              <td className="align-middle">{bill.AMOUNT}</td>
                              <td className="p-3 align-middle">
                                <TextBtnDiffLength keyName={bill.STATUS} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  }
                />
              </Col>
              <Col xxl={5} xl={12} lg={12} md={12}>
                <MainCardComponent
                  cardHeight="26.5rem"
                  title={
                    <>
                      <button
                        className="btn btn-success font-size-15 d-flex align-items-center green-2 border-0"
                        type="submit"
                      >
                        Bills Weekly Statistics
                      </button>
                    </>
                  }
                  content={
                    <div className="table-responsive">
                      <table className="table table-centered table-hover">
                        <tbody className="font-size-14">
                          {weeklyInvoicesData.map((project, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td className="text-start ps-4">
                                  <h6 className="mb-0">Total</h6>
                                  <p className="text-muted mb-0">
                                    {project.Total}
                                  </p>
                                </td>
                                <td className="text-start">
                                  <h5 className="text-muted">
                                    {project.Amount}
                                  </h5>
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  }
                />
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Goal"
                  content={
                    <div className="table-responsive">
                      <div className="font-size-14">
                        {goalsData.map((goal, index) => (
                          <div
                            key={index}
                            className="bg-custom-white font-size-14 text-start border-0 custom-shadow custom-border-radius d-flex m-4 "
                            style={{ padding: "35px 25px" }}
                          >
                            <div className="w-100 ">
                              <span className="mb-0">Name</span>
                              <h6 className="text-muted text-sm mb-0">
                                {goal.name}
                              </h6>
                            </div>
                            <div className="w-100 ">
                              <span className="mb-0">Type</span>
                              <h6 className="mb-0">{goal.type}</h6>
                            </div>
                            <div className="w-100 ">
                              <span className="mb-0">Duration</span>
                              <h6 className="mb-0">{`${goal.duration.start} to ${goal.duration.end}`}</h6>
                            </div>
                            <div className="w-100 ">
                              <span className="mb-0">Target</span>
                              <h6 className="mb-0">{goal.target}</h6>
                            </div>
                            <div className="w-100">
                              <span className="mb-0">Progress</span>
                              <h6 className="mb-0">{`${goal.progress}%`}</h6>
                              <ProgressBar
                                variant="success"
                                now={goal.progress}
                                visuallyHidden
                                className="shadow"
                                style={{
                                  height: "7px",
                                  backgroundColor: "#E8EBF8",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />
              </Col>
            </Row>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountingDashboard;
