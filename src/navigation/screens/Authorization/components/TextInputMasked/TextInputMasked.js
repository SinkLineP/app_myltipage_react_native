import {checkCreatedUserWithPhone} from "../../../../../db/getData";
import {MaskedTextInput} from "react-native-mask-text";
import React from "react";
import {StyleSheet} from "react-native";


export default function TextInputMasked({funcChangeText, mask, values, placeholder, keyboardType}) {
  return (
    <MaskedTextInput
      mask={mask}
      onChangeText={funcChangeText}
      value={values}
      style={TextInputMask.input}
      keyboardType={keyboardType}
      placeholder={placeholder}
    />
  );
}

const TextInputMask = StyleSheet.create({
  input: {
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
    fontSize: 20,
    textAlign: "center"
  },
})