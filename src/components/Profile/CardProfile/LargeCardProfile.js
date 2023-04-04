import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import {useSelector} from "react-redux";


export default function LargeCardProfile() {
  const users = useSelector(state => state.users.users);
  console.log(users)

  return (
    <View style={LargeStyles.container}>
      <Image style={LargeStyles.cardImage} source={require("./Images/default_profile_icon.webp")} />
      <Text>First name: {users.firstname}</Text>
      <Text>Name: {users.firstname}</Text>
      <Text>Name: {users.firstname}</Text>
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