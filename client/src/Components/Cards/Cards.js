import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addAllCreatures from '../../Redux/Actions/creatureAction';
import { disableLoader, enableLoader } from '../../Redux/Actions/loaderAction';
import CardItem from '../CardItem/CardItem';
import Loader from '../Loader/Loader';
import './cards.css';

function Cards() {
  const dispatch = useDispatch();
  const { creatures, loader } = useSelector((state) => state);
  useEffect(() => {
    // при переходе на другие страницы и обратно существа не добавляются заново
    if (!creatures.length) {
      dispatch(addAllCreatures(1));
    }
  }, []);

  return !loader ? (
    <div>
      <div className="card-layout">
        {creatures.map((el) => (
          <CardItem el={el} />
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Cards;
