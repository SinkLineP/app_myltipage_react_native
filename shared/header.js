import React from "react";
import {StyleSheet, Text, Touchable, View} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, isNested, navigation }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <>
      <View style={{
        width: isNested ? "74%" : "95.5%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <View>
          <Text style={stylesHeader.headerText}>{title}</Text>
        </View>
      </View>
    </>
  )
}


const stylesHeader = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: -7,
    color: "white"
  }
})