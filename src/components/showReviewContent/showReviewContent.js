import React, {useState} from "react";
import {View, FlatList, Image, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import Card from "../../components/Card/Card";
import NotFound from "../NotFound/NotFound";

const ShowReviewContent = ({ navigation, reviews}) => {
  return (
    <View>
      <View>
        {reviews.length === 0 ? (<NotFound />) : (
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
  }
})

export default ShowReviewContent;