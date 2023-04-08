import React from "react";
import {StyleSheet, Image} from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image style={stylesImageViewer.image} source={imageSource} />;
}

const stylesImageViewer = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
})