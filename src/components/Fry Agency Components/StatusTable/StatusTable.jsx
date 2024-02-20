import React from "react";
import { Col, Row } from "react-bootstrap";
import "./StatusTable.css";

const StatusTable = (props) => {
  const { tabledata } = props;
  return (
    <div className="table-main-wrapper">
      <Row className=" mx-0  flex-column  gap-4  ">
        <Col>
          <div className=" card-otr  d-flex  justify-content-between  flex-wrap gap-3 align-items-center">
            <div className="card-otr d-flex gap-3">
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

              <input className="custom-input " placeholder="Search" />
            </div>

            <div className="d-flex align-items-center gap-3   flex-wrap">
              <div class="file btn btn-lg  uplode-btn  fs-13">
                Import from CSV
                <input
                  type="file"
                  name="file"
                  className="upload-input"
                  placeholder="Import from csv"
                />
              </div>

              <div className="d-flex gap-2 align-items-center bg-purple   ">
                <div></div>
                <div className="fs-13 text-white">Add Employee</div>
              </div>
            </div>
          </div>
        </Col>

        <Col className="">
          <div className="d-flex flex-column gap-3">
            <Row className="mx-0  table-head  flex-column  gap-3 flex-lg-row  gap-lg-0  ">
              <Col lg={3}>
                <div className="d-flex  align-items-center gap-4">
                  <div>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      className="custom-check"
                    />
                  </div>
                  <div className="fs-13  cl-gray">Name</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex gap-3 align-items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                    </svg>
                  </div>
                  <div className="fs-13  cl-gray">Job Title</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex gap-3 align-items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                    </svg>
                  </div>
                  <div className="fs-13  cl-gray">Department</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex gap-3 align-items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                    </svg>
                  </div>
                  <div className="fs-13  cl-gray">Based Salery</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex gap-3 align-items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                    </svg>
                  </div>
                  <div className="fs-13  cl-gray">Total Project</div>
                </div>
              </Col>

              <Col>
                <div className="d-flex gap-3 align-items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                    </svg>
                  </div>
                  <div className="fs-13  cl-gray">Status</div>
                </div>
              </Col>

              <Col lg={2}>
                <div className="d-flex gap-3 align-items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#e3e3e3"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
                    </svg>
                  </div>
                  <div className="fs-13  cl-gray">Actions</div>
                </div>
              </Col>
            </Row>

            {tabledata.map((item, index) => (
              <Row
                className="mx-0  table-data  align-items-center   flex-column  gap-3 flex-lg-row  gap-lg-0  "
                key={index}
              >
                <Col lg={3}>
                  <div className="d-flex  align-items-center gap-4">
                    <div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        className="custom-check"
                        checked={index === 0 ? true : false}
                      />
                    </div>

                    <div className="d-flex gap-3 align-items-center">
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          id="person"
                          className="rounded-circle"
                        >
                          <path fill="#7f4eca" d="M0 0h24v24H0V0z"></path>
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                      </div>
                      <div className="fs-13  cl-gray"> {item.ename}</div>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="fs-13  cl-gray">{item.jtitle}</div>
                </Col>
                <Col>
                  <div className="fs-13  cl-gray">{item.department}</div>
                </Col>

                <Col>
                  <div className="fs-13  cl-gray">{item.slary}</div>
                </Col>
                <Col>
                  <div className="fs-13  cl-gray">{item.tproject}</div>
                </Col>
                <Col>
                  <div className="d-flex gap-2 align-items-center">
                    <div
                      className={` d-flex align-items-center ${
                        item.status === "Active"
                          ? "badge-icon-active"
                          : "badge-icon-leave "
                      }`}
                    ></div>
                    <div className="fs-13  cl-gray">Active</div>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="edit-button">
                    <div className="d-flex gap-2 align-items-center ">
                      <div className=" d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          fill="#2bdd13"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path>
                        </svg>
                      </div>
                      <div className="fs-13  cl-p ">Edit</div>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StatusTable;
