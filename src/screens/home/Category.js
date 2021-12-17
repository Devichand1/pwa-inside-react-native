import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { categoriesReq } from '../../api/ApiCalls'
import { GRAY_COLOR } from '../../constant/Color'
import { TEXT_PARA_BOLD, TEXT_PARA_REG } from '../../constant/TextStyles'

const {width} = Dimensions.get('screen');
export default function Category() {
    const [data, setdata] = useState([])
    useEffect(() => {
       categoriesReq(categorySuccess, categoryFailed)
    }, [])
    const categorySuccess=(res)=>{
        console.log("category success")
        setdata(res.data)
    }
    const categoryFailed=()=>{
        console.log("category failed")
    }
    return (
        <View style={styles.container} >
            <Text style={{...TEXT_PARA_BOLD, marginBottom:10, textAlign:"center"}} >Categories</Text>
              <FlatList
              data={data}
              renderItem={({item})=>
              <CategoryItem data={item} />
              }
              />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginBottom:70
    },
    category:{
        backgroundColor:"#eee",
        padding:20,
        paddingRight:40,
        borderRadius:10,
        marginBottom:20
    }
})
const CategoryItem=({data})=>{
    return <TouchableOpacity
    style={styles.category}
    >
        <Text style={{...TEXT_PARA_BOLD, fontSize:14}} >{data.name}</Text>
        <View style={{flexDirection:"row"}} >
        {
            data.sub_categories.map(i=>
                <Text style={{...TEXT_PARA_REG, color:"gray",  marginRight:10, fontSize:12}}  >{i.title}</Text>
            )
        }
        </View>
    </TouchableOpacity>
}
