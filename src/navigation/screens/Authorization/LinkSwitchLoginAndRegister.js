import React from "react";
import {Text} from "react-native";


export default function LinkSwitchLoginAndRegister({SignUpStyles, changeForm}) {

  return (
    <Text style={SignUpStyles.auth}>
      Есть учетная запись - <Text style={SignUpStyles.link} onPress={changeForm}>
                              войти
                            </Text>
    </Text>
  )
}