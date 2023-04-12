import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Formik} from "formik";
import {LoginDB} from "../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";
import {AuthSchema} from "./Schematics/Schematics";
import {handleAuthClick} from "./Authorization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormAuth from "./components/Form/Form";


export default function Login({changeForm, navigation}) {
  const dispatch = useDispatch();
  const [noCorrectData, setNoCorrectData] = useState("")

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={AuthSchema}
      onSubmit={(values, {resetForm}) => {
        LoginDB({
          mail: values.email,
          password: values.password,
        }).then(async (data) => {
          if (data.user !== "empty") {
            handleAuthClick().then(r => r)

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
              gender: data.user.gender,
              created_at: data.user.created_at,
              updated_at: data.user.updated_at
            }))

            resetForm({values: ""})
            dispatch(switchAuth())
            navigation.navigate(
              "MainProfile"
            )
          } else {
            setNoCorrectData(data.failure)
            setTimeout(() => setNoCorrectData(""), 3000)
          }
        })
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
          noCorrectData={noCorrectData}
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