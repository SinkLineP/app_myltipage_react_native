import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {checkIsCreatedUser} from "../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";
import {LoginSchema} from "./Schematics/Schematics";


export default function Login({btnTitle, changeForm, navigation}) {

  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, {resetForm}) => {
        if (values.email && values.password !== "") {
          checkIsCreatedUser(values.email, values.password).then(r => {
            if (r.code === "ok") {
              dispatch(setCurrentUser(r.user))
              setCode(r.code);
              resetForm({values: ""})
              dispatch(switchAuth())
              navigation.navigate(
                "MainProfile"
              )
            } else {
              setCode(r.code);
            }
          })
        }
        setTimeout(() => setCode(""), 3000);
      }}
    >
      {(props) => (
        <View style={LoginStyles.container}>
          <View style={LoginStyles.form}>
            <Text style={LoginStyles.error}>{code === "unprocessable_entity" ? "Почта или пароль не верна." : ""}</Text>
            {props.errors.email && props.touched.email ? (<Text style={LoginStyles.error}>{props.errors.email}</Text>) : <Text style={LoginStyles.error}></Text>}
            <TextInput
              style={LoginStyles.input}
              placeholder={"Введите вашу почту.."}
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />

            {props.errors.password && props.touched.password ? (<Text style={LoginStyles.error}>{props.errors.password}</Text>) : <Text style={LoginStyles.error}></Text>}
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