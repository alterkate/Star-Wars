/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { disableLoader, enableLoader } from '../Redux/Actions/loaderAction';
import {
  ADD_CREATURES,
  ADD_CREATURES_SAGA,
} from '../Redux/types/types';

async function getCreatures(params) {
  const url = 'https://swapi.dev/api/people/';
  return axios.get(url, { params });
}

export function* creaturesWorker(action) {
  yield delay(500);
  yield put(enableLoader());
  const res = yield call(getCreatures, action.payload);
  yield put({
    type: ADD_CREATURES_SAGA,
    payload: res.data.results,
  });
  yield put(disableLoader());
}

export function* creatureWatcher() {
  yield takeLatest(ADD_CREATURES, creaturesWorker);
}
