import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBG: {
    height: AppStyles.metrics.SCREEN_HEIGHT,
    width: AppStyles.metrics.SCREEN_WIDTH,
  },
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textHome: {
    fontFamily: AppStyles.fonts.bold,
  },
  iconHome: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  buttonClick: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.colors.GREY_TRANSPARENT,
    width: moderateScale(220),
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
  },
});

export default styles;
