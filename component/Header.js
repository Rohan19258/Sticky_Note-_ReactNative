import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.Headcontainer}>
      <Text style={styles.HeaderTitle}>Your Sticky Notes</Text>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
Headcontainer:{
    width:"100%",
    height:"13%",
    backgroundColor:"purple",
    // paddingTop:10,
},
HeaderTitle:{
color:Platform.OS==="android"?"white":"purple",
fontSize:30,
padding:10,
fontWeight:'bold',
marginTop:10
}
})