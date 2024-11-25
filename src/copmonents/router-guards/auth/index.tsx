import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/SignIn" replace />;
  }

  return children || <Outlet />;
};

export default AuthGuard;
