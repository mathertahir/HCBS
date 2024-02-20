import React from "react";

const ApprovalCards = (props) => {
  const { approvaldata } = props;
  return (
    <>
      <div className="card-otr  d-flex flex-column gap-3  h-100">
        <div className="d-flex justify-content-between">
          <div className="fs-13  cl-gray"> Pending Approval</div>
          <div className="fs-13 cl-pur">36 request</div>
        </div>

        {approvaldata.map((item, index) => (
          <div
            className="d-flex justify-content-between align-items-center"
            key={index}
          >
            <div className="d-flex gap-2  align-items-center">
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

              <div className="fs-12 cl-gray">{item.ename}</div>
            </div>

            <div className="d-flex gap-2  align-items-center">
              <div className="fs-12 cl-gray">{item.erequest}</div>

              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="#7f4eca"
                  viewBox="0 0 256 256"
                >
                  <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ApprovalCards;
