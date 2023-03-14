import React from "react";
import {StyleSheet, Text, Touchable, View} from "react-native";

export default function Header({ title, isNested, navigation }) {
  return (
    <>
      <View style={{
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
    margin: 0
  }
})