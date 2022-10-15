import React, { useState } from 'react';
import Modal from '../ChangeModal/Modal';
import './cardItem.css';

function CardItem({ el }) {
  const [isOpen, setIsOpen] = useState(false);
  const gender = {
    female: 'pink',
    male: 'green',
    hermaphrodite: 'yellow',
    na: 'n/a',
  };
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="card-layout__item"
        key={el.created}
      >
        <div className="card-layout__item_name">{el.name}</div>
        <div className="card-layout__item_size">
          <div className="card-layout__item_size_properties">{el.mass}</div>
          <div className="card-layout__item_size_properties">{el.height}</div>
        </div>
        <div className="card-layout__item_size_properties_naming">
          <span>mass</span>
          <span>height</span>
        </div>
        <div className="card-layout__item_gender_year">
          {el.gender !== 'n/a' ? (
            <div className={`card-layout__item_gender_${gender[el.gender]}`}>
              {el.gender}
            </div>
          ) : (
            <div />
          )}
          {el.birth_year !== 'unknown' ? (
            <div className="card-layout__item_birthYear">{el.birth_year}</div>
          ) : (
            <div />
          )}
        </div>
      </div>
      <Modal
        shown={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <div className="modal_item">
          <div className="modal_item_image_container">
            <img
              className="modal_item_image"
              src={`/images/${el.gender}.png`}
              alt={`${el.gender}`}
            />
          </div>
          <div className="modal_item_info">
            <h1>{el.name}</h1>
            <div className="modal_item_info_color">
              <p>{`hair color: ${el.hair_color}`}</p>
              <p>{`skin color: ${el.skin_color}`}</p>
              <p>{`eye color: ${el.eye_color}`}</p>
            </div>
            <div className="modal_item_size">
              <div className="modal_item_size_properties">{el.mass}</div>
              <div className="modal_item_size_properties">{el.height}</div>
            </div>
            <div className="modal_item_size_properties_naming">
              <span>mass</span>
              <span>height</span>
            </div>
            <div className="card-layout__item_gender_year">
              {el.gender !== 'n/a' ? (
                <div
                  className={`card-layout__item_gender_${gender[el.gender]}`}
                >
                  {el.gender}
                </div>
              ) : (
                <div />
              )}
              {el.birth_year !== 'unknown' ? (
                <div className="card-layout__item_birthYear">
                  {el.birth_year}
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CardItem;
