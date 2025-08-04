import React from "react";
import { useAuthUser } from "../../hooks/useSelectedUser";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { getAuthUser } = useAuthUser();
  const user = getAuthUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoutes;
