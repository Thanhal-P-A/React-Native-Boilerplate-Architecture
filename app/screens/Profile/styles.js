import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AppStyles from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    padding: moderateScale(20),
    marginTop: moderateScale(30),
  },
  iconProfile: {
    height: moderateScale(50),
    width: moderateScale(50),
    paddingRight: moderateScale(20),
  },
  buttonClick: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppStyles.colors.GREY_TRANSPARENT,
    margin: moderateScale(20),
    width: moderateScale(220),
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
  },
});

export default styles;
