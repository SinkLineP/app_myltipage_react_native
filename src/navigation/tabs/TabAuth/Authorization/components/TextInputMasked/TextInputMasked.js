import {MaskedTextInput} from "react-native-mask-text";
import React from "react";


export default function TextInputMasked({funcChangeText, mask, values, placeholder, keyboardType, fontSize, colorBorder}) {
  return (
    <MaskedTextInput
      mask={mask}
      onChangeText={funcChangeText}
      value={values}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 50,
        borderColor: colorBorder !== "" && colorBorder !== undefined ? colorBorder : "#048f9d",
        width: "auto",
        padding: 10,
        marginBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        color: "#404040",
        fontWeight: "bold",
        textDecorationLine: "none",
        fontSize: fontSize !== "" ? fontSize : 20,
        textAlign: "center"
      }}
      keyboardType={keyboardType}
      placeholder={placeholder}
    />
  );
}

