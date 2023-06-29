import React from "react";
import {Pressable, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default function ButtonReturnType({ iconName, title, value, setValue, returnType }) {
  return (
    <Pressable onPress={() => {
      setValue(value);
    }} style={{
      borderColor: "tomato",
      borderWidth: 2,
      borderRadius: 10,
      height: 100,
      width: 100,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <View style={{
        borderRadius: 7,
        height: 93,
        width: 93,
        alignItems: "center",
        paddingTop: 15,
        backgroundColor: returnType === "day" && value === "day" || returnType === "month" && value === "month" ? "white" : "tomato",
        borderColor: "tomato",
        borderWidth: returnType === "day" && value === "day" || returnType === "month" && value === "month" ? 2 : 0
      }}>
        <MaterialCommunityIcons name={iconName} size={40} color={returnType === "day" && value === "day" || returnType === "month" && value === "month" ? "tomato" : "white"} />
        <Text style={{
          fontWeight: "bold",
          color: returnType === "day" && value === "day" || returnType === "month" && value === "month" ? "tomato" : "white"
        }}>{title}</Text>
      </View>
    </Pressable>
  )
}