import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function GoBackNavigation({navigation, title}) {
  return (
    <View>
      <Text style={stylesBackToMainNavigation.arrow} onPress={() => {
        navigation.goBack()
      }}>{title}</Text>
    </View>
  )
}

const stylesBackToMainNavigation = StyleSheet.create({
  arrow: {
    fontWeight: "bold",
    color: "#3e3e3e"
  }
})