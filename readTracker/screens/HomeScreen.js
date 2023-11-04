import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, TextInput } from 'react-native';
import React from 'react'

const HomeScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState('');
  
    return (
        <View style={styles.container}>
        <Text style={styles.Text}>Book Tracker</Text>
  
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Name"
        />
  
        <View style={styles.space}/>
  
        <Pressable style={styles.button} onPress={() => navigation.navigate('Log')}>
          <Text style={styles.textButton}>See Book Log</Text>
        </Pressable>
        <View style={styles.space}/>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Help')}>
          <Text style={styles.textButton}>Help</Text>
        </Pressable>
        
        <StatusBar style="auto" />
      </View>
    );
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff#f#f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      fontSize: 60,
      fontFamily: 'sans-serif-light',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 50 ,
      backgroundColor: 'pink',
    }, 
    textButton: {
      fontSize: 20,
      fontFamily: 'sans-serif-light',
      color: 'white',
    },
    input: {
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      width: 200,
    },
    space: {
      width: 10,
      height: 10,
    },
  });
  