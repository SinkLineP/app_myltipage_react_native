import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import Rating from "../../../components/Rating/Rating";

export default function ReviewDetails({ navigation, route }) {
  const { rating, releaseDate, title, image, body } = route.params;

  return (
    <ScrollView>
      <View style={reviewStyles.item}>

        {image === "" ? (
          <Image
            style={reviewStyles.image}
            source={require("../../../../assets/defaultImages/move_default.jpg")}
          />
        ) : (
          <Image
            source={{
              height: 200,
              uri: image
            }}
          />
        )}

        <View style={reviewStyles.content}>
          <Text style={reviewStyles.title}>{title}</Text>
          <Text style={reviewStyles.desc}>{body}</Text>
          <Text style={reviewStyles.releaseDate}>Дата выхода: {releaseDate} год(а).</Text>
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
    </ScrollView>
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
  },
  image: {
    height: 200,
    width: "auto"
  },
})
