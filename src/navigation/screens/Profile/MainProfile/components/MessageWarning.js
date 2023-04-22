import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function MessageWarning({navigation, currentUser}) {
  const Confirmed = ({mail, phone, is_confirmed_email, is_confirmed_phone}) => {
    if (mail === "" && is_confirmed_email === "false") {
      console.log("1 variant");
      return (
        <Text style={stylesMessageWarning.title}>Пожалуйста добавьте почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>по этой ссылке</Text></Text>
      )
    } else if (is_confirmed_email === "false") {
      console.log("2 variant");
      return (
        <Text style={stylesMessageWarning.title}>Подтвердите почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>по этой ссылке</Text></Text>
      )
    }
    if (phone === "" && is_confirmed_phone === "false") {
      console.log("3 variant");
      return (
        <Text style={stylesMessageWarning.title}>Пожалуйста добавьте телефон <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmPhone")}>по этой ссылке</Text></Text>
      )
    } else if (is_confirmed_phone === "false") {
      console.log("4 variant");
      return (
        <Text style={stylesMessageWarning.title}>Подтвердите телефон <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmPhone")}>по этой ссылке</Text></Text>
      )
    }
  }

  return (
    <View style={stylesMessageWarning.container}>
      <Confirmed is_confirmed_phone={currentUser.is_confirmed_phone} is_confirmed_email={currentUser.is_confirmed_email} mail={currentUser.mail} phone={currentUser.phone} />
    </View>
  )
}


const stylesMessageWarning = StyleSheet.create({
  title: {
    color: "#ac5740",
    fontWeight: "bold",
    textAlign: "center"
  },
  link: {
    color: "#0850cb",
    fontWeight: "bold"
  },
  container: {
    backgroundColor: "#FFEFB8",
    borderRadius: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
})