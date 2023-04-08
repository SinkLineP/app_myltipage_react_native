import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Formik} from "formik";
import {AuthSchema} from "./Schematics/Schematics";
import ButtonConfirm from "../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "./LinkSwitchLoginAndRegister";
import {createUser} from "../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {handleAuthClick} from "./Authorization";
import FormAuth from "./components/Form/Form";

export default function SignUp({navigation, changeForm}) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser)


  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={AuthSchema}
      onSubmit={(values, {resetForm}) => {
        handleAuthClick().then(r => r)
        const options = {
          username: "",
          mail: values.email,
          phone: "",
          lastname: "",
          firstname: "",
          surname: "",
          password: values.password,
          age: "",
          avatar: ""
        };

        createUser(options).then(async (data) => {
          try {
            await AsyncStorage.setItem('token', data.jwt);
          }
          catch (error) {
            console.log(error)
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
      }}
    >
      {(props) => (
        <FormAuth
          titleContent={"Есть учетная запись - "}
          titleButton={"войти"}
          changeForm={() => changeForm("Авторизация", "Войти", "login", props.resetForm)}
          props={props}
          styles={SignUpStyles}
          btnConfirmTitle={"Зарегистрироваться"}
        />
      )}
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
    textAlign: "center"
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