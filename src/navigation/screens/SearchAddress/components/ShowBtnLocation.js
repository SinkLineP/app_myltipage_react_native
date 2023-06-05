import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export const ShowBtnLocation = ({ text, typeLocationProps, defaultText }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {
      navigation.navigate("SelectAddress", {
        typeLocation: typeLocationProps,
        textLocation: defaultText,
      });
    }} style={stylesShowBtnLocation.containerText}>
      <Text style={stylesShowBtnLocation.text}>{ text }</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </Pressable>
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