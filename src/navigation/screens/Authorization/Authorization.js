import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, Dimensions} from "react-native";
import {Formik} from "formik";
import {StatusBar} from "expo-status-bar";
import * as Yup from 'yup';

const errorsMessages = {
  shortText: 'Слишком коротко!',
  longText: 'Слишком длинно!',
  required: 'Обязательно для заполнения'
}
const AuthorizationSchema = Yup.object().shape({
  username: Yup.string().min(2, errorsMessages.shortText).max(50, errorsMessages.longText).required(errorsMessages.required),
  password: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
  confirmPassword: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
});

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

        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={AuthorizationSchema}
          onSubmit={(values, {resetForm}) => {
            if (values.username && values.confirmPassword && values.password !== "") {
              console.log(values)
              resetForm({values: ""})
            }
          }}
        >
          {(props) => (
            <View style={AuthStyles.container}>
              <View style={AuthStyles.form}>

                <TextInput
                  style={AuthStyles.input}
                  placeholder={"Введите имя пользователя.."}
                  onChangeText={props.handleChange("username")}
                  value={props.values.username}
                />

                <TextInput
                  style={AuthStyles.input}
                  placeholder={"Введите пароль.."}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />

                {btnStatus === "registration" ? (
                  <TextInput
                    style={AuthStyles.input}
                    placeholder={"Подтвердите пароль.."}
                    onChangeText={props.handleChange("confirmPassword")}
                    value={props.values.confirmPassword}
                  />
                ) : ""}
              </View>

              <Text style={AuthStyles.btnSubmit} onPress={props.handleSubmit} type={"submit"}>{btnTitle}</Text>

              {btnStatus === "registration" ? (
                <Text style={AuthStyles.auth}>Есть учетная запись - <Text style={AuthStyles.link} onPress={() => changeForm("Авторизация", "Войти", "login", props.resetForm)}>войти</Text></Text>
              ) : (
                <Text style={AuthStyles.auth}>Нету учетной записи - <Text style={AuthStyles.link} onPress={() => changeForm("Регистрация", "Зарегистрироваться", "registration", props.resetForm)}>зарегистрироваться</Text></Text>
              )}
            </View>
          )}
        </Formik>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>

  )
}

const AuthStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#048f9d",
    width: "auto",
    padding: 10,
    marginBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#404040",
    fontWeight: "bold",
    textDecorationLine: "none"
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#048f9d",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  title: {
    textAlign: "center",
    color: "#048f9d",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "20%"
  },
  auth: {
    color: "#404040",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#048f9d"
  },
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})