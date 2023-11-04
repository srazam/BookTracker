import { StyleSheet, Text, View, SectionList} from 'react-native';

const BOOKS = [ 
    {
    title: 'Fantasy',
    data: ['Lord of The Rings', 'Rangers Apprentice']
    },
    {
    title: 'Nonfiction',
    data: ['Hood Feminism', 'White Tears/Brown Scars']
    },
]

const LogScreen = () => { 
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Log</Text>

        <SectionList
            sections={BOOKS}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
             )}
        />
      </View>
    );
}

export default LogScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff#f#f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Title: {
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
    space: {
      width: 10,
      height: 10,
    },
    item: {
      fontFamily: 'sans-serif-light',
      color: 'white',
      backgroundColor: 'pink',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 40,
      backgroundColor: 'pink',
    },
    title: {
      fontSize: 24,
      fontFamily: 'sans-serif-light',
    },
  });