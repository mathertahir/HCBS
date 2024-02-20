import React, { useState } from "react";
import "./SideBar.scss";

const SideBar = () => {
  const [activedropdown, setActiveDropdown] = useState(true);

  const dropdownsstatus = () => {
    setActiveDropdown(!activedropdown);
  };
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column  gap-4  card-otr">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
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

          <div className="fs-13  cl-gray"> Dashboard</div>
        </div>

        <div
          className="d-flex justify-content-between   custom-dropdown"
          onClick={dropdownsstatus}
        >
          <div className="d-flex gap-2 align-items-center">
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

            <div className="fs-13  cl-gray"> Employees</div>
          </div>

          <div className={` ${activedropdown ? "icon-active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#e3e3e3"
            >
              <path
                d="M9.99963 12.5419C9.8743 12.5419 9.74596 12.5139 9.61463 12.4579C9.48263 12.4026 9.36096 12.3126 9.24963 12.1879L5.54163 8.49991C5.36096 8.30524 5.27396 8.07257 5.28063 7.80191C5.28796 7.53124 5.38163 7.30557 5.56163 7.12491C5.7703 6.93024 5.9963 6.83657 6.23963 6.84391C6.4823 6.85057 6.70096 6.94424 6.89563 7.12491L9.99963 10.2709L13.1246 7.16691C13.3053 6.97224 13.5206 6.87157 13.7706 6.86491C14.0206 6.85757 14.2496 6.95124 14.4576 7.14591C14.6523 7.34057 14.7496 7.56624 14.7496 7.82291C14.7496 8.07957 14.6523 8.29824 14.4576 8.47891L10.7496 12.1879C10.6383 12.3126 10.5166 12.4026 10.3846 12.4579C10.2533 12.5139 10.125 12.5419 9.99963 12.5419Z"
                fill="#e3e3e3"
              />
            </svg>
          </div>
        </div>

        <div
          className={`custom-profile-dropdowns ${
            activedropdown ? "dropdown-show" : ""
          }`}
          onMouseLeave={() => setActiveDropdown(false)}
          id="targetuser"
        >
          <div className="d-flex  flex-column gap-2">
            <div className=" d-flex  align-items-center gap-3 ">
              <div className="active-bg"></div>

              <div className="fs-13  cl-blue ">Manage Employee</div>
            </div>

            <div className=" d-flex  align-items-center gap-3  custom-link">
              <div className="fs-13  cl-gray"> Department</div>
            </div>

            <div className=" d-flex  align-items-center gap-3 ">
              <div className="fs-13  cl-gray"> Directory</div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#e3e3e3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>

          <div className="fs-13  cl-gray"> Attandance</div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#e3e3e3"
              viewBox="0 0 256 256"
            >
              <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
            </svg>
          </div>

          <div className="fs-13  cl-gray"> Time off</div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
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

          <div className="fs-13  cl-gray"> Payroll</div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#e3e3e3"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"></path>
            </svg>
          </div>

          <div className="fs-13  cl-gray"> Goals</div>
        </div>
      </div>

      <div className="d-flex flex-column  gap-4  card-otr">
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#e3e3e3"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>
            </svg>
          </div>

          <div className="fs-13  cl-gray"> Settings</div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#e3e3e3"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z"></path>
            </svg>
          </div>

          <div className="fs-13  cl-gray"> Help & Support</div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#dc3513"
              viewBox="0 0 256 256"
            >
              <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path>
            </svg>
          </div>

          <div className="fs-13  text-danger"> Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
