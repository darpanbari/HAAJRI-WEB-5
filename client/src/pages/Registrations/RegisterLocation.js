import React, { useState } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import { Button, Form } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import UseTooltip from "../../components/useTooltip";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import TextInputField from "../../components/Input&Buttons/TextInputField";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";

const RegisterLocation = () => {
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleAddLocation = async (e) => {
    e.preventDefault();
    try {
      const locationData = {
        type: selectedType,
        name,
        city,
        state,
        latitude,
        longitude,
      };

      const response = await axios.post(
        "http://localhost:3030/location/add-location",
        locationData
      );

      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert("Location Creation Failed");
      }

      setSelectedType("");
      setName("");
      setCity("");
      setState("");
      setLatitude("");
      setLongitude("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
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
                title="Register Locations"
                breadcrumb1="Dashboard"
                breadcrumb2="Locations"
              />
            </div>
          </div>

          <Form className="my-form p-5 mx-4 form-input-width custom-border-radius mt-3 custom-shadow bg-custom-white">
            <Button className="btn green-2 shadow-sm mb-4 py-2 px-4 d-flex font-size-14 align-items-center border-0">
              <span className="d-flex align-items-center me-2">
                <AiFillPlusCircle />
              </span>
              <span>All Locations</span>
            </Button>
            <h6>Add Locations</h6>
            <p className="text-secondary font-size-12">
              Fill the form below to Add Locations Data
            </p>
            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <SelectInputField
                  label="Select Type"
                  options={[
                    { value: "Plant", label: "Plant" },
                    { value: "Office", label: "Office" },
                    { value: "Head Office", label: "Head Office" },
                  ]}
                  selectedValue={selectedType}
                  onSelect={(e) => setSelectedType(e.target.value)}
                  className="p-2"
                />
              </div>

              <div className="mb-3 w-50 me-3">
                <TextInputField
                  label="Enter Name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <TextInputField
                  label="Enter City"
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <SelectInputField
                  label="Select State"
                  options={[
                    { value: "Maharashtra", label: "Maharashtra" },
                    { value: "Daman", label: "Daman" },
                    { value: "Gujarat", label: "Gujarat" },
                  ]}
                  selectedValue={state}
                  onSelect={(e) => setState(e.target.value)}
                  className="p-2"
                />
              </div>

              <div className="mb-3 w-50 me-3">
                <TextInputField
                  label="Enter Latitude"
                  type="number"
                  placeholder="Enter latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <TextInputField
                  label="Enter Longitude"
                  type="number"
                  placeholder="Enter longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
            </div>
            <Button
              onClick={handleAddLocation}
              className="btn green-2 shadow-sm my-3 py-2 mx-auto px-4 d-flex font-size-14 align-items-center border-0"
            >
              <span className="d-flex align-items-center me-2">
                <AiFillPlusCircle />
              </span>
              <span>Add Locations</span>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterLocation;
