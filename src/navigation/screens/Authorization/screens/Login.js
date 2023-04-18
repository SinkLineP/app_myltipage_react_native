import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import {LoginDB} from "../../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {AuthSchema} from "../Schematics/Schematics";
import {handleAuthClick} from "./Authorization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../components/LinkSwitchLoginAndRegister";


export default function Login({changeForm, navigation}) {
  const dispatch = useDispatch();
  const [noCorrectData, setNoCorrectData] = useState("");
  const isAuth = useSelector(state => state.users.isAuth);

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
        <>
          <Text></Text>
          <View style={LoginStyles.container}>
            <View style={LoginStyles.form}>
              {props.errors.email && props.touched.email ? (<Text style={LoginStyles.error}>{props.errors.email}</Text>) : <Text style={LoginStyles.error}></Text>}
              <TextInput
                style={LoginStyles.input}
                placeholder={"Введите адрес электронной почты.."}
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />

              {props.errors.password && props.touched.password ? (<Text style={LoginStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
              <TextInput
                style={LoginStyles.input}
                placeholder={"Введите пароль.."}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
            </View>

            <ButtonConfirm customStyles={LoginStyles.btnSubmit} color={"white"} background={"#048f9d"} size={25} title={"Войти"} funcPress={props.handleSubmit} />
            <LinkSwitchLoginAndRegister changeForm={() => changeForm("Регистрация", "Зарегистрироваться", "registration", props.resetForm)} titleButton={"зарегистрироваться"} titleContent={"Нету учетной записи - "} />
          </View>
        </>
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