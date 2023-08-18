import React from "react";
import AdminProfileLogout from "../AdminProfileLogout";
import HeaderMessageBox from "../HeaderMessageBox";
import TopHeaderModal from "../CreateWorkspace";
import AdminSelectBtn from "../AdminInfotechBtn";
import LanguageBtn from "../LanguageBtn";

const HeaderSectionWithElements = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className=" my-auto ms-4 p-1 d-flex ">
          <AdminProfileLogout />
        </div>
        <div className="my-3 me-4 d-flex header-4btn-width">
          <div>
            <HeaderMessageBox />
          </div>
          <div className="ms-3">
            <TopHeaderModal />
          </div>
          <div className="mx-3">
            <AdminSelectBtn />
          </div>
          <div className=" my-auto bg-white shadow-sm custom-radius d-flex">
            <LanguageBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSectionWithElements;
