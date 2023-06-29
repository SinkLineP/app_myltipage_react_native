import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";


const ContentAds = ({ findAds }) => {
  if (findAds.length !== 0) {
    return findAds.map((ad, index) => {
      return (
        <View key={index} style={stylesShowAds.containerItem}>
          {/*<ShowPreviewObject arrayImage={ad.images} />*/}
          <Text>Тип объекта: {ad.category}</Text>
          <Text>Address: {ad.address}</Text>
        </View>
      )
    })
  }
}

export default function ShowAds() {
  const estatesStore = useSelector(state => state.estates.allEstates);

  return (
    <ScrollView style={stylesShowAds.container}>
      <ContentAds findAds={estatesStore} />
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