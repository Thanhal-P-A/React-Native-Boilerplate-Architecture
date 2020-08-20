//Component which showed up in a top of screen when internet is not reachable by checking isNetworkAvailable value in globalReducer

import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import AppStyles from '../AppStyles';

export default function NetInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWait}>internet not reachable</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    width: AppStyles.metrics.SCREEN_WIDTH,
    padding: moderateScale(10),
    backgroundColor: AppStyles.colors.RED,
  },
  textWait: {
    fontSize: moderateScale(12),
    color: AppStyles.colors.WHITE,
  },
});
