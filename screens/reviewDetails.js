import React from "react";
import {View, Text, Button} from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.containerNoFlex}>
      <Text>reviewDetails Screen</Text>
      <Button title={"Back to main screen"} onPress={() => pressHandler()} />
    </View>
  )
}
