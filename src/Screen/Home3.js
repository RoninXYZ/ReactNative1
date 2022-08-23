import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Home3() {
    const [name , setName] = useState('shaun');
    const [person , setPerson] = useState({
        name : "Mario" , age : 40,
    })

   const clickHandler = ()=>{
     setName('chun-li');
     setPerson({name: "Luigi" , age :40});

   }

   const ClickState = ()=>{
    setName('Shaun');
   }


  return (
    <View style={styles.container}>
      <Text style={{ color:"blue" , fontSize : 20 }}>Home3</Text>
      <Text style={{ color:"red" , fontSize:30 }}>my name is {name}</Text>
      <Text style={{ color:"red" , fontSize:30 }}>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttoncon}>
         <Button title='update state!!'  onPress={clickHandler}/>
      </View>
      <View style={styles.buttoncon}>
         <Button title='Back to State!!'  onPress={ClickState}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
    flex:1,
    backgroundColor:"#ffff",
    justifyContent:"center",
    alignItems:"center"
    
},
   buttoncon:{
     marginTop:20,
     borderRadius:10,
   }


})