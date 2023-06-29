import React from "react";
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";


export default function ButtonShowAllAds() {
  const estatesStore = useSelector(state => state.estates.allEstates);
  const navigation = useNavigation();


  if (estatesStore.length !== 0) {
    return (
      <Text onPress={() => {
        navigation.navigate("ShowAds");
      }} style={{
        backgroundColor: "tomato",
        color: "white",
        fontWeight: "bold",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        textAlign: "center",
      }}>Найдено {estatesStore.length}, об.</Text>
    )
  }
}