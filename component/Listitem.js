import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Listitem = ({note}) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.notetext}>{note}</Text>
    </View>
  )
}

export default Listitem

const styles = StyleSheet.create({
listitem:{
    borderWidth:4,
    borderColor:"purple",
    padding:10,
    borderRadius:5,
    backgroundColor:"#fff000",
    marginTop:10
},
notetext:{
    fontSize:20,
    fontWeight:"400"
}
})