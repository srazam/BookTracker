import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, TextInput } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ natvigation }) {
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Book Tracker</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="First and Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Age"
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={() => navigation.navigate('Log')}>
        <Text style={styles.textButton}>Get Started</Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </View>
  );
}

function LogScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    borderRadius: 50,
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
  },
});
