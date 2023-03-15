import React from "react";
import {View, Text, Button, Image, StyleSheet} from "react-native";
import { globalStyles } from "../../styles/global";
import Rating from "../../components/Rating/Rating";

export default function ReviewDetails({ navigation, route }) {
  const { rating, releaseDate, title, image, body } = route.params;

  return (
    <View style={globalStyles.containerNoFlex}>
      <View style={reviewStyles.item}>
        <Image source={{
          height: 200,
          uri: image
        }} />
        <View style={reviewStyles.content}>
          <Text style={reviewStyles.title}>{title}</Text>
          <Text style={reviewStyles.desc}>{body}</Text>
          <Text style={reviewStyles.releaseDate}>{releaseDate}</Text>
        </View>
      </View>

      <View style={{
        margin: 20
      }}>
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
          isBorder={true}
        />
      </View>
    </View>
  )
}

const reviewStyles = StyleSheet.create({
  item: {
    marginBottom: 0,
    borderWidth: 1,
    padding: 0,
    margin: 20,
    borderColor: "#d2d2d2",
    backgroundColor: "#ffffff"
  },
  title: {
    fontFamily: "shell-sans-bold",
    fontSize: 24,
    lineHeight: 26
  },
  desc: {
    marginTop: 15,
    marginBottom: 15
  },
  releaseDate: {
    fontFamily: "shell-sans-lightItalic",
    color: "#323232",
  },
  content: {
    padding: 5,
  }
})
