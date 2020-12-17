import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearcResultsScreen from "../screens/SearchResultsScreen";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={"SearchResults"}
        component={SearcResultsScreen}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
