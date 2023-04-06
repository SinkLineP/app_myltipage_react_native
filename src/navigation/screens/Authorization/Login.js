import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {checkIsCreatedUser} from "../../../db/getData";
import {setAuth, setCurrentUser} from "../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";


export default function Login({errorsMessages, btnStatus, btnTitle, changeForm, navigation}) {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().min(2, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
    password: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
  });
  const dispatch = useDispatch();
  const [code, setCode] = useState(0);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, {resetForm}) => {
        if (values.username && values.password !== "") {
          checkIsCreatedUser(values.username).then(r => {
            if (r.code !== 404) {
              const userFromDB = r.user[0];

              if (values.password === userFromDB.password) {
                dispatch(setCurrentUser(r.user[0]))
                setCode(r.code);
                resetForm({values: ""})
                dispatch(setAuth(true))
                navigation.navigate(
                  "MainProfile"
                )
              } else {
                setCode(405)
              }
            } else if (r.code === 404) {
              setCode(r.code);
            }
          })
        }
        setTimeout(() => setCode(0), 3000);
      }}
    >
      {(props) => (
        <View style={LoginStyles.container}>
          <View style={LoginStyles.form}>
            {props.errors.username && props.touched.username ? (<Text style={LoginStyles.error}>{props.errors.username}</Text>) : <Text style={LoginStyles.error}>{code === 404 ? "Такого пользователя не существует." : ""}</Text>}
            <TextInput
              style={LoginStyles.input}
              placeholder={"Введите имя пользователя.."}
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            />

            {props.errors.password && props.touched.password ? (<Text style={LoginStyles.error}>{props.errors.password}</Text>) : <Text style={LoginStyles.error}>{code === 405 ? "Пароль неверный." : ""}</Text>}
            <TextInput
              style={LoginStyles.input}
              placeholder={"Введите пароль.."}
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
          </View>

          <Text style={LoginStyles.btnSubmit} onPress={props.handleSubmit} type={"submit"}>{btnTitle}</Text>

          <Text style={LoginStyles.auth}>Нету учетной записи - <Text style={LoginStyles.link} onPress={() => changeForm("Регистрация", "Зарегистрироваться", "registration", props.resetForm)}>зарегистрироваться</Text></Text>
        </View>
      )}
    </Formik>
  )
}


const LoginStyles = StyleSheet.create({
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
    marginTop: 10,
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
  btnSubmit: {
    padding: 10,
    backgroundColor: "#048f9d",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center"
  }
})