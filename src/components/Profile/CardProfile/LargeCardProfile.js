import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import {useSelector} from "react-redux";
import useAuth from "../../../hooks/useAuth";


export default function LargeCardProfile({navigation, funcExit}) {
  const currentUser = useSelector(state => state.users.currentUser);
  console.log(currentUser);


  return (
    <View style={LargeStyles.container}>
      <Image style={LargeStyles.cardImage} source={currentUser.avatar !== "" ? "" : require("./Images/default_profile_icon.webp")} />
      <Text>Email: {currentUser.mail}</Text>
      <Text>First name: {currentUser.lastname}</Text>
      <Text>Name: {currentUser.firstname}</Text>
      <Text>Name: {currentUser.surname}</Text>
      {useAuth() === false ? (<Text>false</Text>) : (<Text>true</Text>)}
      <Text style={LargeStyles.exit} onPress={() => funcExit()}>Выйти</Text>
    </View>
  )
}


const LargeStyles = StyleSheet.create({
  container: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  exit: {
    backgroundColor: "red",
    color: "white",
    textTransform: "uppercase",
    width: 60,
    height: 30,
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
    marginTop: 25
  }
})