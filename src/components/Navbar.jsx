import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <span className="s1">CAREER</span> <span className="s2">TRACKER</span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/features">Features</Link>
        </li>


        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>


        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <div className="navbar-cta">
        <Link to="/login" className="btn-login">
          Login
        </Link>

        <Link to="/signup" className="btn-signup">
          Get Started
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;