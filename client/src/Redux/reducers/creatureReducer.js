import { ADD_CREATURES_SAGA } from '../types/types';

const creatureReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CREATURES_SAGA:
      return [...payload];
    default:
      return state;
  }
};

export default creatureReducer;
