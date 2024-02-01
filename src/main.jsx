import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Summary from "../src/Components/Summary/Summary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("Details.json"),
  },
  {
    path: "/summary/:id",
    element: <Summary></Summary>,
    loader: () => fetch("/Details.json"),
    // loader: ({ params }) => fetch(JSON.parse(`Details.json/${params.id}`)),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
