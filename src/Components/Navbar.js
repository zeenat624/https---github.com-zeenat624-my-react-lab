import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="store-name">GUTech Exam Store</div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
