import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Formik} from "formik";
import {checkUsedEmail, LoginDB, sendEmailSignUp} from "../../../../db/getData";
import {setCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";
import {AuthSchema} from "../Schematics/Schematics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import {handleAuthClick, validationEmail} from "../../../../Variables/functions";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import LinkLoginAndSignUp from "../components/LinkLoginAndSignUp/LinkLoginAndSignUp";
import TextInputMasked from "../components/TextInputMasked/TextInputMasked";
import ButtonSendCode from "../components/ButtonSendCode/ButtonSendCode";



const ShowButtonCode = ({valueEmail, showError, setShowErrorCode, setIsCodeSuccessfully}) => {
  const [inputCode, setInputCode] = useState("");
  const [isShowInputCode, setIsShowInputCode] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");


  if (isShowInputCode === true) {
    return (
      <>
        <TextInputMasked
          mask={"999-999"}
          values={inputCode}
          placeholder={"Введите код.."}
          keyboardType={"numeric"}
          funcChangeText={(_, code) => {
            if (code === String(verifyCode) && code.length === 6) {
              console.log("Code Successful!")
              setShowErrorCode("")
              setIsCodeSuccessfully(true)
            } else if (code !== String(verifyCode) && code.length === 6) {
              console.log("Code Bad!")
              setShowErrorCode("Код неверный.")
              setIsCodeSuccessfully(false)
            }

            if (code.length < 6) {
              setShowErrorCode("")
              setIsCodeSuccessfully(false)
            }

            setInputCode(code)
          }}
        />
      </>
    )
  } else {
    return (
      <ButtonSendCode isActive={showError !== "Данная почта уже используется."} funcSendCode={() => {
        if (showError !== "Данная почта уже используется.") {
          setIsShowInputCode(true)
          sendEmailSignUp(valueEmail).then(r => {
            console.log(r);
            setVerifyCode(r.code);
          })
        }
      }} />
    )
  }
}

const InputCode = ({showErrorCode, props, setIsCodeSuccessfully, setShowErrorCode, showError, LoginStyles}) => {
  return (
    <>
      {showErrorCode !== "" ? (<Text style={LoginStyles.errorCode}>{showErrorCode}</Text>) : (<Text style={LoginStyles.errorCode}></Text>)}
      <ShowButtonCode setIsCodeSuccessfully={setIsCodeSuccessfully} setShowErrorCode={setShowErrorCode} valueEmail={props.values.email} showError={showError} />
    </>
  )
}

const InputPassword = ({props, isCenter, onChangeText, value, placeholder, LoginStyles}) => {
  return (
    <>
      {props.errors.password && props.touched.password ? (<Text style={LoginStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
      <CustomTextInput isCenter={isCenter} onChangeText={onChangeText} value={value} placeholder={placeholder} />
    </>
  )
}

export default function LoginEmail({navigation}) {
  const dispatch = useDispatch();
  const [showError, setError] = useState("");
  const [showErrorCode, setShowErrorCode] = useState("");
  const [isCodeSuccessfully, setIsCodeSuccessfully] = useState(false);

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
              password: data.user.password_digest,
              age: data.user.age,
              avatar: data.user.avatar,
              gender: data.user.gender,
              is_confirmed_email: data.user.is_confirmed_email,
              is_confirmed_phone: data.user.is_confirmed_phone,
              is_default_password: data.user.is_default_password,
              created_at: data.user.created_at,
              updated_at: data.user.updated_at
            }))

            dispatch(switchAuth())
            navigation.navigate(
              "MainProfile"
            )
          } else {
            setError(data.failure)
            setTimeout(() => setError(""), 3000)
          }
        })
      }}

    >
      {(props) => {

        useEffect(() => {
          if (validationEmail(props.values.email) === false) {
            setIsCodeSuccessfully(false);
          } else {
            if (validationEmail(props.values.email) === true) {
              checkUsedEmail( props.values.email).then(r => {
                if (r.message !== "Этот почтовый адрес занят.") {
                  setError("Такого пользователя не существует!");
                } else {
                  setError("")
                }
              })
            }
          }
        })

        return (
          <>
            <Text style={LoginStyles.title}>Войдите</Text>
            <View style={LoginStyles.container}>
              <View style={LoginStyles.form}>
                {props.errors.email && props.touched.email ? (<Text style={LoginStyles.error}>{props.errors.email}</Text>) : <Text style={LoginStyles.error}>{showError}</Text>}
                <CustomTextInput isCenter={true} onChangeText={props.handleChange("email")} placeholder={"Введите адрес электронной почты.."} value={props.values.email} />

                {validationEmail(props.values.email) === true && showError !== "Такого пользователя не существует!" ? (<View>
                  {isCodeSuccessfully !== true  ? (
                    <InputCode
                      setShowErrorCode={setShowErrorCode}
                      showErrorCode={showErrorCode}
                      showError={showError}
                      props={props}
                      setIsCodeSuccessfully={setIsCodeSuccessfully}
                      LoginStyles={LoginStyles}
                    />
                  ) : (
                    <InputPassword
                      props={props}
                      isCenter={true}
                      placeholder={"Введите пароль.."}
                      value={props.values.password}
                      onChangeText={props.handleChange("password")}
                      LoginStyles={LoginStyles}
                    />
                  )}
                </View>) : ("")}
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
        )
      }}
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
  },
  errorCode: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3
  },
})