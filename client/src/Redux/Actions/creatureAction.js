import { ADD_CREATURES, FIND_CREATURE } from '../types/types';

const addAllCreatures = (params) => ({
  type: ADD_CREATURES,
  payload: params,
});

// export const findCreatureAction = (value) => ({
//   type: FIND_CREATURE,
//   payload: value,
// });

export default addAllCreatures;
