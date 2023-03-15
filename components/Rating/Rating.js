import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {arrayToString, isFloat, replaceStringToImage} from "./Mathes";

export default function Rating({
 currentRating,
 maxRating,
 ImageW,
 ImageH,
 addNumberRating,
 colorStarRating,
 colorRange,
 addStarsRating,
 isBorder,
 backgroundColor,
 colorTitle
}) {
  const curRating = Math.floor(currentRating);
  const [star, setStar] = useState([]);
  const remainStars = [];
  const messages = {
    ERROR: {
      big_rating: "Error, is rating big! Please editing this rating on correct.",
      low_rating: "Error, is rating low! Please editing this rating on correct."
    },
    INFO: {},
    CORRECT: {}
  }


  const showRating = (star, curRating, setStar) => {
    if (curRating > 10) {
      return <Text style={ratingStyles.errorMessage}>{messages.ERROR.big_rating}</Text>
    }

    if (curRating < 0) {
      return <Text style={ratingStyles.errorMessage}>{messages.ERROR.low_rating}</Text>
    }

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
    if (rating >= colorRange.height) {
      return "green";
    } else if (rating >= colorRange.medium) {
      return "orange";
    } else {
      return "red";
    }
  }

  const showNumberRating = (isCreatedRating, currRating) => {
    if (curRating > 10) {
      return <Text style={ratingStyles.errorMessage}>{messages.ERROR.big_rating}</Text>
    }

    if (curRating < 0) {
      return <Text style={ratingStyles.errorMessage}>{messages.ERROR.low_rating}</Text>
    }

    if (isCreatedRating) {
      return <Text style={{
        color: colorRatingShow(currRating),
        fontWeight: "bold"
      }} >{currRating}</Text>
    }
  }

  return (
    <View style={{
      borderWidth: isBorder ? 1 : 0,
      padding: 5,
      borderColor: "#d2d2d2",
      backgroundColor: backgroundColor === "" || backgroundColor === undefined ? "#ffffff" : backgroundColor,
      minHeight: 33,
    }}>
      <Text style={{
        color: colorTitle !== "" ? colorTitle : "black"
      }}>Рейтинг: {showNumberRating(addNumberRating, currentRating)}</Text>
      <View>
        {addStarsRating ? (
          <Text style={ratingStyles.stars}>
            {showRating(star, curRating, setStar)}
          </Text>
        ) : ""}
      </View>
    </View>
  )
}


const ratingStyles = StyleSheet.create({
  stars: {
    padding: 0
  },
  errorMessage: {
    color: "#ff3939"
  }
})