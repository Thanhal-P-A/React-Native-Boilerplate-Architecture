import {Dimensions, Platform, Alert} from 'react-native';
import Toast from 'react-native-simple-toast';

//method to check iphoneX or 11
export function isIphoneX() {
  let dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

//method to show toast
export function toastCenter(message) {
  return Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
}

// Method to show alert with title callback
export function showAlertWithTitleCallback(
  titleHead,
  titleMessage,
  okText,
  cancelText,
  callbackFunction,
) {
  Alert.alert(
    titleHead,
    titleMessage,
    [
      {
        text: cancelText,
        style: 'cancel',
      },
      {
        text: okText,
        onPress: () => {
          callbackFunction ? callbackFunction() : null;
        },
      },
    ],
    {cancelable: true},
  );
}
