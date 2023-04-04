import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";


export default function Login({errorsMessages, btnStatus, btnTitle, changeForm}) {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().min(2, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
    password: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, {resetForm}) => {
        if (values.username && values.password !== "") {
          console.log(values)
          resetForm({values: ""})
        }
      }}
    >
      {(props) => (
        <View style={LoginStyles.container}>
          <View style={LoginStyles.form}>
            {props.errors.username && props.touched.username ? (<Text style={LoginStyles.error}>{props.errors.username}</Text>) : <Text></Text>}
            <TextInput
              style={LoginStyles.input}
              placeholder={"Введите имя пользователя.."}
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            />

            {props.errors.password && props.touched.password ? (<Text style={LoginStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
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