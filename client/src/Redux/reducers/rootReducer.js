import { combineReducers } from 'redux';
import creatureReducer from './creatureReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  creatures: creatureReducer,
  loader: loaderReducer,
});

export default rootReducer;
