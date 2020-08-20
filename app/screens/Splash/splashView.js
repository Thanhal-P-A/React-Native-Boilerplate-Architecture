import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import styles from './styles';

function SplashView(props) {
  useEffect(() => {
    _handleConnectivityChange();

    setTimeout(() => {
      props.splash();
    }, 1000);
  });

  function _handleConnectivityChange() {
    const unsubscribe = NetInfo.addEventListener((state) => {
      props.handleNetworkChange(state.isInternetReachable);
    });
    // unsubscribe();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.main}>
        <Text>Splash Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default SplashView;
