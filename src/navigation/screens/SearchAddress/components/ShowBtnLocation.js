import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export const ShowBtnLocation = ({ text }) => {
  return (
    <View style={stylesShowBtnLocation.containerText}>
      <Text style={stylesShowBtnLocation.text}>{ text }</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </View>
  )
}

const stylesShowBtnLocation = StyleSheet.create({
  containerText: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "bold",
    color: "#323232"
  }
})