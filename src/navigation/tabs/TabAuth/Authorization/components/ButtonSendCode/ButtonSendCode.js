import React from "react";
import {Text} from "react-native";


export default function ButtonSendCode({funcSendCode, isActive}) {
  return (
    <Text style={{
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 50,
      borderColor: isActive === true ? "#048f9d" : "#9cbcbf",
      width: "auto",
      padding: 10,
      marginBottom: 7,
      paddingLeft: 15,
      paddingRight: 15,
      color: isActive === true ? "#048f9d" : "#9cbcbf",
      fontWeight: "bold",
      textDecorationLine: "none",
      fontSize: 20,
      textAlign: "center"
    }} onPress={funcSendCode}>Отправить код</Text>
  )
}

