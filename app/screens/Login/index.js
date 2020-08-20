import React, {Component} from 'react';
import LoginView from './loginView';
import {connect} from 'react-redux';

import * as loginActions from '../../Action/loginAction';

function LoginContainer(props) {
  return LoginView(props);
}

function mapStateToProps(state) {
  return {
    Loader: state.loaderReducer,
    Login: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (payload) => dispatch(loginActions.loginRequest(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
