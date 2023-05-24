import React from "react";
import {Pressable, StyleSheet, View, Image} from "react-native";


export function CustomMarkerMap({estate}) {
  return (
    <Pressable onPress={() => {
      console.log("estate")
    }}>
      <View style={stylesCustomMarkerMap.customMarker}>
        <Image source={require("./Icon/marker-pin-icon.png")} />
      </View>
    </Pressable>
  )
}

const stylesCustomMarkerMap = StyleSheet.create({
  customMarker: {
    borderRadius: 10,
    alignItems: "center",
  },
  titleMarker: {
    color: "white",
    padding: 3
  }
})