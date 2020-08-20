import createReducer from './createReducer';
import * as types from '../Action/Types';

const initialState = {
  isSplash: true,
  isNetworkAvailable: false,
};

const globalReducer = createReducer(initialState, {
  [types.SPLASH](state) {
    return {...state, isSplash: false};
  },
  [types.HANDLE_NETWORK_CHANGE](state, action) {
    return {...state, isNetworkAvailable: action.payload};
  },
});

export default globalReducer;
