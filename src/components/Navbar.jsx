import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <h2>QuickFix</h2>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/services">Services</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to={"/login"}><button className="btn login">Login</button></Link>
          <Link to={"/signup"}><button className="btn signup">Sign Up</button></Link>
          <Link to={"/admin"}><button className="btn signup">Admin Panel</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
