import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import {useSelector} from "react-redux";
import useCurrentUser from "../../../hooks/useCurrentUser";


export default function LargeCardProfile() {
  const users = useSelector(state => state.users.users);
  const currentUser = useCurrentUser();

  return (
    <View style={LargeStyles.container}>
      <Image style={LargeStyles.cardImage} source={require("./Images/default_profile_icon.webp")} />
      <Text>First name: {currentUser.lastname}</Text>
      <Text>Name: {currentUser.firstname}</Text>
      <Text>Name: {currentUser.surname}</Text>
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
  }
})