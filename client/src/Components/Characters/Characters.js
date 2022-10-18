import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import addAllCreatures from '../../Redux/Actions/creatureAction';
import Cards from '../Cards/Cards';
import './characters.css';

function Characters() {
  const [countPage, setCountPage] = useState(2);
  const dispatch = useDispatch();

  const changeInputHandler = (e) => {
    if (e.target.value) {
      dispatch(addAllCreatures({ search: e.target.value }));
    }
  };

  const changePageCounter = () => {
    dispatch(addAllCreatures({ page: countPage }));
    setCountPage(countPage === 9 ? 1 : countPage + 1);
  };
  return (
    <div>
      <h1 className="characters_h1">
        Creatures for you to choose your favorite
      </h1>
      <div className="characters_input_container">
        <input
          className="characters_input"
          type="text"
          placeholder="find..."
          name="input"
          onChange={changeInputHandler}
        />
      </div>
      <Cards countPage={countPage} />
      <input
        onClick={changePageCounter}
        className="characters_load_more"
        type="image"
        alt="next"
        src="./images/load_more.png"
      />
    </div>
  );
}

export default Characters;
