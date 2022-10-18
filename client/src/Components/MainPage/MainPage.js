import React from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css';

function MainPage() {
  return (
    <div className="Main">
      <div className="Main_left_block">
        <h1 className="Main_H1">Find all your favorite character</h1>
        <h2 className="Main_H2">
          You can find out all the information about your favorite characters
        </h2>
        <Link className="Main_link" to="/characters">
          <button type="button" className="btn">
            See more...
          </button>
        </Link>
      </div>
      <div className="Main_right_block">
        <img className="yoda" alt="yoda" src="/images/Yoda.png" />
      </div>
    </div>
  );
}

export default MainPage;
