import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
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
import TextInputField from "../../components/Input&Buttons/TextInputField";

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

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    taxNumber: "",
    billingName: "",
    billingPhone: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingCountry: "",
    billingZipCode: "",
    shippingName: "",
    shippingPhone: "",
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingCountry: "",
    shippingZipCode: "",
    selectedValue: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSelectChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                     <div className="container">
                      <h6>Basic Info</h6>
                        <Form onSubmit={handleSubmit}>
                          <div className="d-flex">
                            <TextInputField
                              label="Name"
                              type="text"
                              placeholder="Enter Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="Contact"
                              type="text"
                              placeholder="Enter Contact"
                              value={formData.contact}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="Email"
                              type="email"
                              placeholder="Enter Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>
                          <div className="d-flex">
                          <TextInputField
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-50 me-3"
                          />

                          <TextInputField
                            label="Tax Number"
                            type="text"
                            placeholder="Enter Tax Number"
                            value={formData.taxNumber}
                            onChange={handleInputChange}
                            className="w-50"
                          />
                          </div>

                          <TextInputField
                            label="User Emails"
                            type="email"
                            placeholder="Enter User Emails"
                            value={formData.userEmails}
                            onChange={handleInputChange}
                            className="w-50 me-3"
                          />

                          {/* <SelectInputField
                            label="Select an option"
                            options={[
                              { value: "option1", label: "Option 1" },
                              { value: "option2", label: "Option 2" }
                            ]}
                            selectedValue={formData.selectedValue}
                            onSelect={handleSelectChange}
                            name="selectedValue"
                          /> */}

                          <h6 className="mt-4">Billing Address</h6>
                          <div className="d-flex">
                            <TextInputField
                              label="Name"
                              type="text"
                              placeholder="Enter Name"
                              value={formData.billingName}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="Phone"
                              type="text"
                              placeholder="Enter Phone"
                              value={formData.billingPhone}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>
                          <TextInputField
                            label="Address"
                            type="text"
                            placeholder="Enter Address"
                            value={formData.billingAddress}
                            onChange={handleInputChange}
                          />
                          <div className="d-flex">
                            <TextInputField
                              label="City"
                              type="text"
                              placeholder="Enter City"
                              value={formData.billingCity}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="State"
                              type="text"
                              placeholder="Enter State"
                              value={formData.billingState}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>
                          <div className="d-flex">
                            <TextInputField
                              label="Country"
                              type="text"
                              placeholder="Enter Country"
                              value={formData.billingCountry}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="Zip Code"
                              type="text"
                              placeholder="Enter Zip Code"
                              value={formData.billingZipCode}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>

                          <h6 className="mt-4">Shipping Address</h6>
                          <div className="d-flex">
                            <TextInputField
                              label="Name"
                              type="text"
                              placeholder="Enter Name"
                              value={formData.shippingName}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="Phone"
                              type="text"
                              placeholder="Enter Phone"
                              value={formData.shippingPhone}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>
                          <TextInputField
                            label="Address"
                            type="text"
                            placeholder="Enter Address"
                            value={formData.shippingAddress}
                            onChange={handleInputChange}
                           
                          />
                          <div className="d-flex">
                            <TextInputField
                              label="City"
                              type="text"
                              placeholder="Enter City"
                              value={formData.shippingCity}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="State"
                              type="text"
                              placeholder="Enter State"
                              value={formData.shippingState}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>
                          <div className="d-flex">
                            <TextInputField
                              label="Country"
                              type="text"
                              placeholder="Enter Country"
                              value={formData.shippingCountry}
                              onChange={handleInputChange}
                              className="w-50 me-3"
                            />
                            <TextInputField
                              label="Zip Code"
                              type="text"
                              placeholder="Enter Zip Code"
                              value={formData.shippingZipCode}
                              onChange={handleInputChange}
                              className="w-50"
                            />
                          </div>

                        </Form>
                      </div>
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
