import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image,Dimensions, ScrollView, FlatList} from 'react-native';
import { getBannerReq } from '../../api/ApiCalls';
import ButtonComponent from '../../components/ButtonComponent';
import { GRAY_COLOR, LIGHT_BLUE, MEDIUM_COLOR, MIRAGE, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constant/Color';
import {TEXT_PARA_BOLD, TEXT_PARA_REG} from '../../constant/TextStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import { Images } from '../../constant';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('screen')
export default function HomeScreen() {
     const user = useSelector(state=>state.user)
  const navigation = useNavigation()
  const TABS=[
    {
      "title":"Dashboard",
      "icon":"dashboard",
      "route":"Chatroom",
       params:{roomId:user.chatroomId}
    },
    {
      "title":"Chatrooom",
      "icon":"mark-chat-unread",
      "route":"Chatroom"
    }
  ]
  return (
    <ScrollView style={styles.container}>
    <View
    style={styles.header}>
        <Text style={TEXT_PARA_BOLD}>Admin</Text>
        <Image style={{
                  width:30, height:30, resizeMode:"contain"
              }}  source={Images.appLogo} />   
    </View>
    <View 
     style={{ 
       padding:16,
     }} >
     <View 
     style={{
       backgroundColor:PRIMARY_COLOR,
       padding:15,
       borderRadius:10,
       margin:5,
     }}
     >
             <Text style={TEXT_PARA_BOLD} >Hii, {user.user.username}</Text>
      <Text style={TEXT_PARA_BOLD}>Good Morning</Text>
     </View>

      <View
      style={{
        flexDirection:"row"
      }}
      >
      {
       TABS.map(i=> 
         <ButtonComponent
         bouncy
         rippleColor={MIRAGE}
         onPressAction={()=>navigation.navigate({
           name:i.route,
           params:{roomId:user.chatroomId}
         })}
         styling={{
           height:120,
           flex:1,
           backgroundColor:MIRAGE,
             margin:5,
         }}
         customChild={
           <View style={ {height:120,
           flex:1,
           flexDirection:"column",
           alignItems:"center",
           justifyContent:"center",
           backgroundColor:MIRAGE,
             margin:5,}} >
             <MaterialIcons size={38}  name={i.icon} color="#fff"   />
           <Text style={{...TEXT_PARA_BOLD, marginTop:5 }} >{i.title}</Text>
           </View>
         }
         />
        )
      }
       
      </View>
    </View>
     <View>
     </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:SECONDARY_COLOR,

    
  },
  header:{
      borderBottomWidth:1,
      padding:15,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      borderBottomColor:GRAY_COLOR,
      backgroundColor:MIRAGE
  },

});

