import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import {AuthSchema} from "../Schematics/Schematics";
import {createUser} from "../../../../db/getData";
import {handleAuthClick} from "./Authorization";
import {generateUsernameFromEmail} from "../../../../Variables/functions";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../components/LinkSwitchLoginAndRegister";

export default function SignUpEmail({navigation, changeForm}) {
  const [showError, setError] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={AuthSchema}
      onSubmit={(values) => {
        createUser({
          username: generateUsernameFromEmail(values.email),
          mail: values.email,
          phone: "",
          lastname: "",
          firstname: "",
          surname: "",
          password: values.password,
          age: "",
          avatar: "deleted",
          gender: "other",
        }).then(async (data) => {
          if (data.isUsedEmail === "") {
            changeForm("Авторизация", "Войти", "login")
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
            <View style={SignUpStyles.container}>
              <View style={SignUpStyles.form}>
                {props.errors.email && props.touched.email ? (<Text style={SignUpStyles.error}>{props.errors.email}</Text>) : <Text style={SignUpStyles.error}></Text>}
                <TextInput
                  style={SignUpStyles.input}
                  placeholder={"Введите адрес электронной почты.."}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />

                {props.errors.password && props.touched.password ? (<Text style={SignUpStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
                <TextInput
                  style={SignUpStyles.input}
                  placeholder={"Введите пароль.."}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />
              </View>

              <ButtonConfirm customStyles={SignUpStyles.btnSubmit} color={"white"} background={"#048f9d"} size={25} title={"Зарегистрироваться"} funcPress={props.handleSubmit} />
              <LinkSwitchLoginAndRegister changeForm={() => changeForm("Авторизация", "Войти", "login")} titleButton={"войти"} titleContent={"Есть учетная запись - "} />
            </View>
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