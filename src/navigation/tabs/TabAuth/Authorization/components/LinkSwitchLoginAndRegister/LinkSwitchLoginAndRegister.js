import React from "react";
import {StyleSheet, Text} from "react-native";


export default function LinkSwitchLoginAndRegister({changeForm, titleContent, titleButton}) {
  return (
    <Text style={LinkStyles.auth}>{titleContent}<Text style={LinkStyles.link} onPress={changeForm}>{titleButton}</Text></Text>
  )
}

const LinkStyles = StyleSheet.create({
  auth: {
    color: "#404040",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#048f9d"
  },
})