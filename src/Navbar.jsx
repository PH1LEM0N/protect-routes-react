const { Link } = require("react-router-dom");
const Navbar = () => {
    return (
        <nav style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/" style={{ padding: "10px" }}>
                Home
            </Link>
            <Link to="/dashboard" style={{ padding: "10px" }}>
                Dashboard
            </Link>
            <Link to="/about" style={{ padding: "10px" }}>
                About
            </Link>
        </nav>
    );
};
export default Navbar;