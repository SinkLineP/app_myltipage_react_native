import React from "react";
import {View, Text} from "react-native";
import { globalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";


const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        <StatusBar style="auto" />
      </View>

      <HomeStack.Screen name="" component={Home} />
    </>
  )
}
