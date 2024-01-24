import React from "react";
import "./HsbcFooter.scss";
import Container from "react-bootstrap/Container";

import { Col, Row } from "react-bootstrap";
import logo from "../../../assets/images/footerlogo.png";
import fb from "../../../assets/images/facebook black.1.svg";
import linkedin from "../../../assets/images/linkedin black.1.svg";
import instagram from "../../../assets/images/instagram black.1.svg";
import goo from "../../../assets/images/googleplus black.1.svg";
import pin from "../../../assets/images/pinterest color.1.svg";
import yt from "../../../assets/images/youtube color.1.svg";
import wifi from "../../../assets/images/rss black.1.svg";
import tw from "../../../assets/images/twitter black.1.svg";

const HsbcFooter = () => {
  return (
    <div className="hsbc-footer-wrapper">
      <Container className="footer-container">
        <div className=" footer-custom-container ">
          <div className="custom-container-data">
            <Row className="mx-0">
              <Col md={6}>
                <div>
                  <img src={logo}></img>
                </div>
              </Col>
              <Col md={6}>
                <div className="footer-content-wrapper">
                  <div className="footer-main-data">
                    <div className="location-link">
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
                            d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 13.17 14.58 18.92 12.77 21.11C12.37 21.59 11.64 21.59 11.24 21.11C9.42 18.92 5 13.17 5 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="icon-desc">
                        345 Faulconer Drive, Suite 4 • Charlottesville, CA,
                        12345
                      </div>
                    </div>

                    <div className="phone-section">
                      <div className="phone-link">
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
                              d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.05999 13.63 6.61999 10.79L8.47 8.94001C8.89999 8.51001 9.10999 7.91001 9.03999 7.30001L8.74999 4.78001C8.62999 3.77001 7.77999 3.01001 6.75999 3.01001H5.02999C3.89999 3.01001 2.95999 3.95001 3.02999 5.08001C3.55999 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                              fill="white"
                            />
                          </svg>
                        </div>

                        <div className="icon-desc">(123) 456-7890</div>
                      </div>

                      <div className="phone-link">
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
                              d="M7 3H17C17.55 3 18 3.45 18 4V6C18 6.55 17.55 7 17 7H7C6.45 7 6 6.55 6 6V4C6 3.45 6.45 3 7 3ZM5 8H19C20.66 8 22 9.34 22 11V15C22 16.1 21.1 17 20 17H18V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V17H4C2.9 17 2 16.1 2 15V11C2 9.34 3.34 8 5 8ZM9 19H15C15.55 19 16 18.55 16 18V14H8V18C8 18.55 8.45 19 9 19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12Z"
                              fill="white"
                            />
                          </svg>
                        </div>

                        <div className="icon-desc">(123) 456-7890</div>
                      </div>
                    </div>
                  </div>

                  <div className="social-media-section">
                    <div className="social-media-title">Social Media</div>

                    <div className="social-icons">
                      <div>
                        <img src={fb}></img>
                      </div>

                      <div>
                        <img src={tw}></img>
                      </div>

                      <div>
                        <img src={linkedin}></img>
                      </div>
                      <div>
                        <img src={yt}></img>
                      </div>
                      <div>
                        <img src={instagram}></img>
                      </div>
                      <div>
                        <img src={goo}></img>
                      </div>
                      <div>
                        <img src={pin}></img>
                      </div>
                      <div>
                        <img src={wifi}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="footer-bottom">
            <div className="bottom-links">
              <div className="f-14-U">About us</div>
              <div className="f-14-U">Contact us</div>
              <div className="f-14-U">Help</div>
              <div className="f-14-U">Privacy Policy</div>
              <div className="f-14-U">Disclaimer</div>
            </div>

            <div className="copy-right">Copyright © 2024 • HSBC</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HsbcFooter;
