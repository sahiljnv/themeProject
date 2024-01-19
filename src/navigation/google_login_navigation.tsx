import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GoogleLogIn from '../components/google_login';
import LoginInfo from '../components/google_login/login_info';

export type StackProps = {
  GoogleLogIn: undefined;
  LoginInfo: undefined;
};
const GoogleLogInNavigation = () => {
  const Stack = createNativeStackNavigator<StackProps>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GoogleLogIn"
          component={GoogleLogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginInfo"
          component={LoginInfo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GoogleLogInNavigation;
