import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.SECONDARY,
  },
  imageBG: {
    height: AppStyles.metrics.SCREEN_HEIGHT,
    width: AppStyles.metrics.SCREEN_WIDTH,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(150),
  },
  textInputUserPass: {
    alignSelf: 'center',
    width: moderateScale(200),
    padding: moderateScale(5),
    marginBottom: moderateScale(15),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    color: AppStyles.colors.BLACK,
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.colors.PRIMARY,
    width: moderateScale(120),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  textLogin: {
    color: AppStyles.colors.WHITE,
    fontSize: moderateScale(14),
  },
});

export default styles;
