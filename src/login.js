import { useContext, useState } from "react";
import { userDetailsContext } from "./user-details-provider";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { STORAGE_USER_ITEM_KEY } from "./user-details-provider";


// https://zeltta.co.nz/article/how-to-detect-inactivity-and-auto-reset-a-react-app

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const { auth } = useContext(userDetailsContext);
    const [, setIsAuthenticated] = auth;
    const users = [{ username: "Jane", password: "testpassword" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setIsAuthenticated(true)
            localStorage.setItem(STORAGE_USER_ITEM_KEY, 'true');

            const { redirectTo } = queryString.parse(location.search);
            console.log("start time");
            console.log(redirectTo);
            navigate(redirectTo == null ? '/' : redirectTo);
        }
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