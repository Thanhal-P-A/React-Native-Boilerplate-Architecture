/* Login Reducer
 * handles login states in the app which need to be whitelisted
 */
import createReducer from './createReducer';
import * as types from '../Action/Types';

const initialState = {
  isLoggedIn: false,
  id: -1,
  username: '',
};

const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.payload.username,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      id: action.response.id ? action.response.id : -1,
      isLoggedIn: true,
    };
  },
  [types.LOGOUT](state, action) {
    return {
      ...state,
      isLoggedIn: false,
      id: -1,
      username: '',
    };
  },
});

export default loginReducer;
