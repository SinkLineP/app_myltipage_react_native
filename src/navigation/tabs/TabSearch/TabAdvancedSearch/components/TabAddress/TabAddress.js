import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import ContainerTab from "../../../../../../components/SearchTabs/ContainerTab/ContainerTab";


export default function TabAddress() {
  const navigation = useNavigation();
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);


  return (
    <View style={stylesTabAddress.containerAddress}>
      <Pressable onPress={() => {
        navigation.navigate("SearchAddress")
      }}>
        <ContainerTab>
          <View style={stylesTabAddress.containerTitle}>
            <View style={{width: "95%"}}>
              <Text style={stylesTabAddress.titleBtn}>{settlementStore !== "" ? `Адрес:${`\n`}${streetStore !== "" ? streetStore : settlementStore}` : "Выберите адрес.."}</Text>
            </View>
            <View style={{width: "5%", justifyContent: "center"}}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
          </View>
        </ContainerTab>
      </Pressable>
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