import {put, call, delay} from 'redux-saga/effects';

import loginUser from '../Api/methods/loginUser';
import * as loginActions from '../Action/loginAction';
import * as loadingActions from '../Action/loadingAction';

export default function* loginAsync() {
  yield put(loadingActions.enableLoginLoader());

  //how to call api
  //const response = yield call(loginUser, action.payload);

  //mock response
  const response = {success: true, data: {id: 1}};

  if (response.success) {
    yield delay(1000); // just to show loader for 1 seconds for mock response
    yield put(loginActions.loginResponse(response.data));
    yield put(loadingActions.disableLoginLoader());
  } else {
    yield put(loadingActions.disableLoginLoader());
  }
}
