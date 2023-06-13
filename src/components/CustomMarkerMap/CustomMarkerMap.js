import React, {useEffect} from "react";
import {Pressable, StyleSheet, View, Image} from "react-native";


export function CustomMarkerMap({ delta }) {
  return (
    <Pressable>
      <View style={stylesCustomMarkerMap.customMarker}>
        <Image style={{
          height: 40,
          resizeMode: "contain"
        }} source={require("./Icon/marker-pin-icon.png")} />
      </View>
    </Pressable>
  )
}

const stylesCustomMarkerMap = StyleSheet.create({
  customMarker: {},
  titleMarker: {
    color: "white",
    padding: 3
  }
})