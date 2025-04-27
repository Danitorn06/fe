import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">HotelAffiliate</div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/api-explorer">API Explorer</Link></li>
        <li><Link to="/register-referrer">Register Referrer</Link></li>
      </ul>
      <div className="navbar-user" onClick={() => setShowDropdown(!showDropdown)}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" />
        <span>Username ▾</span>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li>My Profile</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
