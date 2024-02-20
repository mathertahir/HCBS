import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="  agency-footer-wrapper">
      <div className="d-flex  flex-column flex-sm-row  gap-4 align-items-center  ">
        <div className="fs-13  cl-gray"> © FRY Agency</div>

        <ul className="d-flex gap-4 ps-0  align-items-center mb-0  flex-column flex-sm-row ">
          <li className="fs-13  cl-gray"> Privacy Policy</li>
          <li className="fs-13  cl-gray"> Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
