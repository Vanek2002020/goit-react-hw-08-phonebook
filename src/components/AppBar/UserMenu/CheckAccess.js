import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedIn } from "store/auth/auth-selectors";

export function RequireAuth({ children, redirectTo = "/" }) {
  const isAuthenticated = useSelector(getLoggedIn);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export function GeneralAccess({ children, redirectTo = "/" }) {
  const isAuthenticated = useSelector(getLoggedIn);

  return isAuthenticated ? <Navigate to={redirectTo} /> : children;
}
