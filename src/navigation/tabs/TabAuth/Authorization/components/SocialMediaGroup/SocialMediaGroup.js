import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";


export default function SocialMediaGroup() {
  const LoginTelegram = async () => {
    const response = await fetch("https://telegram.org/js/telegram-widget.js?22");
    console.log(response);
  }


  return (
    <View style={stylesSocialMediaGroup.containerSocialMedia}>
      <Text style={stylesSocialMediaGroup.titleSocialMedia}>Или же войтиде другим способом.</Text>

      <View style={stylesSocialMediaGroup.containerLinks}>
        <ButtonSocialMedia funcPress={LoginTelegram} icon={"Tg"} backgroundColor={"#048f9d"} />
      </View>
    </View>
  )
}

const stylesSocialMediaGroup = StyleSheet.create({
  containerSocialMedia: {
    justifyContent: "center"
  },
  titleSocialMedia: {
    textAlign: "center",
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
    borderColor: "#d2d2d2",
    color: "#323232",
    paddingBottom: 10
  },
  splash: {
    borderBottomWidth: 1,
    borderColor: "#323232",
    width: "100%",
    textAlign: "center",
  },
  containerLinks: {
    flexDirection: "row",
    justifyContent: "center"
  }
})