import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { globalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";


const HomeStack = createNativeStackNavigator();

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {key: 1, title: "Фантастические твари и где они обитают", rating: 7.6, releaseDate: "2016 год" },
    {key: 2, title: "Фантастические твари: Преступления Грин-де-Вальда", rating: 6.6, releaseDate: "2018 год" },
    {key: 3, title: "Фантастические твари: Тайны Дамблдора", rating: 6, releaseDate: "2022 год" }
  ])


  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={homeStyles.item}
              onPress={() =>
                navigation.navigate(
                  "ReviewDetails",
                  {
                    title: item.title,
                    rating: item.rating,
                    releaseDate: item.releaseDate
                  }
                )
            }>
              <Text style={homeStyles.title}>{ item.title }</Text>
              <Text style={homeStyles.releaseDate}>Дата выхода: { item.releaseDate }</Text>
            </TouchableOpacity>
          )}
        />
        <StatusBar style="auto" />
      </View>

      <HomeStack.Screen
        name="Home"
        component={Home}
      />
    </>
  )
}

const homeStyles = StyleSheet.create({
  item: {
    marginBottom: 20,
    borderWidth: 0,
    padding: 5
  },
  title: {
    fontFamily: "shell-sans-bold",
    fontSize: 24,
    lineHeight: 26
  },
  releaseDate: {
    fontFamily: "shell-sans-lightItalic",
    color: "#323232",
  }
})