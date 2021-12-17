import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { flashSaleReq } from '../../api/ApiCalls'
import { GRAY_COLOR, PRIMARY_COLOR } from '../../constant/Color'
import { TEXT_PARA_BOLD, TEXT_PARA_REG } from '../../constant/TextStyles'

export default function NeverSeen() {
    const [data, setdata] = useState([])
    useEffect(() => {
       flashSaleReq(dataSucess, dataFailed)
    }, [])

    const dataSucess=(res)=>{
        console.log(" success res")
        setdata(res.data)
    }
    const dataFailed=(res)=>{
        console.log("failed res",res)
    }
    return (
        <View style={styles.container} >
        <View
        style={{flexDirection:"row",
         justifyContent:"space-between",
        
         }}
        >
        <Text style={{...TEXT_PARA_BOLD, fontSize:14 }} >Never Seen Before Price </Text>
        <Text style={{
            ...TEXT_PARA_BOLD,
         fontSize:12,
        backgroundColor:PRIMARY_COLOR,
        color:"#fff",
        padding:4,
        paddingHorizontal:8,
        borderRadius:4,
          }} >View All</Text>
        </View>
          <FlatList
          data={data}
          scrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>
         <Product data={item}/>
          }
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:GRAY_COLOR,
        padding:20,
        marginTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    product:{
        backgroundColor:"#fff",
        padding:10,
        marginTop:10,
        borderRadius:4,
        marginHorizontal:10
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

const Product =({data})=>{
    console.log(data)
   return  <View
   style={styles.product}
   >
   <Image 
   style={{
       width:"100%",
       height:70,
       resizeMode:"contain"
   }}
   source={{uri:data.image[0].url}} 

   />
          <Text style={{...TEXT_PARA_BOLD, fontSize:12, width:140}} numberOfLines={1}  >{data.title}</Text>
          <View
          style={{flexDirection:"row", justifyContent:"center", alignItems:"baseline", marginTop:5,}}
          >
          <Text style={{...TEXT_PARA_BOLD, fontSize:12, textAlign:"center", color:"#000"}} numberOfLines={1}  > ₹ {parseInt(data.price)-data.discount}/-</Text>
          <Text style={{...TEXT_PARA_REG,  textDecorationLine:"line-through", fontSize:10, textAlign:"center", color:"#000"}} numberOfLines={1}  > ₹ {data.price} /-</Text>
          </View>
          
          <Text style={{...TEXT_PARA_REG, fontSize:10, width:140 , color:"#000"}} numberOfLines={1}  >{"Every Day 8pm to 10pm"}</Text>
          <TouchableOpacity style={styles.detailsbtn}>
              <Text style={styles.btntext}>{"Details"}</Text>
          </TouchableOpacity>
          
          </View>
}
