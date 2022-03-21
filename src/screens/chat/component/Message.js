import { View, Text, Dimensions } from 'react-native'
import React,  { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MIRAGE, PRIMARY_COLOR } from '../../../constant/Color';
import { TEXT_PARA_REG } from '../../../constant/TextStyles';

export default function Message({item}) {
  console.log(item)
    const [currentUser] = useState({
        name: 'John Doe',
      });
  return (
    <TouchableWithoutFeedback>
    <View style={{ marginTop: 6 }}>
    {
      item.type==='info'? 
      <View
      style={{
        flexDirection:"row",
        justifyContent:"center"
      }}
      >

      <Text
      style={{
        ...TEXT_PARA_REG,
        textAlign:"center",
        fontSize:12,
        backgroundColor:MIRAGE,
        color:"#fff",
        width:120,
        paddingVertical:5,
        borderRadius:10
      }}
      >User Joined</Text>
      </View>

:
      <View
        style={{
          maxWidth: Dimensions.get('screen').width * 0.8,
          backgroundColor:item.sender === currentUser.name? PRIMARY_COLOR : MIRAGE ,
          alignSelf:
            item.sender === currentUser.name
              ? 'flex-end'
              : 'flex-start',
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 8,
          borderBottomLeftRadius:
            item.sender === currentUser.name ? 8 : 0,
          borderBottomRightRadius:
            item.sender === currentUser.name ? 0 : 8,
        }}
      >
        <Text
          style={{
              ...TEXT_PARA_REG,
            color: '#fff',
            fontSize: 16,
          }}
        >
          {item.data}
        </Text>
        <Text
          style={{
            color: '#dfe4ea',
            fontSize: 14,
            alignSelf: 'flex-end',
          }}
        >
          {item.time}
        </Text>
      </View>
    }
    </View>
  </TouchableWithoutFeedback>
  )
}