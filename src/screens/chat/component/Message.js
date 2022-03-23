import { View, Text, Dimensions } from 'react-native'
import React,  { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MIRAGE, PRIMARY_COLOR } from '../../../constant/Color';
import { TEXT_PARA_REG } from '../../../constant/TextStyles';

export default function Message({item}) {
    const [currentUser] = useState({
        name: 'John Doe',
      });
      function getTime(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
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
          backgroundColor:item.sender.isAdmin? PRIMARY_COLOR : MIRAGE ,
          alignSelf:
            item.sender.isAdmin
              ? 'flex-end'
              : 'flex-start',
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 8,
          borderBottomLeftRadius:
            item.sender.isAdmin ? 8 : 0,
          borderBottomRightRadius:
            item.sender.isAdmin ? 0 : 8,
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
          {getTime(new Date(item.sentAt))}
        </Text>
      </View>
    }
    </View>
  </TouchableWithoutFeedback>
  )
}