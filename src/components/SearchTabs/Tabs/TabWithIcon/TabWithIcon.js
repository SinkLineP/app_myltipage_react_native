import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Entypo} from "@expo/vector-icons";


export const TabWithIcon = ({title, iconName, iconSize, iconColor}) => {
  return (
    <View style={stylesTabWithIcon.tab}>
      <Entypo style={stylesTabWithIcon.tabIcon} name={iconName} size={iconSize} color={iconColor} />
      <Text style={stylesTabWithIcon.tabTitle}>{title}</Text>
    </View>
  )
}


const stylesTabWithIcon = StyleSheet.create({
  tab: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5
  },
  tabTitle: {
    width: "80%",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: 18,
    color: "#323232"
  },
  tabIcon: {
    width: "20%",
    textAlign: "center"
  },
})