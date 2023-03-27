import React, {useState} from "react";
import {View, FlatList, ImageBackground, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";

const ShowReviewContent = ({ navigation, reviews, title}) => {
  return (
    <View>
      <ImageBackground source={require("./backgroundImage/background_01.png")}>

        {reviews === [] ? (
          <Text>В данной категории нету {title}</Text>
        ) : (
          <FlatList
            data={reviews}
            renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
          />
        )}

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  )
};

const showReviewContentStyles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  buttonAddMove: {
    backgroundColor: "coral",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    padding: 7,
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center"
  }
})

export default ShowReviewContent;