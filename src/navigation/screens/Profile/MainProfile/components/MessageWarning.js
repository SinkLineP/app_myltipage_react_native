import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";


export default function MessageWarning({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <View style={stylesMessageWarning.container}>
      {currentUser.is_confirmed_email === "false" ? (<Text style={stylesMessageWarning.title}>Подтвердите почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>по этой ссылке</Text></Text>) : ("")}
      {currentUser.is_confirmed_phone === "false" ? (<Text style={stylesMessageWarning.title}>Подтвердите телефон <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmPhone")}>по этой ссылке</Text></Text>) : ("")}
    </View>
  )
}


const stylesMessageWarning = StyleSheet.create({
  title: {
    color: "#ac5740",
    fontWeight: "bold"
  },
  link: {
    color: "#0850cb",
    fontWeight: "bold"
  },
  container: {
    backgroundColor: "#FFEFB8",
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    marginBottom: 10,
  }
})