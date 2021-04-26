import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import MyButtonHOD from './myButton';


export default function App() {
  
  return (
    <View style={styles.container}>
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