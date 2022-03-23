import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux'
import store from './src/rematch/index'
export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer> 
       </Provider>
  );
}