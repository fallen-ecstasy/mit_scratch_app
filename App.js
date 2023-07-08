import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import MenuBar from "./components/MenuBar/MenuBar";
import Playground from "./components/Playground/playground";
import SpriteDashboard from "./components/SpriteDashboard/sprite_dashboard";

// TODO : Create and Add Splash Screen to the Project

export default function App() {

  const playgroundRef = useRef();



  return (
    <View style={styles.container}>
      <MenuBar />
      <Playground ref={playgroundRef} />
      {/* <View style={styles.tab}>
        <Button title="MOVE LEFT 50" onPress={() => playgroundRef.current.moveLeft50()}/>
        <Button title="MOVE RIGHT 50" onPress={() => playgroundRef.current.moveRight50()}/>
      </View>
      <View style={styles.tab}>
        <Button title={"MOVE UP 50"} onPress={() => playgroundRef.current.moveUp50()}/>
        <Button title={"MOVE DOWN 50"} onPress={() => playgroundRef.current.moveDown50()} />
      </View>
      <View style={styles.tab}>
        <Button title={"Rotate Clock"} onPress={() => playgroundRef.current.rotateClock()}/>
        <Button title={"Rotate Anticlock"} onPress={() => playgroundRef.current.rotateAnti()} />
      </View> */}
      <SpriteDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop:35,
  },
  tab: {
    width:"90%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin:20,
  }
});
