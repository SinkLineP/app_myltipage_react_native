import React from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {MaterialIcons} from "@expo/vector-icons";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";


export default function TabAddress() {
  const navigation = useNavigation();
  const locationName = "";

  const locationNotSelected = (locationTitle) => {
    if (locationTitle !== "") {
      return `Адрес: ${locationTitle}`;
    } else {
      return  "Выберите адрес"
    }
  }

  return (
    <View style={{marginTop: 6}}>
      <ContainerTab>
        <Pressable onPress={() => {
          navigation.navigate("SearchAddress")
        }}>
          <Text style={stylesTabAddress.label}>Адрес</Text>
          <View style={stylesTabAddress.containerTitle}>
            <Text style={stylesTabAddress.titleBtn}>{locationNotSelected(locationName)}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </Pressable>
      </ContainerTab>
    </View>
  )
}

const stylesTabAddress = StyleSheet.create({
  containerAddress: {},
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: "#9a9a9a",
    marginBottom: 10,
  },
  titleBtn: {
    fontWeight: "bold",
    color: "#323232"
  }
})