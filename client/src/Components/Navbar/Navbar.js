import React, { useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function getActiveClassName({ isActive }) {
  return isActive ? 'selected' : 'menu_links';
}
function Navbar() {
  return (
    <div className="sticky__t-0">
      <div className="navbar">
        <div>
          <Link to="/">
            <img
              className="navbar_logo"
              alt="logo"
              src="/images/Star_wars_logo.png"
            />
          </Link>
        </div>
        <div className="navbar_links">
          <NavLink className={getActiveClassName} to="/" end>
            Main
          </NavLink>
          <div className="divider" />
          <NavLink className={getActiveClassName} to="characters" end>
            Characters
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
