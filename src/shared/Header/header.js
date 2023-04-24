import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function Header({ title, titleColor, iconSource, navigationRoute, widthImage, heightImage, showButton }) {
  const navigation = useNavigation();


  return (
    <>
      <View style={stylesHeader.header}>
        <View>
          <Text style={{
            fontWeight: "bold",
            fontSize: 20,
            color: titleColor !== "" ? titleColor : "#fff",
            letterSpacing: 1,
            margin: 0
          }}>{title}</Text>
        </View>
        {showButton === true ? (
          <Pressable onPress={() => navigation.navigate(navigationRoute)} style={stylesHeader.containerIcon}>
            <Image style={{
              width: widthImage,
              height: heightImage,
            }} source={iconSource} />
          </Pressable>
        ) : ("")}
      </View>
    </>
  )
}

const stylesHeader = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
})