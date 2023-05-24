import React from "react";
import {Pressable, StyleSheet, Text, View, Image} from "react-native";


export function CustomMarkerMap({estate}) {
  return (
    <Pressable onPress={() => {
      console.log("estate")
    }}>
      <View style={stylesCustomMarkerMap.customMarker}>
        {/*<Text style={stylesCustomMarkerMap.titleMarker}>{estate.price}</Text>*/}
        <Image source={require("./Icon/marker-pin-icon.png")} />
      </View>
    </Pressable>
  )
}

const stylesCustomMarkerMap = StyleSheet.create({
  customMarker: {
    // backgroundColor: "tomato",
    borderRadius: 10,
    alignItems: "center",
  },
  titleMarker: {
    color: "white",
    padding: 3
  }
})