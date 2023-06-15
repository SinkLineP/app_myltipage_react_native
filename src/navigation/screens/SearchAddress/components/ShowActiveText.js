import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import ContainerTab from "../../../../components/SearchTabs/ContainerTab/ContainerTab";


export default function ShowActiveText({ locationTitle, location, defaultLocationTitle, typeLocation }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {
      navigation.navigate("SelectAddress", {
        typeLocation: typeLocation,
      });
    }}>
      <ContainerTab>
        <View style={stylesShowActiveText.containerText}>
          <View style={{width: "95%"}}>
            <Text style={stylesShowActiveText.text}>{ location !== "" ? `${locationTitle}:${`\n`}${location}` : defaultLocationTitle }</Text>
          </View>
          <View style={{width: "5%", justifyContent: "center"}}>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </View>
      </ContainerTab>
    </Pressable>
  )
}

const stylesShowActiveText = StyleSheet.create({
  containerText: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "bold",
    color: "#323232"
  }
})