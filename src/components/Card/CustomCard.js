import React from "react";
import {View, StyleSheet} from "react-native";


export default function CustomCard({children}) {
  return (
    <View style={StylesCustomCard.container}>
      {children}
    </View>
  )
}

const StylesCustomCard = StyleSheet.create({
  container: {
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
    marginBottom: 20
  },
})