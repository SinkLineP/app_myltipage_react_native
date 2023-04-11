import {Text} from "react-native";
import React from "react";

export const CustomButton = ({color, colorBG, funcPress, titleButton, fontSize}) => {
  return (
    <Text style={{
      backgroundColor: colorBG,
      textAlign: "center",
      color: color,
      fontWeight: "bold",
      fontSize: fontSize !== undefined ? fontSize : 20,
      padding: 10
    }} onPress={funcPress}>{titleButton}</Text>
  )
}