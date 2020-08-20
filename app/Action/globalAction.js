import * as types from './Types';

export function splash() {
  return {
    type: types.SPLASH,
  };
}

export function handleNetworkChange(payload) {
  return {
    type: types.HANDLE_NETWORK_CHANGE,
    payload,
  };
}
