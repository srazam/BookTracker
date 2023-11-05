import { StyleSheet, Text, View} from 'react-native';

const GameScreen = () => { 
    return (
      <View style={styles.container}>
        <Text>This is the game</Text>
      </View>
    );
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff#f#f',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });