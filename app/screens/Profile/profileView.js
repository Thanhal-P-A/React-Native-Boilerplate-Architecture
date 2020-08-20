import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import * as Functions from '../../Functions';
import netInfo from '../../Components/netInfo';
import styles from './styles';
import icons from '../../Assets/Icons';

function ProfileView(props) {
  function _logout() {
    Functions.showAlertWithTitleCallback(
      'Logout',
      'Are you sure ?',
      'logout',
      'cancel',
      () => props.logout(),
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={true}
        backgroundColor={'white'}
        barStyle="dark-content"
      />
      {!props.Global.isNetworkAvailable && netInfo()}
      <View style={styles.main}>
        <Image style={styles.iconProfile} source={icons.profile} />
        <Text>{'user : ' + props.Login.username}</Text>
      </View>
      <TouchableOpacity style={styles.buttonClick} onPress={() => _logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ProfileView;
