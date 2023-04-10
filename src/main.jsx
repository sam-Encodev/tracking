import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import Root from "./root";
import ErrorPage from "./components/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Records from "./pages/records";
import Billing from "./pages/billing";
import Users from "./pages/users";
import Settings from "./pages/Settings";
import "./index.css";
import ViewRecords, { loader as recordLoader } from "./pages/viewRecord";

const router = createBrowserRouter([
 {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
   {
    path: "/dashboard",
    element: <Dashboard />,
   },
   {
    path: "/records",
    element: <Records />,
   },
   {
    path: "/records/:recordID",
    element: <ViewRecords />,
    loader: recordLoader,
   },

   {
    path: "/billing",
    element: <Billing />,
   },
   {
    path: "/users",
    element: <Users />,
   },
   {
    path: "/settings",
    element: <Settings />,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <MantineProvider withGlobalStyles withNormalizeCSS>
   <RouterProvider router={router} />
  </MantineProvider>
 </React.StrictMode>
);
