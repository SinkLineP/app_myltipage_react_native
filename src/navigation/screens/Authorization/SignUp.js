import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import VerificationSMS from "./VerificationSMS";


export default function SignUp({errorsMessages, btnStatus, btnTitle, changeForm}) {
  const SignUpSchema = Yup.object().shape({
    username: Yup.string().min(2, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
    password: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).required(errorsMessages.required),
    confirmPassword: Yup.string().min(6, errorsMessages.shortText).max(20, errorsMessages.longText).oneOf([Yup.ref('password')], 'Пароли не совпадают').required(errorsMessages.required),
  });

  const acceptPhoneSchema = Yup.object().shape({
    phone: Yup.number().min(10, errorsMessages.shortText).max(10, errorsMessages.longText).required(errorsMessages.required),
  });

  const SignUpObject = {
    username: "",
    mail: "",
    phone: "",
    lastname: "",
    firstname: "",
    surname: "",
    password: "",
    age: "",
    avatar: ""
  }

  const [showAccept, setShowAccept] = useState(false);


  if (showAccept === false) {
    return (
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, {resetForm}) => {
          if (values.username && values.confirmPassword && values.password !== "") {
            SignUpObject.username = values.username;
            SignUpObject.password = values.password;
            setShowAccept(true);
            resetForm({values: ""})
            //=======
            return VerificationSMS()
          }
        }}
      >
        {(props) => (
          <View style={SignUpStyles.container}>
            <View style={SignUpStyles.form}>

              {props.errors.username && props.touched.username ? (<Text style={SignUpStyles.error}>{props.errors.username}</Text>) : <Text></Text>}
              <TextInput
                style={SignUpStyles.input}
                placeholder={"Введите имя пользователя.."}
                onChangeText={props.handleChange("username")}
                value={props.values.username}
              />

              {props.errors.password && props.touched.password ? (<Text style={SignUpStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
              <TextInput
                style={SignUpStyles.input}
                placeholder={"Введите пароль.."}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />

              {props.errors.confirmPassword && props.touched.confirmPassword ? (<Text style={SignUpStyles.error}>{props.errors.confirmPassword}</Text>) : <Text></Text>}
              <TextInput
                style={SignUpStyles.input}
                placeholder={"Подтвердите пароль.."}
                onChangeText={props.handleChange("confirmPassword")}
                value={props.values.confirmPassword}
              />
            </View>

            <Text style={SignUpStyles.btnSubmit} onPress={props.handleSubmit} type={"submit"}>{btnTitle}</Text>

            <Text style={SignUpStyles.auth}>Есть учетная запись - <Text style={SignUpStyles.link} onPress={() => changeForm("Авторизация", "Войти", "login", props.resetForm)}>войти</Text></Text>
          </View>
        )}
      </Formik>
    )
  } else {
    return (
      <Formik

        initialValues={{
          phone: ""
        }}
        validationSchema={acceptPhoneSchema}
        onSubmit={(values, {resetForm}) => {
          if (values.phone !== "") {
            console.log(values)
          }
        }}
      >
        <View style={SignUpStyles.container}>
          <Text style={SignUpStyles.text} onPress={() => setShowAccept(false)}>Back to Form</Text>
        </View>
      </Formik>
    )
  }



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
  },
  text: {
    color: "#048f9d",
    fontWeight: "bold"
  }
})