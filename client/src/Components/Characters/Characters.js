import React from 'react';
import Cards from '../Cards/Cards';
import './characters.css';

function Characters() {
  return (
    <div>
      <h1 className="characters_h1">
        Creatures for you to choose your favorite
      </h1>
      <div className="characters_input_container">
        <input className="characters_input" type="text" placeholder="find..." />
      </div>

      <Cards />
    </div>
  );
}

export default Characters;
