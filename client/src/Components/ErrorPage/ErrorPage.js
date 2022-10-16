import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css';

function ErrorPage() {
  return (
    <div className="error_container">
      <h1 className="error_code">404</h1>
      <img
        className="error_death_star"
        src="./images/death_star.png"
        alt="death star"
      />
      <Link to="/">
        <button type="button" className="error_btn">
          Return
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
