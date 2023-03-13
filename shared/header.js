import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, isNested }) {

  return (
    <View style={{
      width: isNested ? "74%" : "95.5%",
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* icon */}
      <View>
        <Text style={stylesHeader.headerText}>{title}</Text>
      </View>
    </View>
  )
}


const stylesHeader = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  }
})