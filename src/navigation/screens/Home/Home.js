import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function Home() {
  return (
    <View style={stylesHome.container}>
      <Text>Page is Home</Text>
    </View>
  )
}

const stylesHome = StyleSheet.create({
  container: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
  }
})