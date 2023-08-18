import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { PiCirclesFourBold } from "react-icons/pi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import SearchBtn from "../../components/SearchBtn";
import UseTooltip from "../../components/useTooltip.js";
import { TbEye } from "react-icons/tb";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EntriesPerPage from "../../components/EntriesPerPage.js";
import { Form } from "react-bootstrap";
import ModalComponent from "../../components/ModalComponent";
import SortHeaderLogic from "../../components/SortHeader/SortHeaderLogic";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderIconsBtn from "../../components/IconButton/HeaderIconsBtn";
import SortHeader from "../../components/SortHeader/SortHeader";
import ActionIconsBtn from "../../components/IconButton/ActionIconsBtn";

const Vendor = () => {
  const [data] = useState([
    {
      id: "#VEND00001",
      name: "Antikstion Grum",
      contact: "04893258663",
      email: "antgrumik30@example.com",
      balance: "$966,549.5",
    },
    {
      id: "#VEND00002",
      name: "Jennifer Ellison",
      contact: "04893212663",
      email: "jennifer@client.com",
      balance: "$-500.0",
    },
    {
      id: "#VEND00003",
      name: "Anne George",
      contact: "04893258663",
      email: "perani1567@3mkz.com",
      balance: "$14,897.5",
    },
    {
      id: "#VEND00004",
      name: "Ira Bradley",
      contact: "04893258663",
      email: "negefuricu@mailinator.com",
      balance: "$79,187.3",
    },
    {
      id: "#VEND00005",
      name: "Maia",
      contact: "04893258663",
      email: "maia@lodores.com",
      balance: "$24,403.0",
    },
    {
      name: "Kirsten Benson",
      email: "xizexamepa@mailinator.com",
      balance: "$0.0",
    },
    {
      name: "Abel Callahan",
      email: "tofagugowa@mailinator.com",
      balance: "$0.0",
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

          <div className="d-flex flex-col2 justify-content-between">
            <div className="mb-2">
              <Breadcrumb
                title="Manage Vendor"
                breadcrumb1="Home"
                breadcrumb2="Vendor"
              />
            </div>
            <div className="me-5 d-flex breadcrumb-rightside-btn">
              <HeaderIconsBtn title="Import" icon={<BsFileEarmarkPlus />} />
              <HeaderIconsBtn title="Grid View" icon={<PiCirclesFourBold />} />
              <div className="breadcrumb-rightside-btn d-flex">
                <ModalComponent
                  modalTitle="Add New Vendor"
                  modalWidth="custom-width-2"
                  modalContent={
                    <>
                      <Form>
                        <h6>Basic Info</h6>
                        <div className="d-flex">
                          <Form.Group controlId="name" className="me-3 w-50">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Enter Name"
                            />
                          </Form.Group>
                          <Form.Group controlId="contact" className="me-3 w-50">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                              type="text"
                              name="contact"
                              placeholder="Enter Contact"
                            />
                          </Form.Group>
                          <Form.Group controlId="email" className="w-50">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                            />
                          </Form.Group>
                        </div>
                        <div className="d-flex">
                          <Form.Group
                            controlId="password"
                            className="w-50 me-3"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder="Enter Password"
                            />
                          </Form.Group>
                          <Form.Group controlId="taxNumber" className="w-50">
                            <Form.Label>Tax Number</Form.Label>
                            <Form.Control
                              type="text"
                              name="taxNumber"
                              placeholder="Enter Tax Number"
                            />
                          </Form.Group>
                        </div>
                        <Form.Group controlId="taxNumber" className="w-50">
                          <Form.Label>User Emails</Form.Label>
                          <Form.Control type="email" name="taxNumber" />
                        </Form.Group>

                        <h6 className="mt-4">Billing Address</h6>
                        <div className="d-flex">
                          <Form.Group
                            controlId="billingName"
                            className="w-50 me-3"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingName"
                              placeholder="Enter Name"
                            />
                          </Form.Group>
                          <Form.Group controlId="billingPhone" className="w-50">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingPhone"
                              placeholder="Enter Phone"
                            />
                          </Form.Group>
                        </div>
                        <Form.Group controlId="billingAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            name="billingAddress"
                            placeholder="Enter Address"
                          />
                        </Form.Group>
                        <div className="d-flex">
                          <Form.Group
                            controlId="billingCity"
                            className="w-50 me-3"
                          >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingCity"
                              placeholder="Enter City"
                            />
                          </Form.Group>
                          <Form.Group controlId="billingState" className="w-50">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingState"
                              placeholder="Enter State"
                            />
                          </Form.Group>
                        </div>
                        <div className="d-flex">
                          <Form.Group
                            controlId="billingCountry"
                            className="w-50 me-3"
                          >
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingCountry"
                              placeholder="Enter Country"
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="billingZipCode"
                            className="w-50"
                          >
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingZipCode"
                              placeholder="Enter Zip Code"
                            />
                          </Form.Group>
                        </div>

                        <h6 className="mt-4">Shipping Address</h6>
                        <div className="d-flex">
                          <Form.Group
                            controlId="billingName"
                            className="w-50 me-3"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingName"
                              placeholder="Enter Name"
                            />
                          </Form.Group>
                          <Form.Group controlId="billingPhone" className="w-50">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingPhone"
                              placeholder="Enter Phone"
                            />
                          </Form.Group>
                        </div>
                        <Form.Group controlId="billingAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            name="billingAddress"
                            placeholder="Enter Address"
                          />
                        </Form.Group>
                        <div className="d-flex">
                          <Form.Group
                            controlId="billingCity"
                            className="w-50 me-3"
                          >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingCity"
                              placeholder="Enter City"
                            />
                          </Form.Group>
                          <Form.Group controlId="billingState" className="w-50">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingState"
                              placeholder="Enter State"
                            />
                          </Form.Group>
                        </div>
                        <div className="d-flex">
                          <Form.Group
                            controlId="billingCountry"
                            className="w-50 me-3"
                          >
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingCountry"
                              placeholder="Enter Country"
                            />
                          </Form.Group>
                          <Form.Group
                            controlId="billingZipCode"
                            className="w-50"
                          >
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                              type="text"
                              name="billingZipCode"
                              placeholder="Enter Zip Code"
                            />
                          </Form.Group>
                        </div>
                      </Form>
                    </>
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <div className="border-4 py-4 bg-custom-white mx-4 mb-4 custom-border-radius custom-shadow scroller-div">
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
                          { label: "id", className:"ms-3" },
                          { label: "name" },
                          { label: "contact" },
                          { label: "email" },
                          { label: "balance" },
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
                        .map((ticket, i) => (
                          <tr key={i}>
                            <td className="text-start ps-4 fw-bold">
                              {ticket.id ? (
                                <button
                                  type="button"
                                  className="btn btn-outline-success font-size-14 py-2"
                                >
                                  {ticket.id}
                                </button>
                              ) : (
                                `--`
                              )}
                            </td>
                            <td>{ticket.name}</td>
                            <td>{ticket.contact}</td>
                            <td>{ticket.email}</td>

                            <td>{ticket.balance}</td>
                            <td className="text-center">
                              {ticket.id ? (
                                <div className="mx-2 d-flex justify-content-center">
                                  <ActionIconsBtn
                                    title="View"
                                    icon={<TbEye />}
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
                              ) : (
                                <div className="mx-2 d-flex justify-content-center">
                                  <ActionIconsBtn
                                    title="Edit"
                                    icon={<BiSolidEdit />}
                                    className=" bg-sky-2"
                                  />
                                </div>
                              )}
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

export default Vendor;
