import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
import React,{useState} from 'react'
import { ScreenType } from '../constant/Constant'

const AddNote = ({onSave,onExit}) => {
  const [enteredtext,setenteredtext]=useState("")
  // console.log(enteredtext)
  const handlechange=(val)=>{
    setenteredtext(val)
  }
  const handleclick=()=>{
  if(enteredtext.trim().length > 0){

    onSave(enteredtext)
    onExit(ScreenType.allNotes)
  }
  }
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
      <Text style={styles.title}>Add Note</Text>
      <View >
        <TextInput  onChangeText={val=>setenteredtext(val)}  style={styles.input}/>
        </View>
<Button title="ADD" onPress={handleclick}/>
      </View>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  formcontainer:{
backgroundColor:"#f5f5f5",
padding:10,
marginVertical:10,
marginHorizontal:10

  },
  title:{
fontSize:20,
fontWeight:'bold',
color:"black"
  },
  input:{
    marginVertical:20,
    width:"100%",
    borderBottomWidth:2,
    fontSize:16,
    padding:10
  }
})