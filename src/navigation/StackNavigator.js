import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';;
import HomeScreen from '../screens/home';
import Splash from '../Splash';

const Stack = createStackNavigator();
const Routes=[
{
  name:"Home",
  component:HomeScreen
}
]
const StackNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    >
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
