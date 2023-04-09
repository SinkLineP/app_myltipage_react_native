import React from "react";
import {Image} from "react-native";

export default function ImageViewer({ selectedImage, styles }) {
  const imageSource = selectedImage !== ""
    ? { uri: selectedImage }
    : require("./Images/default_profile_icon.webp");

  return <Image style={styles} source={imageSource} />;
}

