import React from "react";
import FillStar from "./SVG_Stars/fillStar";
import HalfFilledStar from "./SVG_Stars/halfFilledStar";
import UnFilledStar from "./SVG_Stars/unFilledStar";
import {View, StyleSheet} from "react-native";


export function isFloat(value) {
  return typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value);
}

export function arrayToString(array) {
  return array.toString().split(",").join("");
}

export function replaceStringToImage(components, string, imageWidth, imageHeight) {
  const fillStars = string.split("");
  return <View style={styles.container}>
    {fillStars.map((item, key) => {
      if (item === "*") {
        return <FillStar key={key} style={styles.item} widthImage={imageWidth} heightImage={imageHeight} />
      } else if (item === "/") {
        return <HalfFilledStar key={key} style={styles.item} widthImage={imageWidth} heightImage={imageHeight} />
      } else if (item === "0") {
        return <UnFilledStar key={key} style={styles.item} widthImage={imageWidth} heightImage={imageHeight} />
      }
    })}


    <FillStar style={styles.item} />
    <FillStar style={styles.item} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    flex: 1,
  }
})