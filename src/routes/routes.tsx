import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayoutPage, ErrorPage, LoginPage } from "../pages";

export const createAppRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    errorElement: <ErrorPage />,
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element: <DashboardLayoutPage />,

    // children: [{ index: true, element: <Login /> }],
  },
]);
