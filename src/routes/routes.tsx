import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayoutPage, ErrorPage, LoginPage } from "../pages";
import UsersPage from "../pages/users";
import { DashboardWelcome } from "../components/common/ComingSoon/comingsoon";
import UserDetailsPage from "../pages/userDetails";

export const createAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardWelcome />,
      },
      { path: "users", element: <UsersPage /> },
      { path: "users/:id", element: <UserDetailsPage /> },
    ],
  },
]);
