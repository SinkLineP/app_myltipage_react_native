import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import {Formik} from "formik";


export default function SignUp() {
  const [title, setTitle] = useState("Регистрация");
  const [btnTitle, setBtnTitle] = useState("Зарегистрироваться");


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Text style={AuthStyles.title}>{title}</Text>

        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {(props) => (
            <View style={AuthStyles.container}>
              <TextInput
                style={AuthStyles.input}
                placeholder={"Введите имя пользователя.."}
                onChangeText={props.handleChange("username")}
                value={props.values.username}
              />

              {/*<TextInput*/}
              {/*  style={AuthStyles.input}*/}
              {/*  placeholder={"Введите почту.."}*/}
              {/*  onChangeText={props.handleChange("title")}*/}
              {/*  value={props.values.username}*/}
              {/*/>*/}

              {/*<TextInput*/}
              {/*  style={AuthStyles.input}*/}
              {/*  placeholder={"Введите телефон.."}*/}
              {/*  onChangeText={props.handleChange("title")}*/}
              {/*  value={props.values.username}*/}
              {/*/>*/}

              <TextInput
                style={AuthStyles.input}
                placeholder={"Введите пароль.."}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />

              <TextInput
                style={AuthStyles.input}
                placeholder={"Подтвердите пароль.."}
                onChangeText={props.handleChange("confirmPassword")}
                value={props.values.confirmPassword}
              />

              <Text style={AuthStyles.btnSubmit} onPress={() => props.handleSubmit}>{btnTitle}</Text>
            </View>
          )}
        </Formik>

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
    marginBottom: 7
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
    marginTop: 15
  }
})