import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Pan({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Ruta numero 1</Text>
      <Button
        title="Dummy"
        onPress={() => navigation.navigate('dummy')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
