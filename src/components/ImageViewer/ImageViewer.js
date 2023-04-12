import React from "react";
import {Image, View} from "react-native";

export default function ImageViewer({ selectedImage, styles }) {
  const imageSource = selectedImage !== "" && selectedImage !== "deleted"
    ? { uri: selectedImage }
    : require("./Images/default_profile_icon.webp");

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  return (
    <View style={{
      borderRadius: 60,
      borderWidth: 2,
      marginLeft: 20,
      padding: 3,
      borderColor: `rgba(${getRandomArbitrary(1, 255)},${getRandomArbitrary(1, 255)},${getRandomArbitrary(1, 255)},1)`,
    }}>
      <Image style={styles} source={imageSource} />
    </View>
  );
}

