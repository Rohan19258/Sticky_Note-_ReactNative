import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Listitem from '../component/Listitem'

const AllNoteScreen = ({notes}) => {
  const renderItem=(itemData)=>{
    return <Listitem note={itemData.item.note}/>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>All Notes</Text>
     <FlatList data={notes} renderItem={renderItem}/>
    </View>
  )
}

export default AllNoteScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:10
  },
  headtext:{
    fontSize:30,
    fontWeight:"700",
    borderWidth:4,
    borderRadius:10,
    borderColor:"#f5f5f5",
    padding:10,
    color:"black"
  }
})