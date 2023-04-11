import React from "react";
import {View} from "react-native";


export default function CustomCard({children, isBottomMargin}) {
  return (
    <View style={{
      backgroundColor: "#048f9d",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 20,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      paddingRight: 10,
      borderStyle: "solid",
      borderRadius: 10,
      marginBottom: isBottomMargin ? 20 : 0
    }}>
      {children}
    </View>
  )
}
