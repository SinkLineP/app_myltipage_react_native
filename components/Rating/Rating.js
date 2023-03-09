import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {arrayToString, isFloat} from "../../options/Mathes";
import fillStarIcon from "./Icons/fillStar.svg";
import unfilledStarIcon from "./Icons/unfilledStar.svg";
import halfFilledStarIcon from "./Icons/halfFilledStar.svg";


export default function Rating({currentRating, maxRating}) {
  const curRating = Math.floor(currentRating);
  const [star, setStar] = useState([]);
  const remainStars = [];

  const showRating = (star, curRating, setStar) => {
    const remainingStars = Math.floor(maxRating - currentRating);


    if (star.length !== curRating) {
      for (let i = 0; i < curRating; i++) {
        setStar([...star, "*"])
      }

    }

    if (remainingStars.length !== 0) {
      for (let i = 0; i < remainingStars; i++) {
        remainStars.push("0");
      }
    }


    if (isFloat(currentRating)) {
      const numberAfterComa = Number(currentRating.toString().split(".")[1]);


      if (numberAfterComa > 0 && numberAfterComa !== 0) {
        return <Text>{arrayToString(star) + "/" + arrayToString(remainStars)}</Text>;// выводит оценку с плавающей запятой
      }
    } else {
      return <Text>{arrayToString(star) + arrayToString(remainStars)}</Text>;// выводит оценку целым числом
    }
  }



  return (
    <View style={ratingStyles.item}>
      <Text>Рейтинг: </Text>
      {showRating(star, curRating, setStar)}
    </View>
  )
}


const ratingStyles = StyleSheet.create({
  item: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 5,
    borderColor: "#d2d2d2",
    backgroundColor: "#ffffff",
    minHeight: 50
  }
})