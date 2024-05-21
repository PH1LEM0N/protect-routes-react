import { useState } from "react";

const Dashboard = () => {
    const [data, setData] = useState('hund maus katze');
    return (
        <div>
            <p>Welcome to your Dashboard - This is protected!</p>
            <p>{data}</p>
            <button onClick={(e) => setData('blablablab')}>change data</button>
        </div>
    );
};
export default Dashboard;