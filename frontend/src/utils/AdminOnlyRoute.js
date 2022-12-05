import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminOnlyRoute = ({ children }) => {
  const [user] = useAuth();
  return user && (user.is_staff) ? children : <Navigate to="/login" />;
};

export default AdminOnlyRoute;
