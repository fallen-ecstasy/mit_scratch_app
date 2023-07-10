import { Stack } from "expo-router";
import React from "react";
import { Button, Image, View } from "react-native";

export default () =>{
    return (
    <Stack
    screenOptions={{
        headerStyle:{
            backgroundColor:"#855CD6",
        }
    }}>
        <Stack.Screen
        name="index"
        options={{
            headerTitle: (props) =>(
                <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", marginLeft:-10}}>
                <Image resizeMode="contain" style={{height:40,width:110}} source={require("../assets/logo.png")} />
                <Button title="About"/>
                </View>
            ),
            headerTitleStyle:{flex:1, textAlign:"center"},
        }}
        />
        <Stack.Screen 
        name = "[id]"
        options={{
            headerTitle : "Actions",
            headerTitleStyle: {color:"#fff", textAlign:"center"},
            headerTintColor :"#fff",
        }}
        />
    </Stack>
)}