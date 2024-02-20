import React, { useState, useRef, useEffect, ReactNode } from "react";

// import Footer from "./Footer/Footer";
import HsbcNavbar from "./HSBC Components/HsbcNavbar/HsbcNavbar";
import HsbcFooter from "./HSBC Components/HsbcFooter/HsbcFooter";
import Header from "./Fry Agency Components/FryAgencyHeader/Header";
import Footer from "./Fry Agency Components/Footer/Footer";

const UserWrapper = ({ hideFooter, children }) => {
  return (
    <div className="">
      <Header />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default UserWrapper;
