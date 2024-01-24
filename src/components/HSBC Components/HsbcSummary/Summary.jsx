import React from "react";
import "./Summary.scss";
import { Col, Row } from "react-bootstrap";
import map from "../../../assets/images/Map.png";
import advisor from "../../../assets/images/advisor.png";

const Summary = () => {
  const mapdata = [
    {
      cardtitle: "Total",
      cardprice: "$1,119.01",
      cardimg: map,
    },

    {
      cardtitle: "Available",
      cardprice: "$1,119.01",
      cardimg: map,
    },
    {
      cardtitle: "Currently ",
      cardprice: "$0",
      cardimg: map,
    },
  ];

  return (
    <div className="summary-wrapper">
      <div className="summary-heading">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 4.0625C8.06395 4.0625 4.0625 8.06395 4.0625 13C4.0625 17.936 8.06395 21.9375 13 21.9375C17.936 21.9375 21.9375 17.936 21.9375 13C21.9375 8.06395 17.936 4.0625 13 4.0625ZM2.4375 13C2.4375 7.16649 7.16649 2.4375 13 2.4375C18.8335 2.4375 23.5625 7.16649 23.5625 13C23.5625 18.8335 18.8335 23.5625 13 23.5625C7.16649 23.5625 2.4375 18.8335 2.4375 13Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.1875 13C12.1875 12.5513 12.5513 12.1875 13 12.1875H18.6875C19.1362 12.1875 19.5 12.5513 19.5 13C19.5 13.4487 19.1362 13.8125 18.6875 13.8125H13C12.5513 13.8125 12.1875 13.4487 12.1875 13Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="summary-title">Summary</div>
      </div>

      <div className="summary-main-card-otr">
        <Row className="mx-0  ">
          {mapdata.map((item, index) => (
            <Col>
              <div
                className="map-card-otr  "
                style={{ backgroundImage: `url(${item.cardimg})` }}
                key={index}
              >
                <div className="card-title">{item.cardtitle}</div>
                <div className="card-price">{item.cardprice}</div>
              </div>
            </Col>
          ))}

          <Col>
            <div className="advisor-card-otr">
              <div className="advisor-name">Your Advisor</div>
              <div className="advisor-img-section">
                <div className="advisor-img-otr">
                  <img src={advisor} className="advisor-img-inr"></img>
                </div>

                <div className="advisor-title-section">
                  <div className="advisor-title">West Jackeline</div>
                  <div className="advisor-content">01.87.66.19.21</div>
                </div>
              </div>

              <div className="date-section">Monday, September 22</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Summary;
