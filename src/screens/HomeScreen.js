import React from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fontisto } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/wallpaper.jpg")}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SearchResults")}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    borderRadius: 30,
    width: Dimensions.get("window").width - 20,
    zIndex: 100,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
