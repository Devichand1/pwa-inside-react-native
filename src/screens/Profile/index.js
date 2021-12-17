import React from 'react'
import { View, Text, ScrollView,Image, StyleSheet } from 'react-native'
import { GRAY_COLOR } from '../../constant/Color'
import { TEXT_PARA_BOLD, TEXT_PARA_REG } from '../../constant/TextStyles'
import dp from '../../assets/Images/defaultprofile.png'
export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
        <View
        style={styles.header}>
            <Text style={TEXT_PARA_BOLD}>My Profile</Text>   
        </View>
        <View style={styles.profilebody} >
         <Image source={dp} style={{width:80, height:80, alignSelf:"center", resizeMode:"contain"}}  />
        <Text style={{...TEXT_PARA_BOLD, textAlign:"center", marginTop:10,}} >Dev Inikhiya</Text>

        <Text style={styles.listtext} >My Orders</Text>
        <Text style={styles.listtext} >Contact</Text>
        <Text style={styles.listtext} >Order by Whatsapp</Text>
        <Text style={styles.listtext} >Share the App</Text>
        <Text style={styles.listtext} >Login</Text>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        paddingBottom:50,
    
        
      },
      header:{
          borderBottomWidth:1,
          padding:15,
          borderBottomColor:GRAY_COLOR
      },
      profilebody:{
        flexDirection:"column",
        textAlign:"center",
        marginTop:20,
      },
      listtext:{
        ...TEXT_PARA_REG,
         color:'gray',
          marginLeft:20,
           padding:20,
            fontSize:15, 
            borderBottomColor:'#eee',
            borderBottomWidth:2,
      }
})
