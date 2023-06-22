import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";


const ContentAds = ({ findAds }) => {
  if (findAds.length !== 0) {
    return findAds.map((ad, index) => {
      return (
        <View key={index} style={stylesShowAds.containerItem}>
          <Text>Address: {ad.address}</Text>
        </View>
      )
    })
  }
}

export default function ShowAds({ route }) {
  const { findAds } = route.params;

  return (
    <ScrollView style={stylesShowAds.container}>
      <ContentAds findAds={findAds} />
    </ScrollView>
  )
}

const stylesShowAds = StyleSheet.create({
  container: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  containerItem: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginVertical: 5
  }
})