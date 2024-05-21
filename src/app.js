import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import './app.css';
import Protected from "./protected";
import Dashboard from "./dashboard";
import Login from "./login";
import UserDetailsProvider from "./user-details-provider";

function App() {

    return (
        <Router>
            <UserDetailsProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={
                        <Login />
                    } />
                    <Route path="/dashboard" element={<Protected>
                        <Dashboard />
                    </Protected>} />

                    <Route path="/about" element={<About />} />
                </Routes>
            </UserDetailsProvider>

        </Router>
    );
}

export default App;
