import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/home';
import {WebView} from '../screens/home/Webview';
import Splash from '../Splash';

const Stack = createStackNavigator();

const Routes = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'webview',
    component: WebView,
  },
  {
    name: 'Splash',
    component: Splash,
  },
];
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      {Routes.map((i, index) => (
        <Stack.Screen
          name={i.name}
          key={`routes-${index}`}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          component={i.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
