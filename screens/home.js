import React from "react";
import {View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";


const HomeStack = createNativeStackNavigator();

export default function Home({ navigation }) {

  const pressHandler = (route) => {
    navigation.navigate(route)
  }

  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <Text style={globalStyles.titleText}>Home Screen</Text>
        <Button
          title={"show details"}
          onPress={() => pressHandler("ReviewDetails")}
        />
        <StatusBar style="auto" />
      </View>

      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'This home page' }}
      />
    </>
  )
}
