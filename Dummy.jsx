import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button} from "react-native";

export default function Dummy({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Ruta numero 2</Text>
      <Button
        title="Pan"
        onPress={() => navigation.navigate('pan')}
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
