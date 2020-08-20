import * as types from './Types';

export function enableLoginLoader() {
  return {
    type: types.ENABLE_LOGIN_LOADER,
  };
}

export function disableLoginLoader() {
  return {
    type: types.DISABLE_LOGIN_LOADER,
  };
}
