import React from 'react'
import { View,Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Images } from '../../constant'
import { BG_COLOR } from '../../constant/Color';

const {width, height} = Dimensions.get('screen');
export default function LoginScreen() {
    return (
        <View style={styles.container}>
        <Image source={Images.login} style={styles.topImg}  />
         <View style={styles.body} >
             <Text>Body</Text>
         </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:BG_COLOR,
        flex:1
    },
    topImg:{
        width:width,
        height:height*0.3,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    body:{
        padding:20
    }
})
