import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { top25Req } from '../../api/ApiCalls'
import { PRIMARY_COLOR } from '../../constant/Color'
import { TEXT_PARA_BOLD, TEXT_PARA_REG } from '../../constant/TextStyles'
import Top25Img from './../../assets/Top.png'
const {width} = Dimensions.get('screen')
export default function Top25() {
    const [data, setdata] = useState([])
    useEffect(() => {
        top25Req(dataSuccess, dataFailed)
    }, [])
    const dataSuccess=(res)=>{
     console.log("top 25 success")
     setdata(res.data)
    }
    const dataFailed=(res)=>{
        console.log("top 25 failed")
    }
    return (
        <View style={styles.container} >
        <Image source={Top25Img} style={styles.backimg} />
          <FlatList
          data={data}
          contentContainerStyle={styles.list}
           horizontal
           renderItem={({item})=>
           <Product data={item}/>
           }
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width,
        padding:10,
        height:280,
        marginTop:20,
    },
    backimg:{
        width:width-20,
        marginLeft:10,
        height:280,
        borderRadius:5,
        position:"absolute",
        // resizeMode:"contain"

    },
    list:{
      marginTop:70, 
      marginLeft:50, 
    },
    product:{
        backgroundColor:"#fff",
        marginHorizontal:10,
        padding:20,
        height:180
    },
    detailsbtn:{
       
        backgroundColor:PRIMARY_COLOR,
        // alignSelf:"center",
        textAlign:"center",
        paddingHorizontal:5,
        marginTop:10,
        borderRadius:5,
        paddingVertical:8,
    },
    btntext:{
        ...TEXT_PARA_BOLD,
        color:"#FFF",
        fontSize:14,
        textAlign:"center",
    }
})

const Product=({data})=>{
 return <View style={styles.product} >
 <Image source={{uri:data.image[0].url}} style={{width:90, height:50, resizeMode:"contain"}} />
     <Text style={{...TEXT_PARA_BOLD, textAlign:"center", fontSize:14}} >{data.title}</Text>
    <View
    style={{flexDirection:"row", marginTop:10, alignItems:"baseline"}}
    >
     <Text style={{...TEXT_PARA_BOLD, textAlign:"center", fontSize:12}} >₹ {parseInt(data.price)-data.discount}</Text>
     <Text style={{...TEXT_PARA_REG, textDecorationLine:"line-through", color:"#000", textAlign:"center", marginLeft:5, fontSize:10}}>₹ {data.price}</Text>
     </View>
     <TouchableOpacity style={styles.detailsbtn}>
              <Text style={styles.btntext}>{"View"}</Text>
          </TouchableOpacity>
 </View>
}
