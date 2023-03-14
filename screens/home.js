import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native";
import { globalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";
import {
  fantasticAnimalsPoster1,
  fantasticAnimalsPoster2,
  fantasticAnimalsPoster3
} from "./postersLinks/postersURL";
import Rating from "../components/Rating/Rating";
import {setOptions} from "../options/routerHeaderOptions";
import ReviewDetails from "./reviewDetails";
import About from "./about";
import {NavigationContainer} from "@react-navigation/native";


const HomeStack = createNativeStackNavigator();

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {key: 1, title: "Фантастические твари и где они обитают", rating: 7.6, releaseDate: "2016 год", img: fantasticAnimalsPoster1 },
    {key: 2, title: "Фантастические твари: Преступления Грин-де-Вальда", rating: 6.6, releaseDate: "2018 год", img: fantasticAnimalsPoster2 },
    {key: 3, title: "Фантастические твари: Тайны Дамблдора", rating: 6.0, releaseDate: "2022 год", img: fantasticAnimalsPoster3 }
  ])


  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <FlatList
          style={homeStyles.list}
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={homeStyles.item}
              onPress={() =>
                navigation.push(
                  "ReviewDetails",
                  {
                    title: item.title,
                    rating: item.rating,
                    releaseDate: item.releaseDate,
                    image: item.img
                  }
                )
            }>
              <Image style={homeStyles.image} source={{
                height: 200,
                uri: item.img
              }} />
              <View style={homeStyles.content}>
                <Text style={homeStyles.title}>{ item.title }</Text>
                <Text style={homeStyles.releaseDate}>Дата выхода: { item.releaseDate }</Text>
              </View>
              <View>
                <Rating
                  currentRating={item.rating}
                  addNumberRating={true}
                  addStarsRating={false}
                  colorStarRating={"orange"}
                  colorRange={{
                    medium: 4.0,
                    height: 7.0
                  }}
                  isBorder={false}
                />
              </View>
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
    borderWidth: 1,
    padding: 0,
    borderColor: "#d2d2d2",
    backgroundColor: "#ffffff"
  },
  image: {
    marginBottom: 10
  },
  title: {
    fontFamily: "shell-sans-bold",
    fontSize: 24,
    lineHeight: 26
  },
  releaseDate: {
    fontFamily: "shell-sans-lightItalic",
    color: "#323232",
  },
  content: {
    padding: 5,
  }
})