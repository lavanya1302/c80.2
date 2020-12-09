import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Barter App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  },
  
  
  
  
  text:{
    color: 'blue',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});