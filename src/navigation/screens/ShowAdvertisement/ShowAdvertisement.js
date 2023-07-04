import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {useNavigation, useNavigationState} from "@react-navigation/native";


export default function ShowAdvertisement({ route }) {
  const { address, coords, id, images, price, type } = route.params.estate;

  return (
    <View>
      <Text>{address}</Text>
    </View>
  )
}