import React from "react";
import "./HsbcInvestment.scss";
import { Col, Row } from "react-bootstrap";
import cardimg from "../../../assets/images/investcard.png";

const HsbcInvestment = () => {
  const carddata = [
    {
      date: "12/02/22",
      title: "Popular Booklet",
      percentage: "69% ↑",
      intrate: "6.9%",
      anu: "annualy",
      duration: "12 Mounts",
      share: "$280.00",
      detail:
        "You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit",
      cimg: cardimg,
    },

    {
      date: "12/02/22",
      title: "Popular Booklet",
      percentage: "69% ↑",
      intrate: "6.9%",
      anu: "annualy",
      duration: "12 Mounts",
      share: "$280.00",
      detail:
        "You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit",
      cimg: cardimg,
    },

    {
      date: "12/02/22",
      title: "Popular Booklet",
      percentage: "69% ↑",
      intrate: "6.9%",
      anu: "annualy",
      duration: "12 Mounts",
      share: "$280.00",
      detail:
        "You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit",
      cimg: cardimg,
    },
    {
      date: "12/02/22",
      title: "Popular Booklet",
      percentage: "69% ↑",
      intrate: "6.9%",
      anu: "annualy",
      duration: "12 Mounts",
      share: "$280.00",
      detail:
        "You want to establish financial security and plan for possible future hauls. This fund allows you yo save money will be compltely safe and to benefit",
      cimg: cardimg,
    },
  ];

  return (
    <div className="investment-wrapper">
      <div className="investment-heading-section">
        <div className="">
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
              d="M6.90625 10.5625C6.90625 10.1138 7.27002 9.75 7.71875 9.75H18.2812C18.73 9.75 19.0938 10.1138 19.0938 10.5625C19.0938 11.0112 18.73 11.375 18.2812 11.375H7.71875C7.27002 11.375 6.90625 11.0112 6.90625 10.5625Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.90625 13.8125C6.90625 13.3638 7.27002 13 7.71875 13H18.2812C18.73 13 19.0938 13.3638 19.0938 13.8125C19.0938 14.2612 18.73 14.625 18.2812 14.625H7.71875C7.27002 14.625 6.90625 14.2612 6.90625 13.8125Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.91345 4.53845C3.2182 4.23371 3.63152 4.0625 4.0625 4.0625H21.9375C22.3685 4.0625 22.7818 4.2337 23.0865 4.53845C23.3913 4.8432 23.5625 5.25652 23.5625 5.6875V21.125C23.5625 21.4066 23.4167 21.6681 23.1772 21.8162C22.9376 21.9642 22.6385 21.9777 22.3866 21.8517L19.5 20.4084L16.6134 21.8517C16.3846 21.9661 16.1154 21.9661 15.8866 21.8517L13 20.4084L10.1134 21.8517C9.88462 21.9661 9.61538 21.9661 9.38664 21.8517L6.5 20.4084L3.61336 21.8517C3.3615 21.9777 3.06238 21.9642 2.82284 21.8162C2.58331 21.6681 2.4375 21.4066 2.4375 21.125V5.6875C2.4375 5.25652 2.60871 4.8432 2.91345 4.53845ZM21.9375 5.6875L4.0625 5.6875L4.0625 19.8103L6.13664 18.7733C6.36538 18.6589 6.63462 18.6589 6.86336 18.7733L9.75 20.2166L12.6366 18.7733C12.8654 18.6589 13.1346 18.6589 13.3634 18.7733L16.25 20.2166L19.1366 18.7733C19.3654 18.6589 19.6346 18.6589 19.8634 18.7733L21.9375 19.8103V5.6875Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="imvestment-title">Our Advantageous Investments!</div>
      </div>

      <Row className="mx-0">
        {carddata.map((item, index) => (
          <Col>
            <div className="investment-card-wrapper" key={index}>
              <div
                className="image-section "
                style={{ backgroundImage: `url(${item.cimg})` }}
              >
                <div className="data-wrapper">
                  <div className="date-badge-otr">
                    <div className="date-badge-inr">{item.date}</div>
                  </div>

                  <div className="investment-card-title">
                    <div className="card-titles">{item.title}</div>

                    <div className="performance-div">
                      <div className="per-title">Guarranteed Performance</div>
                      <div className="per-cent">{item.percentage}</div>
                    </div>
                  </div>
                </div>

                
              </div>

              <div className="card-content-section">
                <div className="card-desc-data-wrapper">
                  <div className="card-badges-wrapper">
                    <div className="badge-otr-wra">
                      <div className="badge-title">Interest rate :</div>
                      <div className="badge-des">{item.intrate}</div>
                    </div>

                    <div className="badge-otr-wra">
                      <div className="badge-title">Interest rate :</div>
                      <div className="badge-des">{item.anu}</div>
                    </div>

                    <div className="badge-otr-wra">
                      <div className="badge-title">Duration:</div>
                      <div className="badge-des">{item.duration}</div>
                    </div>

                    <div className="badge-otr-wra">
                      <div className="badge-title">Amount per share:</div>
                      <div className="badge-des">{item.share}</div>
                    </div>
                  </div>

                  <p className="card-detail">{item.detail}</p>
                </div>

                <div className="card-btn-otr">
                  <div className="card-btn-inr">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.15802 8.18673C6.15802 7.89665 6.39317 7.6615 6.68325 7.6615H11.9356C12.2256 7.6615 12.4608 7.89665 12.4608 8.18673C12.4608 8.47681 12.2256 8.71196 11.9356 8.71196H6.68325C6.39317 8.71196 6.15802 8.47681 6.15802 8.18673Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.15802 10.2877C6.15802 9.9976 6.39317 9.76245 6.68325 9.76245H11.9356C12.2256 9.76245 12.4608 9.9976 12.4608 10.2877C12.4608 10.5778 12.2256 10.8129 11.9356 10.8129H6.68325C6.39317 10.8129 6.15802 10.5778 6.15802 10.2877Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.31431 4.29254C3.51131 4.09554 3.7785 3.98486 4.0571 3.98486H14.5617C14.8403 3.98486 15.1075 4.09554 15.3045 4.29254C15.5015 4.48954 15.6122 4.75673 15.6122 5.03532V12.9138C15.6122 13.3317 15.4462 13.7325 15.1507 14.028C14.8552 14.3235 14.4544 14.4895 14.0365 14.4895H2.48141C2.19133 14.4895 1.95618 14.2543 1.95618 13.9642C1.95618 13.6742 2.19133 13.439 2.48141 13.439C2.62071 13.439 2.7543 13.3837 2.8528 13.2852C2.9513 13.1867 3.00664 13.0531 3.00664 12.9138V5.03532C3.00664 4.75672 3.11731 4.48954 3.31431 4.29254ZM3.96698 13.439H14.0365C14.1758 13.439 14.3094 13.3837 14.4079 13.2852C14.5064 13.1867 14.5617 13.0531 14.5617 12.9138V5.03532L4.0571 5.03532V12.9138C4.0571 13.0944 4.02608 13.2719 3.96698 13.439Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.43096 6.08582C1.72104 6.08582 1.95619 6.32097 1.95619 6.61105V12.9138C1.95619 13.0531 2.01153 13.1867 2.11003 13.2852C2.20853 13.3837 2.34212 13.439 2.48142 13.439C2.7715 13.439 3.00665 13.6742 3.00665 13.9643C3.00665 14.2544 2.7715 14.4895 2.48142 14.4895C2.06352 14.4895 1.66274 14.3235 1.36724 14.028C1.07174 13.7325 0.905731 13.3317 0.905731 12.9138V6.61105C0.905731 6.32097 1.14088 6.08582 1.43096 6.08582Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="lern-more">Lean More</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}

        {/* <Col>
          <div className="investment-card-wrapper">
            <div
              className="image-section"
              style={{ backgroundImage: `url(${cardimg})` }}
            >
              <div className="data-wrapper">
                <div className="date-badge-otr">
                  <div className="date-badge-inr">12/02/22</div>
                </div>

                <div className="investment-card-title">
                  <div className="card-titles">
                    Popular Booklet - 6.90% net{" "}
                  </div>

                  <div className="performance-div">
                    <div className="per-title">Guarranteed Performance</div>
                    <div className="per-cent">69% ↑</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-content-section">
              <div className="card-desc-data-wrapper">
                <div className="card-badges-wrapper">
                  <div className="badge-otr-wra">
                    <div className="badge-title">Interest rate :</div>
                    <div className="badge-des">6.9%</div>
                  </div>

                  <div className="badge-otr-wra">
                    <div className="badge-title">Interest rate :</div>
                    <div className="badge-des">annualy</div>
                  </div>

                  <div className="badge-otr-wra">
                    <div className="badge-title">Duration:</div>
                    <div className="badge-des">12 Months</div>
                  </div>

                  <div className="badge-otr-wra">
                    <div className="badge-title">Amount per share:</div>
                    <div className="badge-des">$280.00</div>
                  </div>
                </div>

                <p className="card-detail">
                  You want to establish financial security and plan for possible
                  future hauls. This fund allows you yo save money will be
                  compltely safe and to benefit
                </p>
              </div>

              <div className="card-btn-otr">
                <div className="card-btn-inr">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.15802 8.18673C6.15802 7.89665 6.39317 7.6615 6.68325 7.6615H11.9356C12.2256 7.6615 12.4608 7.89665 12.4608 8.18673C12.4608 8.47681 12.2256 8.71196 11.9356 8.71196H6.68325C6.39317 8.71196 6.15802 8.47681 6.15802 8.18673Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.15802 10.2877C6.15802 9.9976 6.39317 9.76245 6.68325 9.76245H11.9356C12.2256 9.76245 12.4608 9.9976 12.4608 10.2877C12.4608 10.5778 12.2256 10.8129 11.9356 10.8129H6.68325C6.39317 10.8129 6.15802 10.5778 6.15802 10.2877Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.31431 4.29254C3.51131 4.09554 3.7785 3.98486 4.0571 3.98486H14.5617C14.8403 3.98486 15.1075 4.09554 15.3045 4.29254C15.5015 4.48954 15.6122 4.75673 15.6122 5.03532V12.9138C15.6122 13.3317 15.4462 13.7325 15.1507 14.028C14.8552 14.3235 14.4544 14.4895 14.0365 14.4895H2.48141C2.19133 14.4895 1.95618 14.2543 1.95618 13.9642C1.95618 13.6742 2.19133 13.439 2.48141 13.439C2.62071 13.439 2.7543 13.3837 2.8528 13.2852C2.9513 13.1867 3.00664 13.0531 3.00664 12.9138V5.03532C3.00664 4.75672 3.11731 4.48954 3.31431 4.29254ZM3.96698 13.439H14.0365C14.1758 13.439 14.3094 13.3837 14.4079 13.2852C14.5064 13.1867 14.5617 13.0531 14.5617 12.9138V5.03532L4.0571 5.03532V12.9138C4.0571 13.0944 4.02608 13.2719 3.96698 13.439Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.43096 6.08582C1.72104 6.08582 1.95619 6.32097 1.95619 6.61105V12.9138C1.95619 13.0531 2.01153 13.1867 2.11003 13.2852C2.20853 13.3837 2.34212 13.439 2.48142 13.439C2.7715 13.439 3.00665 13.6742 3.00665 13.9643C3.00665 14.2544 2.7715 14.4895 2.48142 14.4895C2.06352 14.4895 1.66274 14.3235 1.36724 14.028C1.07174 13.7325 0.905731 13.3317 0.905731 12.9138V6.61105C0.905731 6.32097 1.14088 6.08582 1.43096 6.08582Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="lern-more">Lean More</div>
                </div>
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default HsbcInvestment;
