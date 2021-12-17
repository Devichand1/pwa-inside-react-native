import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { TEXT_PARA_REG } from '../../constant/TextStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { GRAY_COLOR, PRIMARY_COLOR } from '../../constant/Color'
export default function HorizontalList({title}) {
    return (
        <View style={styles.container} >
        <View
        style={styles.header}
        >
                    <Text style={TEXT_PARA_REG} >{title}</Text>
            <MaterialIcons size={28} name="keyboard-arrow-right" color={PRIMARY_COLOR} />    
        </View>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4,5,6,7,8]}
          renderItem={({item})=>
          <TouchableOpacity           
          style={styles.item} >
          <Text style={{...TEXT_PARA_REG, fontSize:12, color:"gray", textAlign:"center" }} >345</Text>
          <Text style={{...TEXT_PARA_REG, textAlign:"center", fontSize:20, color:PRIMARY_COLOR }} >345</Text>
          <View
          style={{
              marginTop:10
          }}
          > 
          <Text style={{...TEXT_PARA_REG, fontSize:12, color:"gray", textAlign:"center" }}>CIPLA</Text>
          <Text style={{...TEXT_PARA_REG, fontSize:12, color:"gray", textAlign:"center" }}>item</Text>
          <Text style={{...TEXT_PARA_REG, fontSize:12, color:"gray", textAlign:"center" }}>876456</Text>
          </View>
         
          </TouchableOpacity>
          }
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:15,
        paddingTop:10
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    item:{
        borderColor:GRAY_COLOR,
        borderWidth:1,
        width:120,
        padding:15,
        marginRight:10,
        borderRadius:6,
        backgroundColor:GRAY_COLOR
    }
})




