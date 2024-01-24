import React from "react";
import "./HsbcHero.scss";
import logo from "../../../assets/images/footerlogo.png";
import herobg from "../../../assets/images/hshero.png";

const HsbcHero = () => {
  return (
    <div className="hero-wrapper" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="hero-content-wrapper">
        <div className="content-title">
          <div className="hero-title">Welcome Dear HSBC</div>

          <div className="title-desc">Globas Asset Management</div>
        </div>

        <div>
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
};

export default HsbcHero;
