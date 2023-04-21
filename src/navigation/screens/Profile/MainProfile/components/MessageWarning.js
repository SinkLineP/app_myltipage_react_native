import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function MessageWarning({navigation, currentUser}) {
  const Confirmed = ({mail, is_confirmed_email, is_confirmed_phone}) => {
    if (mail === "" && is_confirmed_email === "false") {
      return (
        <Text style={stylesMessageWarning.title}>Пожалуйста добавьте почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>по этой ссылке</Text></Text>
      )
    } else if (is_confirmed_email === "false") {
      return (
        <Text style={stylesMessageWarning.title}>Подтвердите почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>по этой ссылке</Text></Text>
      )
    }
    if (is_confirmed_phone === "false") {
      return (
        <Text style={stylesMessageWarning.title}>Подтвердите телефон <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmPhone")}>по этой ссылке</Text></Text>
      )
    }
  }

  return (
    <View style={stylesMessageWarning.container}>
      <Confirmed is_confirmed_phone={currentUser.is_confirmed_phone} is_confirmed_email={currentUser.is_confirmed_email} mail={currentUser.mail} />
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