import React from "react";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "../../components/Breadcrumb";
import HeaderSectionWithElements from "../../components/HeaderSectionWithElements/HeaderSectionWithElements";
import MainCardComponent from "../../components/DashboardCardComponent/MainCardComponent";
import SelectInputField from "../../components/Input&Buttons/SelectInputField";
import { sideNavBarDatas } from "../../api/sideNavBarDatas";

const AccessModule = () => {
  const selectedItems = sideNavBarDatas.filter((item) => {
    return (
      item.moduleName === "Dashboard" ||
      item.moduleName === "Accounting" ||
      item.moduleName === "HR Admin" ||
      item.moduleName === "Support Ticket" ||
      item.moduleName === "Report" ||
      item.moduleName === "Registrations"
    );
  });

  const handleCreateButtonClick = () => {
    const selectedData = selectedItems.map((item) => ({
      moduleName: item.moduleName,
      id: item.id,
      icon: item.icon,
      select: item.select,
      to: item.to,
      subModules: item.subModules

        .filter((subModule, index) => {
          const checkbox = document.getElementById(
            `module_${item.id}_${index}`
          );
          return checkbox && checkbox.checked;
        })
        .map((subModule) => subModule.moduleName),
    }));

    console.log(selectedData);
  };

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
              breadcrumb1="Access Module"
              breadcrumb2=""
            />
          </div>
          <div className="mx-4">
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12}>
                <MainCardComponent
                  title="Access Module"
                  // cardHeight="17rem"
                  content={
                    <>
                      <div className="text-start p-3">
                        <div className="border-bottom p-3">
                          <div>
                            <h6>Add Employee Access</h6>
                            <p className="text-muted font-size-14">
                              Fill the form below to Add Access
                            </p>
                          </div>

                          <div className="d-flex w-75">
                            <div className="w-50 me-3">
                              <SelectInputField
                                label="Select Location To Get User"
                                options={[
                                  { value: "", label: "Select Location" },
                                  { value: "Mumbai", label: "Mumbai" },
                                  { value: "Pune", label: "Pune" },
                                  { value: "Bangalore", label: "Bangalore" },
                                ]}
                                // selectedValue={selectedLocation}
                                // onSelect={(e) =>
                                //   setSelectedLocation(e.target.value)
                                // }
                              />
                            </div>
                            <div className="w-50">
                              <SelectInputField
                                label="Select User"
                                options={[
                                  { value: "", label: "Select User" },
                                  { value: "Darpan", label: "Darpan" },
                                  { value: "Himesh", label: "Himesh" },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex p-3 border-bottom">
                            {selectedItems.map((item) => {
                              return (
                                <div key={item.id} className=" pe-4">
                                  <h6>{item.moduleName}</h6>
                                  {item.subModules.map((subModule, index) => (
                                    <div key={index} className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`module_${item.id}_${index}`}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`module_${item.id}_${index}`}
                                      >
                                        {subModule.moduleName}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              );
                            })}
                          </div>
                          <div className="text-end m-3">
                            <button
                              type="submit"
                              className="btn green-2 text-white px-5 mx-2"
                              onClick={handleCreateButtonClick}
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
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

export default AccessModule;
