import {takeLatest, all} from 'redux-saga/effects';
import * as types from '../Action/Types';
import loginSaga from './loginSaga';

export default function* watch() {
  yield all([takeLatest(types.LOGIN_REQUEST, loginSaga)]);
}
