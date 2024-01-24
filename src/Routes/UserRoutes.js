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

const UserRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HSBCHome />,
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
