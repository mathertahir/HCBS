import React from "react";
import "./HomeHero.scss";
import bgimage from "../../../../assets/images/herobanner.jpeg";

const HomeHero = () => {
  return (
    <div
      className="home-hero-wrapper"
      style={{ backgroundImage: `url(${bgimage}) ` }}
    >
      <div className="container hero-main-container">
        <div className="hero-content-container">
          <div className="hero-content-wrapper">
            <p className="hero-subheading">The Best Properties Place</p>
            <h1 className="hero-heading">Let’s find the perfect place</h1>

            <div className="hero-form-wrapper">
              <div className="hero-input-otr">
                <input
                  className="hero-input-inr"
                  placeholder="Enter Keywords here..."
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
