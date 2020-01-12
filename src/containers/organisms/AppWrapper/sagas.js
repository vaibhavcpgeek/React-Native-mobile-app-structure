import {call, put, takeLatest, select} from 'redux-saga/effects';
import {fetchDataSuccess, fetchDataError} from './actions';
import {FETCH_DATA} from './constants';

function fetchAppData(URI, options) {
  return fetch(URI, options);
}

export function* loadAppSaga() {
  try {
    const data = yield call(fetchAppData, '', additionalFetchOptions);
    // valid response
    if (data.response) {
      yield put(fetchDataSuccess(data.response));
    } else {
      yield put(fetchDataError({error: ''}));
    }
  } catch (err) {
    yield put(fetchDataError(err));
  }
}

export default function* appSaga() {
  yield takeLatest(FETCH_DATA, loadAppSaga);
}
