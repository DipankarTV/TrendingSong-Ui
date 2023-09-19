import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
