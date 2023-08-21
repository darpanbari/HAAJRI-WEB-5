import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, breadcrumb1, breadcrumb2, breadcrumb2Link }) => {
  return (
    <>
      <div className="mt-4 mb-2 ms-4">
        <h5 className="mb-0">{title}</h5>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a
                href="/dashboard/sales-dashboard"
                className="text-decoration-none green-1"
              >
                {breadcrumb1}
              </a>
            </li>
            {breadcrumb2 ? (
              <li className="breadcrumb-item text-secondary" aria-current="page">
                {breadcrumb2Link ? (
                  <Link to={breadcrumb2Link} className="text-decoration-none text-secondary">
                    {breadcrumb2}
                  </Link>
                ) : (
                  breadcrumb2
                )}
              </li>
            ) : (
              ""
            )}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
