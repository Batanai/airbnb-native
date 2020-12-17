import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import feed from "./assets/data/feed";
import SearchResultsScreen from "./src/screens/SearchResultsScreen";

const post1 = feed[0];

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
}
