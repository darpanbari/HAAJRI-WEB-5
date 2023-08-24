import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { MdOutlineViewList } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import POSDashCard from "../../components/DashboardCardComponent/POSDashCard";
import MainCardComponent from "../../components/DashboardCardComponent/MainCardComponent";
import ProjectDashLineChart from "../../components/Charts/ProjectDashLineChart";
import TextBtnDiffLength from "../../components/IconButton/TextBtnDiffLength";
import ProjectDashPieChart from "../../components/Charts/ProjectDashPieChart";
import AccountingDashAreaChart from "../../components/Charts/AccountingDashAreaChart";
import { TbChartBar, TbChartPie, TbFileInvoice, TbHandFinger, TbNote, TbReportMoney, TbUsers } from "react-icons/tb";
import { PiNoteBlankLight } from "react-icons/pi";
import { Table } from "react-bootstrap";
import {
  bankData,
  expenseData,
  invoiceData,
  billData,
} from "../../api/accountingDashDatas";
import POSDashAreaChart from "../../components/Charts/POSDashAreaChart";

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
            <Breadcrumb title="Dashboard" breadcrumb1="POS" breadcrumb2="" />
          </div>
          <div className="mx-4">
            <Row>
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={12}
                className="support-dash-card"
              >
                <Row>
                  <POSDashCard
                    status="Sales Of This Month"
                    className="green-3"
                    quantity="$400"
                    quantColor="text-success"
                    icon={<TbHandFinger />}
                  />

                  <POSDashCard
                    status="Total Sales Amountl"
                    className="bg-info"
                    quantity="$16,030.0"
                    quantColor="text-info"
                    icon={<TbChartPie />}
                  />
                  <POSDashCard
                    status="Purchase Of This Month"
                    className="orange-2"
                    quantity="$0.0"
                    quantColor="text-warning"
                    icon={<TbReportMoney />}
                  />
                  <POSDashCard
                    status="Total Purchase Amount"
                    className="red-icon"
                    quantity="$1,756.6"
                    quantColor="text-danger"
                    icon={<TbChartBar />}
                  />
                </Row>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Purchase Sale Report"
                  // cardHeight="17rem"
                  content={<POSDashAreaChart />}
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
