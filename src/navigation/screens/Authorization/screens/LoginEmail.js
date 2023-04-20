import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import {LoginDB} from "../../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";
import {AuthSchema} from "../Schematics/Schematics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import {handleAuthClick} from "../../../../Variables/functions";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import LinkLoginAndSignUp from "../components/LinkLoginAndSignUp/LinkLoginAndSignUp";


export default function LoginEmail({changeForm, navigation}) {
  const dispatch = useDispatch();
  const [noCorrectData, setNoCorrectData] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={AuthSchema}
      onSubmit={(values) => {
        LoginDB({
          mail: values.email,
          password: values.password,
        }).then(async (data) => {
          if (data.user !== "empty") {
            handleAuthClick().then(r => r)

            console.log(data.user)

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
              is_confirmed_email: data.user.is_confirmed_email,
              is_confirmed_phone : data.user.is_confirmed_phone,
              created_at: data.user.created_at,
              updated_at: data.user.updated_at
            }))

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
        <>
          <Text style={LoginStyles.title}>Войдите</Text>
          <View style={LoginStyles.container}>
            <View style={LoginStyles.form}>
              {props.errors.email && props.touched.email ? (<Text style={LoginStyles.error}>{props.errors.email}</Text>) : <Text style={LoginStyles.error}>{noCorrectData}</Text>}
              <CustomTextInput onChangeText={props.handleChange("email")} placeholder={"Введите адрес электронной почты.."} value={props.values.email} />

              {props.errors.password && props.touched.password ? (<Text style={LoginStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
              <CustomTextInput onChangeText={props.handleChange("password")} placeholder={"Введите пароль.."} value={props.values.password} />
            </View>

            <ButtonConfirm
              color={"white"}
              background={props.values.email !== "" && props.values.password !== "" ? "#048f9d" : "#5eb7c0"}
              size={25}
              title={"Войти"}
              funcPress={props.handleSubmit}
            />

            <LinkLoginAndSignUp navigation={navigation} titleLink={"Зарегистрируйтесь"} linkEmail={"SignUpEmail"} linkPhone={"Authorization"} />
          </View>
        </>
      )}
    </Formik>
  )
}


const LoginStyles = StyleSheet.create({
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
  },
  title: {
    textAlign: "center",
    color: "#048f9d",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  }
})