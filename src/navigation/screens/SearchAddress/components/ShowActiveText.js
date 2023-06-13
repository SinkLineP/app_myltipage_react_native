import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";


export default function ShowActiveText({ locationTitle, location, defaultLocationTitle, typeLocation }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {
      navigation.navigate("SelectAddress", {
        typeLocation: typeLocation,
      });
    }} style={stylesShowActiveText.containerText}>
      <Text style={stylesShowActiveText.text}>{ location !== "" ? `${locationTitle}: ${location}` : defaultLocationTitle }</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </Pressable>
  )
}

const stylesShowActiveText = StyleSheet.create({
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