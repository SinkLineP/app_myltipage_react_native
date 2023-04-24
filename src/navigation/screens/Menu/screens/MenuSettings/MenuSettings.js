import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";


const OptionsComponent = ({sourceIcon, title, dynamicContent}) => {
  return (
    <View style={stylesMenuSettings.option}>
      <View style={stylesMenuSettings.optionContent}>
        <View style={stylesMenuSettings.optionContainerIcon}>
          <Image style={stylesMenuSettings.optionIcon} source={sourceIcon} />
        </View>
        <View style={stylesMenuSettings.optionTextContent}>
          <Text style={stylesMenuSettings.optionTitle}>{title}</Text>
          <Text style={stylesMenuSettings.optionSelectedOption}>{dynamicContent}</Text>
        </View>
      </View>
    </View>
  )
}

export default function MenuSettings() {
  return (
    <View style={stylesMenuSettings.container}>
      {/* настройка языка */}
      <OptionsComponent title={"Язык"} dynamicContent={"Автоматически"} sourceIcon={require("./Icons/language-icon.png")} />

      {/* настройка оформления */}
      <OptionsComponent title={"Тема"} dynamicContent={"Автоматически"} sourceIcon={require("./Icons/theme-icon.png")} />
    </View>
  )
}

const stylesMenuSettings = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  option: {
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  optionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  optionContainerIcon: {
    width: "15%",
    justifyContent: "center",
  },
  optionTextContent: {
    width: "85%"
  },
  optionIcon: {
    width: 30,
    height: 30,
  },
  optionTitle: {
    color: "#4a4848",
    fontSize: 14
  },
  optionSelectedOption: {
    fontWeight: "bold"
  }
})