import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TextInputField from "../components/Input&Buttons/TextInputField";
import SelectInputField from "../components/Input&Buttons/SelectInputField";
import ButtonComponent from "../components/Input&Buttons/ButtonComponent";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("english");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
  };

  return (
    <>
      <div className=" position-relative">
        <div className="d-flex justify-content-center align-items-center">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-white w-75 mx-auto position-absolute custom-border-radius custom-shadow py-1 px-2"
            style={{
              top: "3.5%",
            }}
          >
            <Navbar.Brand
              href="#home"
              className="green-1 fw-bold fs-3 pe-2 pb-0 mb-2"
            >
              H A A J R I
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav2"
              className="navbar-toggler2"
            />
            <Navbar.Collapse id="responsive-navbar-nav2" className="me-3">
              <Nav className="me-auto"></Nav>
              <Nav>
              
                <Nav.Link href="/faq" className="my-auto green-1 fw-600 text-center">
                  FAQ
                </Nav.Link>
               
                <SelectInputField
                  // label="Language"
                  options={[
                    { value: "english", label: "English" },
                    { value: "spanish", label: "Spanish" },
                    { value: "french", label: "French" },
                    { value: "german", label: "German" },
                  ]}
                  selectedValue={selectedValue}
                  onSelect={(e) => setSelectedValue(e.target.value)}
                  className="green-2 ms-2 px-5 text-white text-center py-2 me-3"
                />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div> 
          {/* style={{ overflow: "hidden" }} */}
          <Row className="p-0 m-0" style={{ background: "#F9FBFA" }}>
            {/* left container */}
            <Col
              className="d-flex flex-column justify-content-center p-0"
              lg={{ span: 6 }}
              md={{ span: 12 }}
              style={{ height: "100vh", overflowY: "auto" }}
            >
              <Form
                className="mx-auto loginForm-margin"
                style={{ width: "320px" }}
                onSubmit={handleLogin}
              >
                <h3 className="">Login</h3>
                <TextInputField
                  label="Email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextInputField
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted font-size-12">
                  Forgot password?
                </Form.Text>

                <ButtonComponent
                  text="Login"
                  href="/dashboard/sales-dashboard"
                  className="mb-1 mt-3 py-2 w-100"
                />
                {/* <div className="d-flex my-3">
                  <ButtonComponent
                    text="Admin Login"
                    href="/dashboard/sales-dashboard"
                    className="me-2 font-size-12 "
                    style={{ padding: "10px 0px", width:"152px" }}
                  />
                  <ButtonComponent
                    text="Super Admin Login"
                    href="/dashboard/sales-dashboard"
                    className="ms-2 font-size-12"
                    style={{ padding: "10px 0px", width:"152px" }}
                  />
                </div> */}
              </Form>
            </Col>

            {/* right container*/}
            <Col
              className="d-flex login-right-container justify-content-center align-items-center mx-auto my-3"
              lg={{ span: 6 }}
              md={{ span: 12 }}
            >
              <div className="green-2 h-100 w-100 rounded-4 d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img src="back.png" alt="img" />
                </div>
                <div className="text-center w-75">
                  <h3 className="text-white">
                    "Attention is the new currency"
                  </h3>
                  <p className="text-white">
                    The more effortless the writing looks, the more effort the
                    writer actually put into the process.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <p
            className="mx-auto copyright text-secondary position-absolute"
            style={{ bottom: "40px", left: "270px" }}
          >
            @Copyright HAAJRI 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
