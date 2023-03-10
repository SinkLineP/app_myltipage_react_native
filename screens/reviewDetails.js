import React from "react";
import {View, Text, Button, Image, StyleSheet} from "react-native";
import { globalStyles } from "../styles/global";
import Rating from "../components/Rating/Rating";

export default function ReviewDetails({ navigation, route }) {
  const { rating, releaseDate, title, image } = route.params;
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.containerNoFlex}>
      <View style={reviewStyles.item}>
        <Image source={{
          height: 200,
          uri: image
        }} />
        <View style={reviewStyles.content}>
          <Text style={reviewStyles.title}>{title}</Text>
          <Text style={reviewStyles.releaseDate}>{releaseDate}</Text>
        </View>
      </View>

      <View>
        <Rating
          currentRating={rating}
          maxRating={10}
          ImageW={30}
          ImageH={30}
          addNumberRating={true}
          addStarsRating={true}
          colorStarRating={"orange"}
          colorRange={{
            medium: 4.0,
            height: 7.0
          }}
        />
      </View>
    </View>
  )
}

const reviewStyles = StyleSheet.create({
  item: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 0,
    borderColor: "#d2d2d2",
    backgroundColor: "#ffffff"
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
