import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {arrayToString, isFloat, replaceStringToImage} from "./Mathes";

export default function Rating({currentRating, maxRating, ImageW, ImageH, addNumberRating, colorStarRating}) {
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
      const rating = arrayToString(star) + "/" + arrayToString(remainStars);

      if (numberAfterComa > 0 && numberAfterComa !== 0) {
        return replaceStringToImage([], rating, ImageW, ImageH, colorStarRating);
      }
    } else {
      const rating = arrayToString(star) + arrayToString(remainStars);

      return replaceStringToImage([], rating, ImageW, ImageH, colorStarRating);// выводит оценку целым числом
    }
  }

  const colorRatingShow = (rating) => {
    if (rating >= 7.0) {
      return "green";
    } else if (rating >= 4.0) {
      return "orange";
    } else {
      return "red";
    }
  }

  const showNumberRating = (isCreatedRating, currRating) => {
    if (isCreatedRating) {
      return <Text style={{
        color: colorRatingShow(currRating),
        fontWeight: "bold"
      }} >{currRating}</Text>
    }
  }



  return (
    <View style={ratingStyles.item}>
      <Text>Рейтинг: {showNumberRating(addNumberRating, currentRating)}</Text>
      <View>
        <Text style={ratingStyles.stars}>
          {showRating(star, curRating, setStar)}
        </Text>
      </View>
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
  },
  stars: {
    padding: 0
  },
  numberRating: {

  }
})