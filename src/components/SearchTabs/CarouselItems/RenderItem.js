import React from "react";
import {Text, View} from "react-native";


export default function RenderItem({ item, width, index }) {


  return (
    <View
      key={item.id}
      style={{
        width: width,
      }}
    >
      <View
        style={{
          paddingHorizontal: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
          borderColor: "#d2d2d2",
          borderWidth: 1,
          alignItems: "center",
          width: width - 10
        }}
        key={index}>
        <Text>{item.address}</Text>
      </View>
    </View>
  )
}