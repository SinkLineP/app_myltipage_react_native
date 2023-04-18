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
  const [title, setTitle] = useState("Регистрация");
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
        <Text style={AuthStyles.title}>{title}</Text>
        {btnStatus !== "registration" ? (
          <>
            <LoginPhone changeForm={changeForm} navigation={navigation} />
            {/*<LoginEmail navigation={navigation} btnTitle={btnTitle} changeForm={changeForm}  />*/}
          </>
        ) : (
          <>
            {/*<SignUpEmail navigation={navigation} changeForm={changeForm} />*/}
            <SignUpPhone changeForm={changeForm} navigation={navigation} />
          </>
        )}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>

  )
}

const AuthStyles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#048f9d",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})