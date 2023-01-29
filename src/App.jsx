import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import './App.css';
import { useState } from "react";
import Protected from "./Protected";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Login2 from "./Login2";

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(null);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login2 isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
                <Route path="/dashboard" element={<Protected isLoggedIn={isLoggedIn}>
                    <Dashboard />
                </Protected>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
