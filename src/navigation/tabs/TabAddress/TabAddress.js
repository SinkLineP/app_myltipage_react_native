import React from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {MaterialIcons} from "@expo/vector-icons";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";


export default function TabAddress() {
  const navigation = useNavigation();
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);


  return (
    <View style={stylesTabAddress.containerAddress}>
      <ContainerTab>
        <Pressable onPress={() => {
          navigation.navigate("SearchAddress")
        }}>
          <View style={stylesTabAddress.containerTitle}>
            <Text style={stylesTabAddress.titleBtn}>{settlementStore !== "" ? `Адрес: ${streetStore !== "" ? streetStore : settlementStore}` : "Выберите адрес.."}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </View>
        </Pressable>
      </ContainerTab>
    </View>
  )
}

const stylesTabAddress = StyleSheet.create({
  containerAddress: {
    marginTop: 6
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleBtn: {
    fontWeight: "bold",
    color: "#323232"
  }
})