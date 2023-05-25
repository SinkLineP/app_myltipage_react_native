import React from "react";
import {Dimensions, Pressable, StyleSheet, Text} from "react-native";


export default function ButtonSocialMedia({funcPress, backgroundColor, icon}) {
  return (
    <Pressable style={{
      backgroundColor: backgroundColor,
      width: 50,
      height: 50,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center"
    }} onPress={funcPress}>
      <Text style={{
        color: "white",
        fontWeight: "bold",
        fontSize: 32
      }}>{icon}</Text>
    </Pressable>
  )
}
