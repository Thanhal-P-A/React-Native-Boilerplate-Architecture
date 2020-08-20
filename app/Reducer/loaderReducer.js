/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from './createReducer';
import * as types from '../Action/Types';

const initialState = {
  isLoginLoading: false,
};

const loaderReducer = createReducer(initialState, {
  [types.ENABLE_LOGIN_LOADER](state) {
    return {...state, isLoginLoading: true};
  },
  [types.DISABLE_LOGIN_LOADER](state) {
    return {...state, isLoginLoading: false};
  },
});

export default loaderReducer;
