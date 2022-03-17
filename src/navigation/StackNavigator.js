import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import ChatScreen from '../screens/chat';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import Splash from '../Splash';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const Routes=[
{
  name:"Home",
  component:HomeScreen
},
{
  name:"Login",
  component:LoginScreen
},
{
  name:"Chatroom",
  component:ChatScreen
}
]
const StackNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Login"
    >
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        component={TabNavigator}
      />
      {
        Routes.map(i=>
        <Stack.Screen
        name={i.name}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          }}
        component={i.component}
      />
        )
      }
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
