import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Rating from "../Rating/Rating";


function Card({item, navigation}) {
  return (
    <TouchableOpacity
      style={stylesCard.item}
      onPress={() =>
        navigation.navigate(
          "ReviewDetails"
          ,
          {
            title: item.title,
            body: item.body,
            rating: item.rating,
            releaseDate: item.releaseDate,
            image: item.img,
            isNested: true,
          }
        )
      }>
      <Image style={stylesCard.image} source={{
        height: 200,
        uri: item.img
      }} />
      <View style={stylesCard.content}>
        <Text style={stylesCard.title}>{ item.title }</Text>
        <Text style={stylesCard.releaseDate}>Дата выхода: { item.releaseDate }</Text>
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
  )
}

export default Card;


const stylesCard = StyleSheet.create({
  item: {
    marginBottom: 20,
    borderWidth: 1,
    margin: 20,
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

