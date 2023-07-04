import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import SignUpAndLoginWithPhone from "./SignUpAndLoginWithPhone";


export default function Authorization({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={AuthStyles.content}>
        <SignUpAndLoginWithPhone navigation={navigation} />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  )
}

const AuthStyles = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})