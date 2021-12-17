import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Dimensions } from 'react-native'
import { GRAY_COLOR, MEDIUM_COLOR, PRIMARY_COLOR, TEXT_COLOR } from '../../constant/Color';
import {TEXT_PARA_BOLD, TEXT_PARA_REG} from '../../constant/TextStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { productsReq } from '../../api/ApiCalls';
import { FlatList } from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen')
export default function SearchScreen() {
    const [data, setdata] = useState([])
    useEffect(() => {
       productsReq(productsSuccess, productFailed)
    }, [])
    const productsSuccess=(res)=>{
           console.log("product success")
           setdata(res.data)
    }
    const productFailed=(res)=>{
        console.log("product failed")
    }
    return (
        <ScrollView style={styles.container}>
        <View
        style={styles.header}>
            <Text style={TEXT_PARA_BOLD}>Search</Text>   
        </View>
        <View
        style={{
            backgroundColor:TEXT_COLOR,
            padding:5,
            borderRadius:10,
            paddingHorizontal:20,
            margin:15,
            flexDirection:"row",
            alignItems:"center",
        }}
        >
        <TextInput 
        style={{flex:1}}
            placeholder='Type to search..'
        />
        <FontAwesome name='search' size={24}  />
        </View>
        <FlatList
        data={data}
        renderItem={({item})=>
        <Product data={item} />
        }
        />
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
      product:{
          borderWidth:1,
          borderColor:"#eee",
          padding:10,
          paddingVertical:15,
          backgroundColor:"#eee",
          flexDirection:"row",
          margin:10,
          marginVertical:5,
      }
})


const Product=({data})=>{
    return <View style={styles.product} >
    <Image source={{uri: data.image[0].url}} style={{width:width/2 -70, backgroundColor:"#fff", marginRight:10,  height:70, resizeMode:"contain"}} />
    <View
    style={{flexDirection:"column", flex:1,}}
    >
           <Text style={{...TEXT_PARA_BOLD, fontSize:14}} >{data.title}</Text>
           <Text style={{...TEXT_PARA_REG, color:"#000", fontSize:14}} >{data.description}</Text>
           <View
           style={{flexDirection:"row", marginTop:"auto", justifyContent:"space-between"}}
           >
           <View
           style={{flexDirection:"row", marginTop:"auto", alignItems:"baseline",}}
           >
           <Text style={{...TEXT_PARA_BOLD, fontSize:14}} >₹ {parseInt(data.price)-data.discount}</Text>
           <Text style={{...TEXT_PARA_BOLD, textDecorationLine:"line-through", color:"#000", fontSize:12, marginLeft:10}} >₹ {data.price}</Text>
           </View>
           <Text style={{
               ...TEXT_PARA_BOLD,
               fontSize:12,
               backgroundColor:PRIMARY_COLOR,
               color:"#fff",
               paddingHorizontal:10,
               borderRadius:2,
               marginLeft:"auto"

           }} >Add to Cart</Text>
           </View>
    </View>
     
    </View>
}
