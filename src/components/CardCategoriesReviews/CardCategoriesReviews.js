import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";


const CardCategoriesReviews = ({item, navigation, imageDefault}) => {
  const {title, image, transfer} = item;


  return (
    <TouchableOpacity
      style={stylesCardReviews.item}
      onPress={() =>
        navigation.navigate(
          transfer,
          {
            title: title,
            image: image
          }
        )
      }>
      {/*<Image style={stylesCardReviews.image} source={image === "" ? imageDefault : require(image)} />*/}
      <Text style={stylesCardReviews.title}>{ title }</Text>
    </TouchableOpacity>
  )
}


const stylesCardReviews = StyleSheet.create({
  item: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#bababa"
  },
  image: {
    height: 200,
    width: "auto"
  },
  title: {
    padding: 5,
    fontFamily: "shell-sans-boldItalic",
    color: "#454545",
    textAlign: "center"
  }
})


export default CardCategoriesReviews;