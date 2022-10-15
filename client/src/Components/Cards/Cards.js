import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addAllCreatures from '../../Redux/Actions/creatureAction';
import CardItem from '../CardItem/CardItem';
import './cards.css';

function Cards() {
  const dispach = useDispatch();
  const { creatures, modal } = useSelector((state) => state);
  useEffect(() => {
    // при переходе на другие страницы и обратно существа не добавляются заново
    if (!creatures.length) {
      dispach(addAllCreatures());
    }
  }, []);
  console.log('ssss', creatures);

  return (
    <div>
      <div className="card-layout">
        {creatures[0]?.map((el, i) => (
          <CardItem el={el} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
