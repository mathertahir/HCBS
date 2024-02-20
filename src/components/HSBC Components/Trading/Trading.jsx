import React from "react";
import "./Trading.scss";
import { Col, Row } from "react-bootstrap";

const Trading = () => {
  const badgedata = [
    {
      title: "Today",
      amount: "$16",
    },
    {
      title: "Yesterday",
      amount: "$12",
    },

    {
      title: "7 days",
      amount: "$1.62",
    },

    {
      title: "30 days",
      amount: "$1.62",
    },

    {
      title: "3 mounths",
      amount: "$1.62",
    },
  ];
  return (
    <div className="Trading-wrapper">
      <div className="Trading-heading-section">
        <div className="trading-heading-part">
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
                d="M2.15222 6.55174C2.57238 6.39418 3.04071 6.60706 3.19827 7.02722L7.31251 17.9985L11.4267 7.02722C11.5457 6.7101 11.8488 6.50001 12.1875 6.50001H23.5625C24.0112 6.50001 24.375 6.86378 24.375 7.31251V9.75001C24.375 10.1987 24.0112 10.5625 23.5625 10.5625C23.1138 10.5625 22.75 10.1987 22.75 9.75001V8.12501H12.7506L8.07327 20.5978C7.95435 20.9149 7.65119 21.125 7.31251 21.125C6.97382 21.125 6.67066 20.9149 6.55174 20.5978L1.67674 7.59779C1.51918 7.17763 1.73206 6.7093 2.15222 6.55174Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="trading-title">Trading</div>
        </div>

        <div className="trading-btn-part">
          <div className="trade-btn-otr">
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
                  d="M3.25 13C3.25 12.5513 3.61377 12.1875 4.0625 12.1875H21.9375C22.3862 12.1875 22.75 12.5513 22.75 13C22.75 13.4487 22.3862 13.8125 21.9375 13.8125H4.0625C3.61377 13.8125 3.25 13.4487 3.25 13Z"
                  fill="#595959"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9495 5.11298C12.2668 5.43028 12.2668 5.94472 11.9495 6.26202L5.21155 13L11.9495 19.738C12.2668 20.0553 12.2668 20.5697 11.9495 20.887C11.6322 21.2043 11.1178 21.2043 10.8005 20.887L3.48798 13.5745C3.17067 13.2572 3.17067 12.7428 3.48798 12.4255L10.8005 5.11298C11.1178 4.79567 11.6322 4.79567 11.9495 5.11298Z"
                  fill="#595959"
                />
              </svg>
            </div>
          </div>

          <div className="trade-btn-otr">
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
                  d="M3.25 13C3.25 12.5513 3.61377 12.1875 4.0625 12.1875H21.9375C22.3862 12.1875 22.75 12.5513 22.75 13C22.75 13.4487 22.3862 13.8125 21.9375 13.8125H4.0625C3.61377 13.8125 3.25 13.4487 3.25 13Z"
                  fill="#595959"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0505 5.11298C14.3678 4.79567 14.8822 4.79567 15.1995 5.11298L22.512 12.4255C22.8293 12.7428 22.8293 13.2572 22.512 13.5745L15.1995 20.887C14.8822 21.2043 14.3678 21.2043 14.0505 20.887C13.7332 20.5697 13.7332 20.0553 14.0505 19.738L20.7885 13L14.0505 6.26202C13.7332 5.94472 13.7332 5.43028 14.0505 5.11298Z"
                  fill="#595959"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="trading-cards-wrapper">
        <div className="trading-top-cards">
          <div className="top-card-heading">Trading</div>
          <div className="trading-badges-section">
            {badgedata.map((item, index) => (
              <div className="single-badge-div" key={index}>
                <div className="t-badge-otr">
                  <div className="t-badge-heading">{item.title}</div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
                        fill="#439F3F"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 6C7.5 5.58579 7.83579 5.25 8.25 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15.75C18.75 16.1642 18.4142 16.5 18 16.5C17.5858 16.5 17.25 16.1642 17.25 15.75V6.75H8.25C7.83579 6.75 7.5 6.41421 7.5 6Z"
                        fill="#439F3F"
                      />
                    </svg>
                  </div>
                </div>
                <div className="t-badge-count">{item.amount}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="trading-bottom-cards">
          <Row className="mx-o">
            <Col md={4}>
              <div className="prograss-bar-section">
                <div className="card-header">
                  <div className="c-head">Statistics</div>
                  <div className="c-m-head">Risk Management</div>
                </div>
              </div>
            </Col>
            <Col md={8}></Col>
            <Col md={4}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Trading;
