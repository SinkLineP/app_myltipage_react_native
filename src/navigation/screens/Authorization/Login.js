import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {checkIsCreatedUser, LoginDB} from "../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {AuthSchema} from "./Schematics/Schematics";
import {handleAuthClick} from "./Authorization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonConfirm from "../../../components/Profile/Buttons/ButtonConfirm";
import useAuth from "../../../hooks/useAuth";
import FormAuth from "./components/Form/Form";
import {saveCurrentUser, useCurrentUser} from "../../../hooks/useCurrentUser";


export default function Login({btnTitle, changeForm, navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={AuthSchema}
      onSubmit={(values, {resetForm}) => {
        handleAuthClick().then(r => r)
        const user = {
          mail: values.email,
          password: values.password,
        }
        LoginDB(user).then(async (data) => {
          try {
            await AsyncStorage.setItem("token", data.jwt)
          } catch (e) {
            console.log(e)
          }
          dispatch(setCurrentUser({
            id: data.user.id,
            username: data.user.username,
            mail: data.user.mail,
            phone: data.user.phone,
            lastname: data.user.lastname,
            firstname: data.user.firstname,
            surname: data.user.surname,
            password: data.user.password,
            age: data.user.age,
            avatar: data.user.avatar,
            created_at: data.user.created_at,
            updated_at: data.user.updated_at
          }))
          resetForm({values: ""})
          dispatch(switchAuth())
          navigation.navigate(
            "MainProfile"
          )
        })
        //====================old code===================
        // checkIsCreatedUser(values.email, values.password).then(r => {
        //   if (r.code === "ok") {
        //     dispatch(setCurrentUser(r.user))
        //     setCode(r.code);
        //     resetForm({values: ""})
        //     dispatch(switchAuth())
        //     navigation.navigate(
        //       "MainProfile"
        //     )
        //   } else {
        //     setCode(r.code);
        //   }
        // })
        // setTimeout(() => setCode(""), 3000);
      }}

    >
      {(props) => (
        <FormAuth
          titleContent={"Нету учетной записи - "}
          titleButton={"зарегистрироваться"}
          changeForm={() => changeForm("Регистрация", "Зарегистрироваться", "registration", props.resetForm)}
          props={props}
          styles={LoginStyles}
          btnConfirmTitle={"Войти"}
        />
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