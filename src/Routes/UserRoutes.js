import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../Views/Home";
import HSBCHome from "../Views/HSBCHome";
import DashBoardLayout from "../components/Fry Agency Components/DashBoardLayout/DashBoardLayout";
import Employess from "../pages/Employess";
import Dashboard from "../Views/Dashboard";

const UserRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,

      children: [
        {
          path: "employee",

          index: true,
          element: <Employess />,
        },

        {
          path: "dashboardmain",

          index: true,
          element: <Dashboard />,
        },
      ],
    },

    // {
    //   path: "/admin",

    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Home />,
    //       title: "Home",
    //     },

    //     {
    //       path: "home",
    //       index: true,
    //       element: <Home />,
    //       title: "Home",
    //     },
    //     // {
    //     //   element: <Home />,
    //     // },
    //     {
    //       title: "contact",
    //       path: "contact",
    //       element: <Contact />,
    //     },
    //   ],
    // },
  ]);
  return <RouterProvider router={router} />;
};

export default UserRoutes;
