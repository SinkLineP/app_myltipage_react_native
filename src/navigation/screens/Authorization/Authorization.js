import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import SignUp from "./SignUp";
import Login from "./Login";




export default function Authorization({navigation}) {
  const [title, setTitle] = useState("Регистрация");
  const [btnTitle, setBtnTitle] = useState("Зарегистрироваться");
  const [btnStatus, setBtnStatus] = useState("registration");

  const changeForm = (title, btnTitle, btnStatus, funcResetForm) => {
    setTitle(title);
    setBtnTitle(btnTitle);
    setBtnStatus(btnStatus);
    funcResetForm({values: ""})
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={AuthStyles.content}>
        <Text style={AuthStyles.title}>{title}</Text>
        {btnStatus !== "registration" ? (
          <Login navigation={navigation} btnStatus={btnStatus} btnTitle={btnTitle} changeForm={changeForm}  />
        ) : (
          <SignUp navigation={navigation} btnStatus={btnStatus} btnTitle={btnTitle} changeForm={changeForm} />
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