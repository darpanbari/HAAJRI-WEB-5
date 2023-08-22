import React, { useState } from "react";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import { Form } from "react-bootstrap";
import { GiArtificialIntelligence } from "react-icons/gi";
import DescriptionCustomization from "../components/DescriptionCustomization";
import Breadcrumb from "../components/Breadcrumb";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";

const CreateTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");
  const [attachment, setAttachment] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setCategory("");
    setStatus("");
    setSubject("");
    setAttachment("");
    setPriority("");
    setDescription("");
    console.log(
      name,
      email,
      category,
      status,
      subject,
      attachment,
      priority,
      description
    );
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

          <div className="d-flex flex-col2 justify-content-between ">
            <div className="mb-2">
              <Breadcrumb
                title="Create Tickets"
                breadcrumb1="Home"
                breadcrumb2="Create"
              />
            </div>
          </div>
          <Form className="my-form p-4 mx-4 custom-border-radius mt-3 mb-5 custom-shadow bg-custom-white">
            <div className="d-flex flex-col2 justify-content-between">
              <h4>Ticket Information</h4>
              <div className="">
                <button
                  className="btn btn-success d-flex align-items-center border-0 fw-bold"
                  style={{ backgroundColor: "#6FD943" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  <GiArtificialIntelligence className="fw-bold me-1 fs-5 text-white" />
                  Generate With AI
                </button>
              </div>
            </div>
            <hr />

            <div className="form-input-width">
              <div className="d-flex">
                <div className="mb-3 w-50 me-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="mb-3 w-50 me-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </Form.Select>
                </div>

                <div className="mb-3 w-50">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Select status</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </div>
              </div>

              <div className="d-flex">
                <div className="mb-3 w-50 me-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50">
                  <Form.Label>Attachment</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setAttachment(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="mb-3 w-50 me-3">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="">Select Priority</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </div>

              <div className="mb-3">
                <DescriptionCustomization />
              </div>
            </div>
            <div className="text-end pt-2">
              <button type="submit" className="btn bg-light-gray">
                Cancel
              </button>
              <button type="submit" className="btn green-2 text-white mx-2">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
