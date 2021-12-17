import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/login';
import Splash from '../Splash';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={Splash}
      />
        <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
