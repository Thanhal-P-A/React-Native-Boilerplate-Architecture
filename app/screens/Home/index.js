import React from 'react';
import HomeView from './homeView';
import {connect} from 'react-redux';

function HomeContainer(props) {
  return HomeView(props);
}

function mapStateToProps(state) {
  return {
    Global: state.globalReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
