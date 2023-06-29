import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";


export const ShowModalGUI = ({ title, modalRef, value, setValue }) => {
  return (
    <View style={stylesShowModalGUI.containerSummerEviction}>
      <Text style={stylesShowModalGUI.title}>{title}</Text>

      <View style={{flexDirection: "row", gap: 10}}>
        {value === "" || value === 1 ? (
          <Pressable onPress={() => {
            modalRef.current?.open()
          }} style={{
            backgroundColor: "tomato",
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 10
          }}>
            <MaterialIcons name="add" size={24} color="white" />
          </Pressable>
        ) : (
          <>
            <Pressable onPress={() => {
              modalRef.current?.open()
            }} style={{
              backgroundColor: "#1e9dff",
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 10
            }}>
              <MaterialIcons name="edit" size={24} color="white" />
            </Pressable>

            <Pressable onPress={() => {
              if (typeof value === "number") {
                setValue(1);
              } else if (typeof value === "boolean") {
                setValue(false);
              } else {
                setValue("");
              }
            }} style={{
              backgroundColor: "#ff3939",
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 10
            }}>
              <MaterialCommunityIcons name="trash-can-outline" size={24} color="white" />
            </Pressable>
          </>
        )}
      </View>
    </View>
  )
}

const stylesShowModalGUI = StyleSheet.create({
  containerSummerEviction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7
  },
  title: {
    color: "#323232",
    fontWeight: "bold"
  }
})