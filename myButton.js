import React from 'react';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';

const MyButtonHOD =(props)=>{
    return(
        <TouchableOpacity style={!props.primary?styles.containerWithout:styles.containerWith} onPress={()=>alert('button pressed')}>
            <Text style={!props.primary?styles.textout:styles.textWith}>{props.children}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    containerWith: {
      backgroundColor:'#FFC0CB',
      margin:10,
      alignItems:'center',
      justifyContent:'center',
      height:30,
      width:100,
      borderRadius:50,
    },
    containerWithout: {
        backgroundColor:'#F5F5F5',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        height:30,
        width:100,
        borderRadius:50,
      },
    textWith:{
        color:'#fff',
        //fontWeight:'bold'
    },
    textWithout:{
        color:'#FFC0CB',
        fontWeight:'bold'
    }
  });

  export default MyButtonHOD;