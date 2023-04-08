import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Formik} from "formik";
import {AuthSchema, errorsMessages} from "./Schematics/Schematics";
import ButtonConfirm from "../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "./LinkSwitchLoginAndRegister";
import {checkIsCreatedUser, createUser} from "../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {handleAuthClick} from "./Authorization";
import FormAuth from "./components/Form/Form";

export default function SignUp({navigation, changeForm}) {
  const [showError, setError] = useState("");
  const [funcReset, setFuncReset] = useState(() => {})

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={AuthSchema}
      onSubmit={(values, {resetForm}) => {
        handleAuthClick().then(r => r)
        createUser({
          username: "",
          mail: values.email,
          phone: "",
          lastname: "",
          firstname: "",
          surname: "",
          password: values.password,
          age: "",
          avatar: ""
        }).then(async (data) => {
          if (data.isUsedEmail === "") {
            changeForm("Авторизация", "Войти", "login", resetForm)
          } else {
            setError(data.isUsedEmail);
            setTimeout(() => setError(""), 3000)
          }
        })
      }}
    >
      {(props) => {

        return (
          <>
            <Text style={SignUpStyles.error}>{showError !== "" ? showError : ""}</Text>
            <FormAuth
              titleContent={"Есть учетная запись - "}
              titleButton={"войти"}
              changeForm={() => changeForm("Авторизация", "Войти", "login", props.resetForm)}
              props={props}
              styles={SignUpStyles}
              btnConfirmTitle={"Зарегистрироваться"}
            />
          </>
        )
      }}
    </Formik>
  )
}


const SignUpStyles = StyleSheet.create({
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
    flex: 1
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
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#048f9d",
    fontWeight: "bold"
  },
  notActive: {
    padding: 10,
    backgroundColor: "#91bdc6",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  imagePickerButton: {
    padding: 10,
    backgroundColor: "#048f9d",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
    width: "80%"
  },
  imageContainer: {
    flexDirection: "row"
  },
  image: {
    flex: 1,
  }
})