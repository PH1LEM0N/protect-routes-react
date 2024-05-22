import { Navigate, useLocation } from "react-router-dom";
import { userDetailsContext } from "./user-details-provider";
import { useContext } from "react";
const Protected = ({ children }) => {
    const { auth } = useContext(userDetailsContext);
    const [isAuthenticated,] = auth;
    const location = useLocation();
    if (!isAuthenticated) {
        return <Navigate to={`/login?redirectTo=${location.pathname}`} replace />;
    }
    return children;
};
export default Protected;