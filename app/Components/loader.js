//Loader component to show in screen when waiting for a response

import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import AppStyles from '../AppStyles';

export default function Loader() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ActivityIndicator size="large" color={AppStyles.colors.PRIMARY} />
        <Text style={styles.textWait}>Please wait...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    height: AppStyles.metrics.SCREEN_HEIGHT,
    width: AppStyles.metrics.SCREEN_WIDTH,
    backgroundColor: AppStyles.colors.GREY_TRANSPARENT,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    height: moderateScale(70),
    paddingHorizontal: moderateScale(25),
    borderRadius: moderateScale(5),
    backgroundColor: AppStyles.colors.WHITE,
  },
  textWait: {
    marginHorizontal: moderateScale(20),
    fontSize: moderateScale(14),
  },
});
