import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function About() {
  return (
    <>
      <View style={aboutStyles.container}>
        <Text>About Screen</Text>
      </View>
    </>
  )
}

const aboutStyles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  }
})