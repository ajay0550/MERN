import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-blue">Course</span>Hub
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default NavBar;