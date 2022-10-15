import { all } from 'redux-saga/effects';
import { creatureWatcher } from './creatureSaga';

export default function* rootSaga() {
  yield all([creatureWatcher()]);
}
