import React from "react";
import {StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";


const MainReviews = ({navigation}) => {
  return (
    <>
      <Text>Home Page</Text>
      <StatusBar style="auto" />
    </>
  )


}


const mainReviewsStyles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 20
  }
});


export default MainReviews;