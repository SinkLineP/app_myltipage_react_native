import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Formik} from "formik";
import {AuthSchema} from "../Schematics/Schematics";
import {createUser} from "../../../../db/getData";
import {generateUsernameFromEmail} from "../../../../Variables/functions";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkLoginAndSignUp from "../components/LinkLoginAndSignUp/LinkLoginAndSignUp";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";

export default function SignUpEmail({navigation}) {
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
          is_confirmed_email: "false",
          is_confirmed_phone : "false"
        }).then(async (data) => {
          if (data.isUsedEmail === "") {
            navigation.navigate("LoginEmail");
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
            <Text style={SignUpStyles.title}>Зарегистрируйтесь</Text>
            <View style={SignUpStyles.container}>
              {showError !== "" ? (<Text style={SignUpStyles.error}>{showError}</Text>) : ""}
              <View style={SignUpStyles.form}>
                {props.errors.email && props.touched.email ? (<Text style={SignUpStyles.error}>{props.errors.email}</Text>) : <Text style={SignUpStyles.error}></Text>}
                <CustomTextInput onChangeText={props.handleChange("email")} value={props.values.email} placeholder={"Введите адрес электронной почты.."} />

                {props.errors.password && props.touched.password ? (<Text style={SignUpStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
                <CustomTextInput onChangeText={props.handleChange("password")} value={props.values.password} placeholder={"Введите пароль.."} />
              </View>

              <ButtonConfirm
                color={"white"}
                background={props.values.email !== "" && props.values.password !== "" ? "#048f9d" : "#5eb7c0"}
                size={25}
                title={"Зарегистрироваться"}
                funcPress={props.handleSubmit}
              />

              <LinkLoginAndSignUp navigation={navigation} titleLink={"Войдите"} linkEmail={"LoginEmail"} linkPhone={"Authorization"} />
            </View>
          </>
        )
      }}
    </Formik>
  )
}


const SignUpStyles = StyleSheet.create({
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
  },
  title: {
    textAlign: "center",
    color: "#048f9d",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  }
})