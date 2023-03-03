import React from "react";
import {View, Text} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home() {


  return (
    <View style={globalStyles.containerNoFlex}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  )
}
