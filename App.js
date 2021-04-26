import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import MyButtonHOD from './myButton';


export default function App() {
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontWeight:'bold',fontSize:50,color:'blue',marginBottom:40,padding:20}}>
          button functionality
        </Text>
      </View>
      <MyButtonHOD primary>Hello World</MyButtonHOD>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
    alignItems:'center',
    justifyContent:'center',
  }
});