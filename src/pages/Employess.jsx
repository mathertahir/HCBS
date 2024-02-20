import React from "react";
import { Col, Row } from "react-bootstrap";
import EmployeeCard from "../components/Fry Agency Components/EmployeeCard/EmployeeCard";
import ApprovalCards from "../components/Fry Agency Components/ApprovalCards/ApprovalCards";
import StatusTable from "../components/Fry Agency Components/StatusTable/StatusTable";

const Employess = () => {
  const tabledata = [
    {
      ename: "Employee Name",
      jtitle: "Finance Manager",
      department: "Finance",
      slary: "$200.00",
      tproject: "2",
      status: "Active",
    },

    {
      ename: "Employee Name",
      jtitle: "HR Manager",
      department: "HR",
      slary: "$200.00",
      tproject: "2",
      status: "Leave",
    },

    {
      ename: "Employee Name",
      jtitle: "IT Manager",
      department: "IT",
      slary: "$200.00",
      tproject: "2",
      status: "Active",
    },

    {
      ename: "Employee Name",
      jtitle: "Account Manager",
      department: "Marketing",
      slary: "$200.00",
      tproject: "2",
      status: "Active",
    },
  ];

  const approvaldata = [
    {
      ename: "Employee Name",
      erequest: " Leave request",
    },

    {
      ename: "Employee Name",
      erequest: " Leave request",
    },

    {
      ename: "Employee Name",
      erequest: " Leave request",
    },

    {
      ename: "Employee Name",
      erequest: " Leave request",
    },
  ];
  return (
    <div className="d-flex flex-column  gap-4">
      {" "}
      <Row className="mx-0 gap-3 gap-md-0 ">
        <Col md={8} className="px-0">
          <EmployeeCard />
        </Col>
        <Col md={4}>
          <ApprovalCards approvaldata={approvaldata} />
        </Col>
      </Row>
      <StatusTable tabledata={tabledata} />
    </div>
  );
};

export default Employess;
