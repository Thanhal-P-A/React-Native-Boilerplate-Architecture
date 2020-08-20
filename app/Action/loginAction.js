import * as types from './Types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}
