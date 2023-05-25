import React from "react";
import {StyleSheet, View} from "react-native";


export default function ContainerTab({children}) {


  return (
    <View style={stylesContainerTab.tab}>
      {children}
    </View>
  )
}

const stylesContainerTab = StyleSheet.create({
  tab: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
})