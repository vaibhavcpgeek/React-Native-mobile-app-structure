import {all} from 'redux-saga/effects';
import {appSaga} from './containers/organisms/AppWrapper/sagas';

export default function* rootSaga() {
  yield all([appSaga]);
}
