import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';

import * as Functions from '../../Functions';
import Loader from '../../Components/loader';
import images from '../../Assets/Images';
import styles from './styles';
import AppStyles from '../../AppStyles';

function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function _setUsername(text) {
    setUsername(text);
  }

  function _setPassword(text) {
    setPassword(text);
  }

  function _onLogin() {
    Keyboard.dismiss();
    const params = {
      username,
      password,
    };

    username == '' || password == ''
      ? Functions.toastCenter('username/password cannot be empty')
      : props.onLogin(params);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={AppStyles.colors.SECONDARY}
        barStyle="dark-content"
      />
      {props.Loader.isLoginLoading && Loader()}
      <ImageBackground style={styles.imageBG} source={images.loginBG}>
        <View style={styles.main}>
          <TextInput
            style={styles.textInputUserPass}
            onChangeText={(text) => _setUsername(text)}
            placeholder={'Username'}
            placeholderTextColor={AppStyles.colors.GREY_TRANSPARENT}
          />
          <TextInput
            style={styles.textInputUserPass}
            onChangeText={(text) => _setPassword(text)}
            placeholder={'Password'}
            placeholderTextColor={AppStyles.colors.GREY_TRANSPARENT}
          />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              _onLogin();
            }}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LoginView;
