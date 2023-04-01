/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './component/Header';
import HomeScreen from './screen/HomeScreen';
import { ScreenType } from './constant/Constant';
import AllNoteScreen from './screen/AllNoteScreen';
import AddNote from './screen/AddNote';
import BackButton from './component/BackButton';



function App() {

  const[screen,setScreen]=useState(ScreenType.home)
  const[notes,setNotes]=useState([])
let content;
if(screen===ScreenType.addNote){
 content= <AddNote onSave={(data)=>setNotes([...notes,{id:Date.now(),note:data}])}   onExit={(data)=>{setScreen(data)}}/>
}else if(screen===ScreenType.allNotes){
 content= <AllNoteScreen notes={notes} />
}else if(screen===ScreenType.home){
content=  <HomeScreen onExit={(data)=>{setScreen(data)}}/>
}




  return (
    <View style={styles.container}>
<Header/>
{/* <HomeScreen onExit={(data)=>{setScreen(data)}} /> */}
{screen!==ScreenType.home &&(<BackButton onButtonClick={(data)=>{setScreen(data)}}/>)}
{content}
<StatusBar  />
    </View>
  );
}

const styles = StyleSheet.create({
 
container:{
  flex:1,
  // backgroundcolor:"white"
}

});


export default App;
