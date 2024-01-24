import React from "react";
import "./HsbcHome.scss";
import HsbcHero from "../../components/HSBC Components/HsbcHero/HsbcHero";
import herobg from "../../assets/images/bghsbc.png";
import { Container } from "react-bootstrap";
import Summary from "../../components/HSBC Components/HsbcSummary/Summary";
import HsbcInvestment from "../../components/HSBC Components/Hsbcinvestment/HsbcInvestment";
import News from "../../components/HSBC Components/NewsSection/News";
import Trading from "../../components/HSBC Components/Trading/Trading";

const HsbcHome = () => {
  return (
    <div
      className="hsbc-home-wrapper"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <Container>
        <HsbcHero />
        <Summary />
        <Trading />
        <HsbcInvestment />
        <News />
      </Container>
    </div>
  );
};

export default HsbcHome;
