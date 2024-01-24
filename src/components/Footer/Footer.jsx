import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../images/logo_light.svg";
import facebook from "../../images/facebookicon.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import pinterst from "../../images/pinterest.png";
import "./Footer.scss";
import loaction from "../../images/location.png";
import mail from "../../images/email.png";
import telephone from "../../images/telephone.png";

const Footer = () => {
  return (
    <div className="Footer-Wrapper">
      <div className="container  footer-container">
        <div className="footer-data">
          <Row className="mx-0 footer-row">
            <Col lg={3} sm={6} className="footer-logo-col px-0">
              <div className="col-1-data">
                <div className="footer-logo-wrapper">
                  <img src={logo} className="logo-img"></img>
                </div>
                <p className="company-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>

                <div className="footer-social-icon-section">
                  <div className="social-icon-otr">
                    <div className="icon-inr">
                      <img src={facebook} className="w-100"></img>
                    </div>
                  </div>

                  <div className="social-icon-otr">
                    <div className="icon-inr">
                      <img src={twitter} className="w-100"></img>
                    </div>
                  </div>
                  <div className="social-icon-otr">
                    <div className="icon-inr">
                      <img src={linkedin} className="w-100"></img>
                    </div>
                  </div>

                  <div className="social-icon-otr">
                    <div className="icon-inr">
                      <img src={pinterst} className="w-100"></img>
                    </div>
                  </div>
                  <div className="social-icon-otr">
                    <div className="icon-inr">
                      <img src={instagram} className="w-100"></img>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="footer-quicklinks-col ">
              <div className="quiklinks-data">
                <h2 className="footer-title">Quick Links</h2>

                <ul className="quicklink-sub-links-wrapper">
                  <li className="link-tag">
                    <a href="/" className="link-href">
                      About us
                    </a>
                  </li>
                  <li className="link-tag">
                    <a href="/" className="link-href">
                      Blog & Articles
                    </a>
                  </li>

                  <li className="link-tag">
                    <a href="/" className="link-href">
                      Terms and Conditions
                    </a>
                  </li>

                  <li className="link-tag">
                    <a href="/" className="link-href">
                      Privacy Policy
                    </a>
                  </li>

                  <li className="link-tag">
                    <a href="/" className="link-href">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} sm={6} className="footer-newsletter-col">
              <div className="newsletter-data">
                <h2 className="footer-title">Newsletter</h2>
                <div className="data-section">
                  <div className="form-section">
                    <div className="input-otr ">
                      <input
                        type="email"
                        className="input-inr  w-100"
                        placeholder="abc@gmail.com"
                      ></input>
                    </div>
                    <div className="  roundedFormbtn-otr  about-btn-otr">
                      <a className="   roundedFormbtn-inr     about-btn-inr">
                        SUBSCRIBE
                      </a>
                    </div>
                  </div>

                  <p className="desc-msj">We never span you</p>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6} className="contact-col">
              <div className="contact-data">
                <h2 className="footer-title">Contact</h2>

                <div className="socialmedia-section">
                  <div className="social-media-wrapper">
                    <div className="icon-section">
                      <img className="icon-img" src={loaction}></img>
                    </div>
                    <div className="social-desc">
                      121 King St, Melbourne den 3000, Australia
                    </div>
                  </div>

                  <div className="social-media-wrapper">
                    <div className="icon-section">
                      <img className="icon-img" src={mail}></img>
                    </div>
                    <div className="social-desc">info@example.com</div>
                  </div>

                  <div className="social-media-wrapper">
                    <div className="icon-section">
                      <img className="icon-img" src={telephone}></img>
                    </div>
                    <div className="social-desc">+123-596-000</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
