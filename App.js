import React from "react";
import { StyleSheet, View } from "react-native";
import Playground from "./components/Playground/playground";

// TODO : Create and Add Splash Screen to the Project

export default function App() {

  return (
    <View style={styles.container}>
      <Playground />
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
