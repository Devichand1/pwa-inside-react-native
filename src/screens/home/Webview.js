import React, {useState, useEffect } from 'react'
import {View, ActivityIndicator} from 'react-native'
import RNTrustedWebActivity from 'react-native-trusted-web-activity';

export const WebView = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);
  return (
    <View
    style={{
      flex:1,
      alignItems:'center',
      justifyContent:"center",
      flexDirection:"row",
    }}
    >
    {
      isLoading?
      <View style={{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"#fff",
        flexDirection:"column",
        justifyContent:"center"
      }} >
      <ActivityIndicator color={'#000'} size='large'   />
      </View>:null
    }
      {RNTrustedWebActivity.goToPWA(
        'https://main.d31ztmznf777d4.amplifyapp.com',
      )}
    </View>
  );
};
