import React, {useState} from "react";
import {View, FlatList, Image, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";

const ShowReviewContent = ({ navigation, reviews}) => {
  return (
    <View>
      <View>
        {reviews.length === 0 ? (
          <>
            <Image style={showReviewContentStyles.emptyPageImage} source={require("./emptyPage/emptyPage.png")} />
            <Text style={showReviewContentStyles.empty}>Данный контент съело привидение.</Text>
          </>
        ) : (
          <FlatList
            data={reviews}
            renderItem={({ item }) => <Card item={item} navigation={navigation}/>}
          />
        )}

        <StatusBar style="auto" />
      </View>
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
  },
  empty: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 18,
    color: "#4a4848",
    fontFamily: "shell-sans-bold"
  },
  emptyPageImage: {
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  }
})

export default ShowReviewContent;