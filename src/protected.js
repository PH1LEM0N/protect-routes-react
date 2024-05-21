import { Navigate, useLocation } from "react-router-dom";
import { userDetailsContext } from "./user-details-provider";
import { useContext, useEffect } from "react";
const Protected = ({ children }) => {
    const [isLoggedIn] = useContext(userDetailsContext);
    const location = useLocation();
    useEffect(() => {
        console.log(isLoggedIn);
    }, [isLoggedIn]);
    if (!isLoggedIn) {
        return <Navigate to={`/login?redirectTo=${location.pathname}`} replace />;
    }
    return children;
};
export default Protected;