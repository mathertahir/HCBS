import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import UserWrapper from "../../UserWrapper";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Employess from "../../../pages/Employess";

const DashBoardLayout = () => {
  return (
    <UserWrapper>
      <div className="dashboar-layout-wrapper  container-fluid  py-2">
        <Row className="mx-0  gap-3 gap-lg-0">
          <Col lg={2}>
            <SideBar />
          </Col>
          <Col lg={10} className="px-0 pb-5">
            {/* <Outlet /> */}
            <Employess />
          </Col>
        </Row>
      </div>
    </UserWrapper>
  );
};

export default DashBoardLayout;
