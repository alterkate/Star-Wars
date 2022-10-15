import { ADD_CREATURES_SAGA, FIND_CREATURE } from '../types/types';

const creatureReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CREATURES_SAGA:
      return [...state, payload];
    // case FIND_CREATURE:
    //   return payload;
    default:
      return state;
  }
};

export default creatureReducer;
