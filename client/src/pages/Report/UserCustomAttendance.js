import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import LineChart from "../../components/User-CustomAttendance-Chart";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import Breadcrumb from "../../components/Breadcrumb";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const UserCustomAttendance = () => {
  const initialData = [
    {
      id: 1,
      employeeId: "1001",
      name: "Darpan",
      Date: "01-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 2,
      employeeId: "1005",
      name: "Abhishek",
      Date: "02-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 3,
      employeeId: "1001",
      name: "Darpan",
      Date: "03-08-2023",
      Location: "Mumbai",
      InTime: "11:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "7:40:56",
      Status: "FD",
    },
    {
      id: 4,
      employeeId: "1005",
      name: "Abhishek",
      Date: "05-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 5,
      employeeId: "1001",
      name: "Darpan",
      Date: "05-08-2023",
      Location: "Pune",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 6,
      employeeId: "1001",
      name: "Darpan",
      Date: "06-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 7,
      employeeId: "1001",
      name: "Darpan",
      Date: "07-08-2023",
      Location: "Pune",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 8,
      employeeId: "1005",
      name: "Abhishek",
      Date: "07-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
    {
      id: 9,
      employeeId: "1001",
      name: "Darpan",
      Date: "10-08-2023",
      Location: "Mumbai",
      InTime: "10:10",
      InLocation: "Bhayandar,Mumbai",
      OutTime: "19:30",
      OutLocation: "Bhayandar,Mumbai",
      Hours: "8:40:56",
      Status: "FD",
    },
  ];

  const [data] = useState(initialData);
  const [filteredData, setFilteredData] = useState([]);
  const [location, setLocation] = useState("");
  const [userName, setUserName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleGetData = () => {
    const formattedData = data.map((item) => ({
      ...item,
      Date: new Date(item.Date.split("-").reverse().join("-")),
    }));

    const newData = formattedData.filter((item) => {
      const itemDate = new Date(item.Date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);

      const condition =
        item.Location === location &&
        item.name === userName &&
        itemDate >= fromDateObj &&
        itemDate <= toDateObj;

      return condition;
    });

    setFilteredData(newData);
  };

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
                title="User Custom Attendance"
                breadcrumb1="Home"
                breadcrumb2="Custom Attendance"
              />
            </div>
          </div>

          <Form
            className="my-form mx-4 form-input-width custom-border-radius custom-shadow bg-custom-white"
            style={{ padding: "30px" }}
          >
            <h6>Add Employee Photo</h6>
            <p className="text-secondary font-size-12">
              Fill the form below to Add Employee Photo
            </p>
            <Row>
              <Col md={6} className="mb-3">
                <div className="d-flex">
                  <div className="w-50 mb-3 me-3">
                    <SelectInputField
                      options={[
                        { value: "Mumbai", label: "Mumbai" },
                        { value: "Pune", label: "Pune" },
                        { value: "Bangalore", label: "Bangalore" },
                      ]}
                      selectedValue={location}
                      onSelect={(e) => setLocation(e.target.value)}
                      className="p-2"
                    />
                  </div>
                  <div className="w-50 mb-3">
                    <SelectInputField
                      options={[
                        { value: "Abhishek", label: "Abhishek" },
                        { value: "Darpan", label: "Darpan" },
                        { value: "Himesh", label: "Himesh" },
                      ]}
                      selectedValue={userName}
                      onSelect={(e) => setUserName(e.target.value)}
                      className="p-2"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="w-50 mb-3 me-3">
                    <TextInputField
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>

                  <div className="w-50 mb-3">
                    <TextInputField
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleGetData}
                  className="btn green-2 shadow-sm my-0 py-2 ms-auto px-5 d-flex font-size-14 align-items-center border-0"
                >
                  <span className="d-flex align-items-center me-2">
                    <AiFillPlusCircle />
                  </span>
                  <span>Get</span>
                </Button>
              </Col>
              <Col md={6}>
                {filteredData.length > 0 ? (
                  <Card className="w-100 green-2 h-100 border-0 me-4">
                    <Card.Body className="p-4 text-white">
                      <div className="mx-2">
                        <h6 className="my-2">{filteredData[0].name}</h6>
                      </div>
                      <div className="d-flex mt-3">
                        <div className="mx-2">
                          <h6 className="mb-0">{filteredData[0].employeeId}</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Employee ID
                          </p>
                        </div>
                        <div className="mx-2">
                          <h6 className="mb-0">{filteredData[0].Status}</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Status
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ) : (
                  <Card className="w-100 green-2 h-100 border-0 me-4">
                    <Card.Body className="p-4 text-white">
                      <div className="mx-2">
                        <h6 className="my-2">_name_</h6>
                      </div>
                      <div className="d-flex mt-3">
                        <div className="mx-2">
                          <h6 className="mb-0">_id_</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Employee ID
                          </p>
                        </div>
                        <div className="mx-2">
                          <h6 className="mb-0">_status_</h6>
                          <p className="mb-0 font-size-14 text-light-gray2">
                            Status
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>

            <Row className="my-4 d-flex flex-nowrap">
              <Col md={6} className="mb-3" style={{ height: "400px" }}>
                <div className="custom-shadow bg-custom-white">
                  <div
                    className="px-3"
                    style={{ height: "400px", overflowY: "auto" }}
                  >
                    <Table bordered hover className="depart-design-table my-3">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>In-Time</th>
                          <th>In-Location</th>
                          <th>Out-Time</th>
                          <th>Out-Location</th>
                          <th>Hours</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((UC, i) => (
                          <tr key={i}>
                            <td>{UC.id}</td>
                            <td>{UC.Date.toLocaleDateString()}</td>
                            <td>{UC.Location}</td>
                            <td>{UC.InTime}</td>
                            <td>{UC.InLocation}</td>
                            <td>{UC.OutTime}</td>
                            <td>{UC.OutLocation}</td>
                            <td>{UC.Hours}</td>
                            <td>{UC.Status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
              <Col md={6} className="" style={{ height: "400px" }}>
                <div className="custom-shadow bg-custom-white pt-3 pb-4">
                  <div className=" border bg-light mx-3">
                    <h6 className="p-2">User Date VS Hours Attendance</h6>
                    <LineChart data={filteredData} />
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UserCustomAttendance;
