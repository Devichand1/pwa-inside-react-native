import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image,Dimensions, ScrollView, FlatList} from 'react-native';
import { getBannerReq } from '../../api/ApiCalls';
import { GRAY_COLOR, MEDIUM_COLOR } from '../../constant/Color';
import {TEXT_PARA_BOLD, TEXT_PARA_REG} from '../../constant/TextStyles';
import Category from './Category';
import NeverSeen from './NeverSeen';
import Top25 from './Top25';


const {width, height} = Dimensions.get('screen')
export default function HomeScreen() {
  const [banners, setbanners] = useState([])
  useEffect(() => {
    getBannerReq(bannerSuc, bannerFai)
  }, [])
  const bannerSuc=(res)=>{
    console.log("succes")
    setbanners(res.data)
  }
  const bannerFai=()=>{
    console.log("FAILED")
  }
  return (
    <ScrollView style={styles.container}>
    <View
    style={styles.header}>
        <Text style={TEXT_PARA_BOLD}>Bharat Bhandar</Text>   
    </View>
    <View style={styles.banner} >
    <FlatList 
      // horizontal
       data={banners}
      // contentContainerStyle={{flex:1}}
      pagingEnabled
      horizontal
      
      scrollEnabled
       keyExtractor={item=>item.id}
      renderItem={({item})=> 
        <Slide img={item.image[0].url} />

      }
      />
    </View>
    <NeverSeen/>
    <Top25/>
    <Category/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",

    
  },
  header:{
      borderBottomWidth:1,
      padding:15,
      borderBottomColor:GRAY_COLOR
  },
  banner:{
   width,
  //  backgroundColor:"#ff0",
   height:180,
   marginTop:20
  }
});

const Slide=(props)=>{
  return <Image source={{uri:props.img}} style={{
    width:width-10, 
    height:170,
    borderRadius:10,
     resizeMode:"contain"
     }}/>
}
