import 'react-native-gesture-handler';
import * as React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import LoginScreen from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

function RootNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.Global.isSplash ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
        ) : props.Login.isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return {
    Login: state.loginReducer,
    Global: state.globalReducer,
  };
}

export default connect(mapStateToProps)(RootNavigator);
