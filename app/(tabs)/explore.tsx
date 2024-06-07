import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <>
      <View>
        <Text style={styles.text}>Adolfo Monteiro</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    marginTop:300,
    fontSize:40,
    color:"#000",
  }
});
