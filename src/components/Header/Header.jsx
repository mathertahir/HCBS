import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo_light.svg";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="navbar-wrapper  ">
      <Container className="navbar-container">
        <div className="nav-data-wrapper">
          <Navbar.Brand href="#home" className="navbar-logo-wrapper">
            <img src={logo} className="navbar-logo-img"></img>
          </Navbar.Brand>

          <div className=" m-auto   d-none d-lg-block  ">
            <Nav className=" nav-item-wrapper   ">
              <div className="link-wrapper">
                <Nav.Link href="#link" className="nav-tags">
                  Home
                </Nav.Link>
              </div>

              <div className="link-wrapper">
                <Nav.Link href="#link" className="nav-tags ">
                  About
                </Nav.Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>

              <div className="link-wrapper">
                <Nav.Link href="#link" className="nav-tags">
                  Property
                </Nav.Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>

              <div className="link-wrapper">
                <Nav.Link href="#link" className="nav-tags">
                  Pages
                </Nav.Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>

              <div className="link-wrapper">
                <Nav.Link href="#link" className="nav-tags">
                  Blog
                </Nav.Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div className="link-wrapper">
                <Nav.Link href="#link" className="nav-tags">
                  Contact
                </Nav.Link>
              </div>
            </Nav>
          </div>

          <div className="  ">
            <Nav className="ms-auto icon-section">
              <Nav.Link href="#link" className="nav-icon-link">
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                  </svg>
                </div>
              </Nav.Link>

              <Nav.Link className="nav-icon-link   d-none d-sm-block">
                <div className=" property-btn    ">
                  <span className="icon-section ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
                    </svg>
                  </span>
                  <div className="  label-section ">
                    <span>Add Property</span>
                  </div>
                </div>
              </Nav.Link>

              <Nav.Link className="nav-icon-link   d-xs-block d-sm-none">
                <div className=" circle-property-btn    ">
                  <span className="icon-section circle-wrapper ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
                    </svg>
                  </span>
                </div>
              </Nav.Link>

              <Nav.Link className="nav-icon-link     d-xs-block d-sm-none">
                <div className="  toggle-btn  d-flex algn-items-center  ">
                  <span className="icon-section  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M5 11.667H35"
                        stroke="#fff"
                        stroke-width="2.25"
                        stroke-linecap="round"
                      />
                      <path
                        d="M5 20H35"
                        stroke="#fff"
                        stroke-width="2.25"
                        stroke-linecap="round"
                      />
                      <path
                        d="M5.55469 27.7783H35.5547"
                        stroke="#fff"
                        stroke-width="2.25"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
