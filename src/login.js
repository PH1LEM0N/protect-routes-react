import { useContext, useState } from "react";
import UserDetailsProvider, { userDetailsContext } from "./user-details-provider";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { STORAGE_USER_ITEM_KEY } from "./user-details-provider";

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [, setauthenticated] = useContext(userDetailsContext);
    const users = [{ username: "Jane", password: "testpassword" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem(STORAGE_USER_ITEM_KEY, true);

            const { redirectTo } = queryString.parse(location.search);
            console.log("start time");
            console.log(redirectTo);
            navigate(redirectTo == null ? '/' : redirectTo);
            setTimeout(() => {
                logOut();
            }, 20000);

        }
    };

    let logoutTimer;

    const logOut = () => {
        setauthenticated(false);
        localStorage.removeItem(STORAGE_USER_ITEM_KEY);
        clearTimeout(logoutTimer); // Clear the logout timer when the user logs out
        navigate(`/login?redirectTo=${location.pathname}`);
    };


    return (
        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Login;