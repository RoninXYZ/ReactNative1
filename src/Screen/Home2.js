import { View, Text , StyleSheet ,Button ,TextInput} from 'react-native'
import React , {useState}from 'react'

export  function Home2() {
  const [name , setName] = useState('shaun');
  const [no , setNo] = useState('494');
  return (
    <View style={styles.container}>
      <Text>Home2</Text>
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} placeholder="e.g.jhon doe" onChangeText={(val)=>{
        setName(val);
      }}/>
      <Text style={{ color:"red" , fontSize:30 }}>Nama : {name} and No : {no}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200,

  }
})
export default Home2