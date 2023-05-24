import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import {Entypo} from "@expo/vector-icons";
import {useSelector} from "react-redux";


export default function TabSearchMap({ navigation }) {
  const currentAddress = useSelector(state => state.searchMap.currentAddress);

  return (
    <Pressable onPress={() => {
      navigation.navigate("TabLocation")
    }}>
      <ContainerTab>
        <View style={stylesTabSearchMap.containerLocationButton}>
          <View>
            <Entypo name="location-pin" size={24} color="tomato" />
          </View>
          <Text style={stylesTabSearchMap.title}>Быстрый поиск по карте..</Text>
        </View>
      </ContainerTab>
    </Pressable>
  )
}

const stylesTabSearchMap = StyleSheet.create({
  containerLocationButton: {
    paddingHorizontal: 15,
    flexDirection: "row"
  },
  title: {
    paddingTop: 2,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#323232"
  }
})