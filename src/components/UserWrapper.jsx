import React, { useState, useRef, useEffect, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HsbcNavbar from "./HSBC Components/HsbcNavbar/HsbcNavbar";
import HsbcFooter from "./HSBC Components/HsbcFooter/HsbcFooter";

const UserWrapper = ({ hideFooter, children }) => {
  return (
    <div>
      <HsbcNavbar />
      <main>{children}</main>
      <HsbcFooter />
    </div>
  );
};

export default UserWrapper;
