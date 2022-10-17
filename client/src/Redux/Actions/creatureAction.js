import { ADD_CREATURES } from '../types/types';

const addAllCreatures = (params) => ({
  type: ADD_CREATURES,
  payload: params,
});

export default addAllCreatures;
