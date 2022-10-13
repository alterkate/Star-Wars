import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="sticky__t-0">
      <div className="navbar">
        <div>
          <Link to="/">
            <img
              alt="logo"
              src="/images/Star_wars_logo.png"
              style={{
                height: 70,
              }}
            />
          </Link>
        </div>
        <div>
          <Link className="menu_links" to="/">
            Main
          </Link>
          <Link className="menu_links" to="/characters">
            Characters
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
