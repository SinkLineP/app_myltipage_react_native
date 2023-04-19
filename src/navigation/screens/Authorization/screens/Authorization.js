import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import SignUpEmail from "./SignUpEmail";
import LoginEmail from "./LoginEmail";
import {UserIsAuthed} from "../../../../db/getData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUpPhone from "./SignUpPhone";
import LoginPhone from "./LoginPhone";


export const handleAuthClick = async () => {
  try {
    const token = await AsyncStorage.getItem("token")
    if(token !== null) {
      UserIsAuthed(token).then(r => r)
    }
  } catch(e) {
    console.log(e)
  }
}

export default function Authorization({navigation}) {
  const [title, setTitle] = useState("Зарегистрируйтесь или войдите");
  const [btnTitle, setBtnTitle] = useState("Зарегистрироваться");
  const [btnStatus, setBtnStatus] = useState("registration");

  const changeForm = (title, btnTitle, btnStatus) => {
    setTitle(title);
    setBtnTitle(btnTitle);
    setBtnStatus(btnStatus);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={AuthStyles.content}>
        <LoginPhone changeForm={changeForm} navigation={navigation} />
        {/*{btnStatus !== "registration" ? (*/}
        {/*  <>*/}
        {/*<LoginEmail navigation={navigation} btnTitle={btnTitle} changeForm={changeForm}  />*/}
        {/*</>*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*<SignUpEmail navigation={navigation} changeForm={changeForm} />*/}
        {/*<SignUpPhone changeForm={changeForm} navigation={navigation} />*/}
        {/*</>*/}
        {/*)}*/}
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