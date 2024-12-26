import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="site-name">Oneclick.com</span>
        <ul className="navbar-list">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/cart" className="navbar-link">Cart</Link></li>
          <li><Link to="/product/123" className="navbar-link">ProductDetail</Link></li>
          <li><Link to="/user/Zeenat" className="navbar-link">UserId</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
