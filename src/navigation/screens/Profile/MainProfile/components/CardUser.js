import React from "react";
import {StyleSheet, View} from "react-native";


export default function CardUser({children, key}) {
  return (
    <View style={stylesCardUser.cardUsers} key={key}>
      {children}
    </View>
  )
}

const stylesCardUser = StyleSheet.create({
  cardUsers: {
    flexDirection: "row",
    // borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "rgba(199,250,255,0.74)"
  }
})