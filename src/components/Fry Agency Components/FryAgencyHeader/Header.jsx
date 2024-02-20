import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-main-wrapper container-fluid">
      <Row className="mx-0  header-row  gap-3  gap-lg-0   ">
        <Col lg={2} md={12}>
          <div className="card-otr  d-flex  justify-content-between  align-items-center">
            <div className="d-flex align-items-center gap-2 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#3668ab"
                  viewBox="0 0 256 256"
                >
                  <path d="M243,96.05a20,20,0,0,0-17.26-13.72l-57-4.93-22.3-53.14h0a20,20,0,0,0-36.82,0L87.29,77.4l-57,4.93A20,20,0,0,0,18.87,117.4l43.32,37.8-13,56.24A20,20,0,0,0,79,233.1l49-29.76,49,29.76a20,20,0,0,0,29.8-21.66l-13-56.24,43.32-37.8A20,20,0,0,0,243,96.05Zm-66.75,42.62a20,20,0,0,0-6.35,19.63l11.39,49.32-42.94-26.08a19.9,19.9,0,0,0-20.7,0L74.71,207.62,86.1,158.3a20,20,0,0,0-6.35-19.63L41.66,105.44,91.8,101.1a19.92,19.92,0,0,0,16.69-12.19L128,42.42l19.51,46.49A19.92,19.92,0,0,0,164.2,101.1l50.14,4.34Z"></path>
                </svg>
              </div>

              <div className="fs-17 cl-wd">ZeePalm</div>
            </div>

            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#5457c0"
                viewBox="0 0 256 256"
              >
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
              </svg>
            </div>
          </div>
        </Col>

        <Col lg={10} className="px-0">
          <Row className="mx-0 gap-4 gap-lg-0">
            <Col lg={8} md={12} className="">
              <div className="card-otr  d-flex align-items-center gap-2">
                {" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e3e3e3"
                    viewBox="0 0 256 256"
                  >
                    <path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>
                  </svg>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="#e3e3e3"
                    viewBox="0 0 256 256"
                  >
                    <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                  </svg>
                </div>
                <div className="fs-13  cl-gray">Employees</div>
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="#e3e3e3"
                    viewBox="0 0 256 256"
                  >
                    <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                  </svg>
                </div>
                <div className="fs-13  cl-gray">Manage Employees</div>
              </div>
            </Col>

            <Col lg={4}>
              <Row className="mx-0   gap-3 gap-sm-0">
                <Col sm={7} className="ps-0 pdr-0">
                  <div className="card-otr  d-flex align-items-center  gap-2">
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#e3e3e3"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                      </svg>
                    </div>
                    <div>
                      <input placeholder="Search" className="custom-input" />
                    </div>
                  </div>
                </Col>
                <Col sm={5} className="pdr-0 ps-0 ps-sm-4 ">
                  <div className="card-otr  d-flex align-items-center  gap-2">
                    <div className="w-50  bell-icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#e3e3e3"
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                      </svg>
                    </div>

                    <div className="d-flex align-items-center w-50 gap-2  justify-content-end  ">
                      <div className="image-otr">
                        <img
                          src="/ms.jpg"
                          className="image-pic w-100 rounded-circle"
                        ></img>
                      </div>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="#e3e3e3"
                          viewBox="0 0 256 256"
                        >
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* <Col lg={5} md={12} className="">
          <div className="card-otr  d-flex align-items-center gap-2">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#e3e3e3"
                viewBox="0 0 256 256"
              >
                <path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>
              </svg>
            </div>
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="#e3e3e3"
                viewBox="0 0 256 256"
              >
                <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
              </svg>
            </div>
            <div className="fs-13  cl-gray">Employees</div>
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="#e3e3e3"
                viewBox="0 0 256 256"
              >
                <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
              </svg>
            </div>
            <div className="fs-13  cl-gray">Manage Employees</div>
          </div>
        </Col>

        <Col lg={5}>
          <Row className="mx-0   gap-3 gap-sm-0">
            <Col sm={7} className="ps-0 pdr-0">
              <div className="card-otr  d-flex align-items-center  gap-2">
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e3e3e3"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
                  </svg>
                </div>
                <div>
                  <input placeholder="Search" className="custom-input" />
                </div>
              </div>
            </Col>
            <Col sm={5} className="pdr-0 ps-0 ps-sm-4 ">
              <div className="card-otr  d-flex align-items-center  gap-2">
                <div className="w-50  bell-icon">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e3e3e3"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </div>

                <div className="d-flex align-items-center w-50 gap-2  justify-content-end  ">
                  <div className="image-otr">
                    <img
                      src="/ms.jpg"
                      className="image-pic w-100 rounded-circle"
                    ></img>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col> */}
        {/* <Col md={2}>
          <div className="card-otr  d-flex align-items-center  gap-2">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#e3e3e3"
                viewBox="0 0 256 256"
              >
                <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
              </svg>
            </div>
            <div>
              <input placeholder="Search" className="custom-input" />
            </div>
          </div>
        </Col>

        <Col md={2}>
          <div className="card-otr d-flex align-items-center  gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#e3e3e3"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default Header;
