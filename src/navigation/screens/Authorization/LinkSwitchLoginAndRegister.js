import React from "react";
import {Text} from "react-native";


export default function LinkSwitchLoginAndRegister({SignUpStyles, changeForm, titleContent, titleButton}) {
  return (
    <Text style={SignUpStyles.auth}>{titleContent}<Text style={SignUpStyles.link} onPress={changeForm}>{titleButton}</Text></Text>
  )
}
