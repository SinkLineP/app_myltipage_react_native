import React from "react";
import {View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
  const { rating, releaseDate, title } = route.params;
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.containerNoFlex}>
      <Text>{title}</Text>
      <Text>{releaseDate}</Text>
      <Button title={"Back to main screen"} onPress={() => pressHandler()} />
    </View>
  )
}
