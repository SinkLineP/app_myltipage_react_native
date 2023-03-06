import React, {useState} from "react";
import {View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";


const HomeStack = createNativeStackNavigator();

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {title: "Фантастические твари и где они обитают", rating: 7.6, body: "2016 год" },
    {title: "Фантастические твари: Преступления Грин-де-Вальда", rating: 6.6, body: "2018 год" },
    {title: "Фантастические твари: Тайны Дамблдора", rating: 6, body: "2022 год" }
  ])


  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <Text style={globalStyles.titleText}>Home Screen</Text>

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
