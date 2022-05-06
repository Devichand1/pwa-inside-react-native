import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {PRIMARY_COLOR} from './constant/Color';

export default function Splash() {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('webview');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={PRIMARY_COLOR} size={'large'} />
    </View>
  );
}
