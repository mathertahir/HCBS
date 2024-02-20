import React from "react";
import { Col, Row } from "react-bootstrap";
import "./EmployeeCard.scss";

const EmployeeCard = () => {
  return (
    <div className="employee-card-wrapper">
      <Row className="mx-0 row-gap">
        <Col md={6}>
          <div className="card-otr  d-flex gap-3 align-items-center">
            <div className="card-icon-otr">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#3668ab"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </div>
            </div>

            <div className="d-flex flex-column gap-2">
              <div className="fs-13  cl-gray">Total Employee</div>
              <div className="fs-17 text-white"> 120</div>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="card-otr  d-flex gap-3 align-items-center">
            <div className="card-icon-otr-active ">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#24d671"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </div>
            </div>

            <div className="d-flex flex-column gap-2">
              <div className="fs-13  cl-gray">Active Employee</div>
              <div className="fs-17 text-white">60</div>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="card-otr  d-flex gap-3 align-items-center">
            <div className="card-icon-otr-leave">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#d62448"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </div>
            </div>

            <div className="d-flex flex-column gap-2">
              <div className="fs-13  cl-gray">On Leave</div>
              <div className="fs-17 text-white"> 24</div>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="card-otr  d-flex gap-3 align-items-center">
            <div className="card-icon-otr-onboarding">
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#d69524"
                  viewBox="0 0 256 256"
                >
                  <path d="M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"></path>
                </svg>
              </div>
            </div>

            <div className="d-flex flex-column gap-2">
              <div className="fs-13  cl-gray">On Boarding</div>
              <div className="fs-17 text-white"> 36</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeCard;
