import React from "react";
import {StyleSheet, Text, View} from "react-native";


const ConfirmedEmail = ({mail, is_confirmed_email, navigation}) => {
  if (mail === "" && is_confirmed_email === "false") {
    console.log("1 variant");
    return (
      <Text style={stylesMessageWarning.title}>Пожалуйста добавьте почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>добавить..</Text></Text>
    )
  } else if (is_confirmed_email === "false") {
    console.log("2 variant");
    return (
      <Text style={stylesMessageWarning.title}>Подтвердите почту <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmEmail")}>подтвердить..</Text></Text>
    )
  }
}

const ConfirmedPhone = ({phone, is_confirmed_phone, navigation}) => {
  if (phone === "" && is_confirmed_phone === "false") {
    console.log("3 variant");
    return (
      <Text style={stylesMessageWarning.title}>Пожалуйста добавьте телефон <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ConfirmPhone")}>добавить..</Text></Text>
    )
  }
}

const ChangePassword = ({is_default_password, navigation}) => {

  if (is_default_password === "true") {
    console.log("5 variant");
    return (
      <Text style={stylesMessageWarning.title}>Вы уязвимы! Пароль был автоматически сгенерирован <Text style={stylesMessageWarning.link} onPress={() => navigation.navigate("ChangePassword")}>изменить..</Text></Text>
    )
  }
}

export default function MessageWarning({navigation, currentUser}) {
  return (
    <View style={stylesMessageWarning.container}>
      <ConfirmedEmail navigation={navigation} is_confirmed_email={currentUser.is_confirmed_email} mail={currentUser.mail} />
      {currentUser.is_confirmed_phone === "false" && currentUser.phone === "" ? (
        <View style={stylesMessageWarning.containerPhone}>
          <ConfirmedPhone navigation={navigation} is_confirmed_phone={currentUser.is_confirmed_phone} phone={currentUser.phone} />
        </View>
      ) : ("")}
      <ChangePassword navigation={navigation} is_default_password={currentUser.is_default_password} />
    </View>
  )
}


const stylesMessageWarning = StyleSheet.create({
  title: {
    color: "#ac5740",
    fontWeight: "bold",
    textAlign: "left"
  },
  link: {
    color: "#0850cb",
    fontWeight: "bold"
  },
  container: {
    backgroundColor: "#FFEFB8",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  containerPhone: {
    paddingTop: 7,
    paddingBottom: 7
  }
})