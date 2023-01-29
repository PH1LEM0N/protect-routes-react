import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const Login2 = ({ isLoggedIn, setisLoggedIn }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onLogin = () => {
        setisLoggedIn(true);
        const { redirectTo } = queryString.parse(location.search);
        navigate(redirectTo == null ? '/login' : redirectTo);
    }

    const logOut = () => {
        setisLoggedIn(false);
    };

    return (
        isLoggedIn ? (
            <button onClick={logOut}>Logout</button>
        ) : (
            <button onClick={onLogin}>Login</button>
        )
    )
}

export default Login2;