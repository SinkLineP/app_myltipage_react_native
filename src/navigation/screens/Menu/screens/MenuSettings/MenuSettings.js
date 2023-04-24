import React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";


const OptionsComponent = ({ sourceIcon, title, dynamicContent, navigationRoute, navigation }) => {
  return (
    <Pressable onPress={() => {
      navigation.navigate(navigationRoute)
    }}>
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
    </Pressable>
  )
}

export default function MenuSettings() {
  const navigation = useNavigation();
  const language = useSelector(state => state.settingsApp.language);
  const languageData = useSelector(state => state.settingsApp.languageData);
  const themeData = useSelector(state => state.settingsApp.themeData);
  const theme = useSelector(state => state.settingsApp.theme);


  return (
    <>
      <View style={stylesMenuSettings.container}>
        {/* настройка языка */}
        <OptionsComponent
          title={"Язык"}
          dynamicContent={
            languageData.map(item => {
              if (item.value === language) return item.label;
            })
          }
          sourceIcon={require("./Icons/language-icon.png")}
          navigationRoute={"LanguageApp"}
          navigation={navigation}
        />

        {/* настройка оформления */}
        <OptionsComponent
          title={"Тема"}
          dynamicContent={
            themeData.map(item => {
              if (item.value === theme) return item.label;
            })
          }
          sourceIcon={require("./Icons/theme-icon.png")}
          navigationRoute={"ThemeApp"}
          navigation={navigation}
        />
      </View>
    </>
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