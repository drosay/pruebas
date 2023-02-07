import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pan from "./Pan.jsx";
import Dummy from "./Dummy.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const Stack = createNativeStackNavigator()

export default function App() {
  const [data, setData] = useState(null);

  const client = new ApolloClient({
    uri: "https://app-graphql.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const getItems = () => {
    const getData = async () => {
      const response = await client.query({
        query: gql`
          query {
            items {
              isActive
              id
              name
              quantity
              quantityUnits
            }
          }
        `,
      });
      const data = await response?.data;
      console.log(data?.items[0]);

      setData(data);
    };
    return getData();
  };

  useEffect(getItems, []);

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="pan">
      <Stack.Screen  name='pan' component={Pan}/>
      <Stack.Screen  name='dummy' component={Dummy}/>
      </Stack.Navigator>
      <Text>Hello React Native</Text>
      <Text>{`${JSON.stringify(data)}`}</Text>
      <StatusBar style="auto" />
    </NavigationContainer>
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
