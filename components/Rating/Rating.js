import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {arrayToString, isFloat} from "../../options/Mathes";


export default function Rating({currentRating, maxRating}) {
  const curRating = Math.floor(currentRating);
  const [star, setStar] = useState([]);

  const showRating = (star, curRating, setStar) => {
    if (star.length !== curRating) {
      for (let i = 0; i < curRating; i++) {
        setStar([...star, "*"])
      }
    }

    if (isFloat(currentRating)) {
      const numberAfterComa = Number(currentRating.toString().split(".")[1]);

      if (numberAfterComa > 0 && numberAfterComa !== 0) {
        return <Text>{arrayToString(star)+"/"}</Text>;
      }
    } else {
      return <Text>{arrayToString(star)}</Text>;
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