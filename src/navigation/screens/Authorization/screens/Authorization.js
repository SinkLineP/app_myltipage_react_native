import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import SignUpAndLoginWithPhone from "./SignUpAndLoginWithPhone";
import {useSelector} from "react-redux";
import isEqual from "isequal.es/index";


export default function Authorization({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);
  console.log(currentUser);
  // if (isEqual(currentUser, {}) !== true) {
  //   navigation.navigate("MainProfile");
  // }

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