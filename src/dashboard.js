import { useContext } from "react";
import { useState } from "react";
import { STORAGE_USER_ITEM_KEY, userDetailsContext } from "./user-details-provider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [data, setData] = useState('lorem ipsum');
    const { auth } = useContext(userDetailsContext);
    const [, setIsAuthenticated] = auth;
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem(STORAGE_USER_ITEM_KEY);
        setIsAuthenticated(false);
        navigate('/');
    }

    return (
        <div>
            <p>Welcome to your Dashboard - This is protected!</p>
            <p>{data}</p>
            <button onClick={(e) => setData('testdata')}>change data</button>
            <button onClick={signOut}>Sign Out</button>
        </div>
    );
};
export default Dashboard;