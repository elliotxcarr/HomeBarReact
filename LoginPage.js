
import React, { useState } from 'react';

import { StyleSheet, View, Image, Text, Platform, Button} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';



export default function LoginPage({navigation}) {
  
const [date, setDate] = useState(new Date());
const [text, setText] = useState('Enter Your Date Of Birth');
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);




const onChange = (event, selectedDate) =>{
  const currentDate = selectedDate || date;
  setShow(false);
  setDate(currentDate);

  let tempdate  = new Date(currentDate);
  let fDate  = tempdate.getDate() + ' / ' + (tempdate.getMonth() + 1) + ' / ' + tempdate.getFullYear();

  setText(fDate)
  checkDate(currentDate)
}

const showMode = (currentMode) =>{
  setShow(true);
  setMode(currentMode);
}

function checkDate(currentDate){
  var today = new Date();
  var validDate = new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
  console.log(validDate)
  
  let numValid = new Date(validDate.getTime());
  let numCurrent = new Date(currentDate.getTime());

 
  
    
  if(numValid > numCurrent){
    console.log('yes')
    navigation.navigate('Home')
  }
  else {
    console.log('no')
    alert('Sorry you must be at least 18 to enter!')
  }
}
  
  return (
    
    
    <View style={styles.container}>
      
            <Image style={styles.logo} source={require('./assets/logo.png')} />
            <Text  style={styles.text} onPress={()=> showMode('date')}> {text} </Text>
            
    

    {show && (
    <DateTimePicker style={styles.dateTime}
    testID='dateTimePicker'
    value= {date}
    mode={mode}
    is24Hour={true}
    display = 'default'
    onChange={onChange}
  />)}

   </View>
  

  );
}

const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor: '#35353D',
          alignItems:'center',
          justifyContent:'center'

        },
        logo:{
          width:230,
          height:140, 
        },
        text:{
          color:'#fff',
          fontSize:20,
          textDecorationLine:'underline'
        },
        dateTime:{
          backgroundColor:'green'
        }
        
})