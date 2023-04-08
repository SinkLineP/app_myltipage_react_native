import React from "react";
import {Text} from "react-native";


export default function ButtonConfirm({funcPress, title, color, size, background}) {
  return (
    <Text style={{
      padding: 10,
      backgroundColor: background,
      marginTop: 20,
      color: color,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: size
    }} onPress={funcPress}>{title}</Text>
  )
}

