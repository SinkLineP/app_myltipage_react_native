import React from "react";
import {TextInput} from "react-native";


export default function CustomTextInput({placeholder, onChangeText, value, isCenter}) {
  return (
    <TextInput
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 50,
        borderColor: "#048f9d",
        width: "auto",
        padding: 10,
        marginBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        color: "#404040",
        fontWeight: "bold",
        textDecorationLine: "none",
        textAlign: isCenter ? "center" : "left"
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  )
}
