import React from "react";
import {Text} from "react-native";


export default function ButtonConfirm({customStyles, funcPress, title}) {
  return (
    <Text style={customStyles.btnSubmit} onPress={funcPress}>{title}</Text>
  )
}

