import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constant/Constant'

const BackButton = ({onButtonClick}) => {
  return (
    <View style={styles.container}>
        <View style={styles.backbutton}>
        <Button  onPress={()=>onButtonClick(ScreenType.home)} color={"grey"} title="< Back" />
        </View>

    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'flex-start'
    },
    backbutton:{
        margin:10
    }
})