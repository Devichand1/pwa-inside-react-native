import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image,Dimensions, ScrollView, FlatList} from 'react-native';
import { GRAY_COLOR, GREY_CITY, MIRAGE, PRIMARY_COLOR, SECONDARY_COLOR } from '../../constant/Color';
import {TEXT_PARA_BOLD} from '../../constant/TextStyles';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
    <View
    style={styles.header}>
        <Text style={TEXT_PARA_BOLD}>React Native app</Text>
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
             <Text style={TEXT_PARA_BOLD} >Hii, User</Text>
      <Text style={TEXT_PARA_BOLD}>Good Morning</Text>
     </View>

      <View
      style={{
        flexDirection:"row"
      }}
      >
       
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
      backgroundColor:GREY_CITY
  },

});

