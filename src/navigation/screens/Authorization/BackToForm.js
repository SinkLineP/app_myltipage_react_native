import React from "react";
import {Text} from "react-native";


export default function BackToForm({backStyles, funcBack, title}) {

  return (
    <Text style={backStyles.text} onPress={funcBack}>{title}</Text>
  )
}
