import axios from 'axios';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { ADD_CREATURES, ADD_CREATURES_SAGA, FIND_CREATURE } from '../Redux/types/types';

const url = 'https://swapi.dev/api/people/';

export function* creatureWorker() {
  const res = yield axios.get(url);
  yield put({ type: ADD_CREATURES_SAGA, payload: res.data.results });
}

export function* creatureWatcher() {
  yield takeLatest(ADD_CREATURES, creatureWorker);
}
