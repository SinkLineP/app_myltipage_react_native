import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import SignUp from "./SignUp";
import Login from "./Login";


const errorsMessages = {
  shortText: 'Слишком коротко!',
  longText: 'Слишком длинно!',
  required: 'Обязательно для заполнения',
  usernameIsBusy: 'Такой пользователь уже существует',
}

export default function Authorization() {
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
        {btnStatus === "registration" ? (
          <SignUp btnStatus={btnStatus} errorsMessages={errorsMessages} btnTitle={btnTitle} changeForm={changeForm} />
        ) : (
          <Login btnStatus={btnStatus} errorsMessages={errorsMessages} btnTitle={btnTitle} changeForm={changeForm}  />
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
    marginTop: 20,
  },
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})