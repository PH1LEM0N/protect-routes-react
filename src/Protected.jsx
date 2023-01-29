import { Navigate, useLocation } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    const location = useLocation();
    if (!isLoggedIn) {
        return <Navigate to={`/login?redirectTo=${location.pathname}`} replace />;
    }
    return children;
};
export default Protected;