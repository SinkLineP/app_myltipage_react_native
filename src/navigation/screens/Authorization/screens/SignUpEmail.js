import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Formik} from "formik";
import {AuthSchema} from "../Schematics/Schematics";
import {createUser, sendConfirmCodeToMail, sendEmailSignUp, VerifyUserPhone} from "../../../../db/getData";
import {generateUsernameFromEmail, handleAuthClick, rand, validationEmail} from "../../../../Variables/functions";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkLoginAndSignUp from "../components/LinkLoginAndSignUp/LinkLoginAndSignUp";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import TextInputMasked from "../components/TextInputMasked/TextInputMasked";
import ButtonSendCode from "../components/ButtonSendCode/ButtonSendCode";
import {setCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";



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

const InputCode = ({showErrorCode, props, setIsCodeSuccessfully, setShowErrorCode, showError, SignUpStyles}) => {
  return (
    <>
      {showErrorCode !== "" ? (<Text style={SignUpStyles.errorCode}>{showErrorCode}</Text>) : (<Text style={SignUpStyles.errorCode}></Text>)}
      <ShowButtonCode setIsCodeSuccessfully={setIsCodeSuccessfully} setShowErrorCode={setShowErrorCode} valueEmail={props.values.email} showError={showError} />
    </>
  )
}

const InputPassword = ({props, isCenter, onChangeText, value, placeholder, SignUpStyles}) => {
  return (
    <>
      {props.errors.password && props.touched.password ? (<Text style={SignUpStyles.error}>{props.errors.password}</Text>) : <Text></Text>}
      <CustomTextInput isCenter={isCenter} onChangeText={onChangeText} value={value} placeholder={placeholder} />
    </>
  )
}

export default function SignUpEmail({navigation}) {
  const [showError, setError] = useState("");
  const [showErrorCode, setShowErrorCode] = useState("");
  const [isCodeSuccessfully, setIsCodeSuccessfully] = useState(false);
  const dispatch = useDispatch();

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
          is_confirmed_email: "true",
          is_confirmed_phone : "false",
          is_default_password: "false"
        }).then(async (data) => {
          if (data.isUsedEmail === "") {
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
              is_confirmed_phone : data.user.is_confirmed_phone,
              is_default_password: data.user.is_default_password,
              created_at: data.user.created_at,
              updated_at: data.user.updated_at
            }))

            dispatch(switchAuth())
            navigation.navigate(
              "MainProfile"
            )
          } else {
            setError(data.isUsedEmail);
            setTimeout(() => setError(""), 3000)
          }
        })
      }}
    >
      {(props) => {

        useEffect(() => {
          if (validationEmail(props.values.email) === false) {
            setIsCodeSuccessfully(false);
          }
        })

        return (
          <>
            <Text style={SignUpStyles.title}>Зарегистрируйтесь</Text>
            <View style={SignUpStyles.container}>
              {showError !== "" ? (<Text style={SignUpStyles.error}>{showError}</Text>) : ""}
              <View style={SignUpStyles.form}>
                {props.errors.email && props.touched.email ? (<Text style={SignUpStyles.error}>{props.errors.email}</Text>) : <Text style={SignUpStyles.error}></Text>}
                <CustomTextInput isCenter={true} onChangeText={props.handleChange("email")} value={props.values.email} placeholder={"Введите адрес электронной почты.."} />

                {validationEmail(props.values.email) ? (<View>
                  {isCodeSuccessfully !== true  ? (
                    <InputCode
                      setShowErrorCode={setShowErrorCode}
                      showErrorCode={showErrorCode}
                      showError={showError}
                      props={props}
                      setIsCodeSuccessfully={setIsCodeSuccessfully}
                      SignUpStyles={SignUpStyles}
                    />
                  ) : (
                    <InputPassword
                      props={props}
                      isCenter={true}
                      placeholder={"Введите пароль.."}
                      value={props.values.password}
                      onChangeText={props.handleChange("password")}
                      SignUpStyles={SignUpStyles}
                    />
                  )}
                </View>) : ("")}
              </View>

              <ButtonConfirm
                color={"white"}
                background={props.values.email !== "" && props.values.password !== "" ? "#048f9d" : "#5eb7c0"}
                size={25}
                title={"Зарегистрироваться"}
                funcPress={props.values.email !== "" && props.values.password !== "" ? props.handleSubmit : () => {}}
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
  },
  errorCode: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3
  },
})