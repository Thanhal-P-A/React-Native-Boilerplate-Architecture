import React from 'react';
import ProfileView from './profileView';
import {connect} from 'react-redux';

import * as logoutActions from '../../Action/logoutAction';

function ProfileContainer(props) {
  return ProfileView(props);
}

function mapStateToProps(state) {
  return {
    Global: state.globalReducer,
    Login: state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutActions.logout()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
