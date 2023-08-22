import React, { useState, useEffect } from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import UseTooltip from "../../components/useTooltip";
import { Table } from "react-bootstrap";
import axios from "axios";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import Breadcrumb from "../../components/Breadcrumb";

const AllLocations = () => {
  const [AllLocation, setAllLocation] = useState([]);

  const getAllLocation = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/location/get-location"
      );
      if (data) {
        setAllLocation(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLocation();
  }, []);

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
                title="All Locations"
                breadcrumb1="Dashboard"
                breadcrumb2="Locations"
              />
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 mb-4 bg-custom-white custom-border-radius px-4 custom-shadow scroller-div">
              <Table bordered hover className="depart-design-table ps-5 mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Location Name</th>
                    <th>Location Type</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>State</th>
                    <th>Active User</th>
                  </tr>
                </thead>
                <tbody>
                  {AllLocation.map((l, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{l.name}</td>
                      <td>{l.type}</td>
                      <td>{l.latitude}</td>
                      <td>{l.longitude}</td>
                      <td>{l.state}</td>
                      <td>456</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLocations;
