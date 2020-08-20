import React from 'react';
import SplashView from './splashView';
import {connect} from 'react-redux';

import * as globalAction from '../../Action/globalAction';

function SplashContainer(props) {
  return SplashView(props);
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    splash: () => dispatch(globalAction.splash()),
    handleNetworkChange: (payload) =>
      dispatch(globalAction.handleNetworkChange(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
