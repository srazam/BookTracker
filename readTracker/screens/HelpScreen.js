import { StyleSheet, Text, Pressable, View} from 'react-native';


const HelpScreen = () => { 
    return (
      <View style={styles.container}>
        <Text>How to use the app</Text>
      </View>
    );
}

export default HelpScreen

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