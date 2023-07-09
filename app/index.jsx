import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Playground from "../components/Playground/playground";
import SpriteDashboard from "../components/SpriteDashboard/sprite_dashboard";


import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

// TODO : Create and Add Splash Screen to the Project
const store = configureStore();

export default function Home() {

  const playgroundRef = useRef();

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Playground ref={playgroundRef} />
      {/* <Button title="Button" onPress={()=>playgroundRef.current.decSize()} /> */}
      {/* <View style={styles.tab}>
        <Button title="MOVE LEFT 50" onPress={() => playgrondRef.current.moveLeft50()}/>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop:10
  },
  tab: {
    width:"90%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin:20,
  }
});
