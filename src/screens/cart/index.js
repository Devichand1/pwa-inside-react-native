import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { GRAY_COLOR, PRIMARY_COLOR } from '../../constant/Color'
import { TEXT_PARA_BOLD } from '../../constant/TextStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('screen')
export default function Cart() {


    const handleNext=async()=>{
    await AsyncStorage.setItem("my","okk")
        setTimeout(async() => {
            const get= await AsyncStorage.getItem("my")
            console.log("body",get)
        }, 2000);
    }
    return (
        <ScrollView style={styles.container}>
        <View
        style={styles.header}>
            <Text style={TEXT_PARA_BOLD}>Cart</Text>   
        </View>
        <View
        style={styles.body}
        >
        <Pressable onPress={handleNext} style={styles.btn}>
    <Text style={{...TEXT_PARA_BOLD, color:"#fff", textAlign:"center"}} >Next</Text>
    </Pressable>
        </View>
    
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height,
        backgroundColor:"#fff",
         flexDirection:"column",
      },
      header:{
          borderBottomWidth:1,
          padding:15,
          borderBottomColor:GRAY_COLOR
      },
      body:{
          flex:1,
          height: height-250
      },
      btn:{
          ...TEXT_PARA_BOLD,
          backgroundColor:PRIMARY_COLOR,
          width:width-20,
          marginLeft:10,
          color:'#fff',
          position:"absolute",
          bottom:10,
          padding:10,
          textAlign:"center"
      }
})
