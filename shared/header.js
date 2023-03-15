import React from "react";
import {StyleSheet, Text, Touchable, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Header({ title, showBar, navigation, titleColor }) {
  const openMenu = () => {
    console.log(navigation);
    // navigation.openDrawer();
  }

  return (
    <>
      <View style={{
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {showBar === true ? (<MaterialIcons onPress={() => openMenu()} style={{marginRight: 10}} name="menu" size={28} color={titleColor} />) : ""}
        <View>
          <Text style={stylesHeader.headerText}>{title}</Text>
        </View>
      </View>
    </>
  )
}


const stylesHeader = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
    margin: 0
  }
})