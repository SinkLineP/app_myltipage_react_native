import React from "react";
import {Image, StyleSheet, Text} from "react-native";


function NotFound() {
  return (
    <>
      <Image style={NotFoundStyles.emptyPageImage} source={require("./Images/emptyPage.png")} />
      <Text style={NotFoundStyles.empty}>Данный контент съело привидение.</Text>
    </>
  )
}


const NotFoundStyles = StyleSheet.create({
  empty: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 18,
    color: "#4a4848",
    fontFamily: "shell-sans-bold"
  },
  emptyPageImage: {
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  }
})

export default NotFound;