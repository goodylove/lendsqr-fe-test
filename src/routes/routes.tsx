import { createBrowserRouter, Navigate } from "react-router-dom";
import { Error, Login } from "../pages";
import DashboardLayout from "../pages/dashboard";

export const createAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,

    // children: [{ index: true, element: <Login /> }],
  },
]);
