import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addAllCreatures from '../../Redux/Actions/creatureAction';
import CardItem from '../CardItem/CardItem';
import './cards.css';

function Cards({ countPage }) {
  const dispach = useDispatch();
  const { creatures } = useSelector((state) => state);
  useEffect(() => {
    // при переходе на другие страницы и обратно существа не добавляются заново
    if (!creatures.length) {
      dispach(addAllCreatures(1));
    }
  }, []);

  return (
    <div>
      <div className="card-layout">
        {creatures?.map((el) => (
          <CardItem el={el} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
