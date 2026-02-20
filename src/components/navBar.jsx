import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {


    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("current_user");
        navigate("/");
    }
    return (
    <nav className="navbar">
      <div className="navbar__brand">
        {/* input my logo */}
        <span className="navbar__title">Alford Rentals</span>
      </div>

      <div className="navbar__links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/properties/create">Add Property</Link>
      </div>

      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};
