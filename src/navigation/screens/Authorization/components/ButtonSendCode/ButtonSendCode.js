import React from "react";
import {StyleSheet, Text} from "react-native";


export default function ButtonSendCode({funcSendCode}) {
  return (
    <Text style={stylesButtonSendCode.buttonSendSMS} onPress={funcSendCode}>Отправить код</Text>
  )
}


const stylesButtonSendCode = StyleSheet.create({
  buttonSendSMS: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#048f9d",
    width: "auto",
    padding: 10,
    marginBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#048f9d",
    fontWeight: "bold",
    textDecorationLine: "none",
    fontSize: 20,
    textAlign: "center"
  },
})