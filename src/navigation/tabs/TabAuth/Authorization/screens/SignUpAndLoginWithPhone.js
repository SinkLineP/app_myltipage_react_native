import React, {useState} from "react";
import {Formik} from "formik";
import {createUserWithPhone, LoginDBPhone} from "../../../../../db/getData";
import {
  customValidate,
  funcCheckCreatedUser,
  funcCheckValidSMSCode,
  funcSendCode,
  generateUsername,
  handleAuthClick,
  rand
} from "../../../../../Variables/functions";
import {Text, View, StyleSheet, Button} from "react-native";
import ButtonConfirm from "../../../../../components/Profile/Buttons/ButtonConfirm";
import {setCurrentUser, switchAuth} from "../../../../../store/Slices/usersSlice";
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInputMasked from "../components/TextInputMasked/TextInputMasked";
import ButtonSendCode from "../components/ButtonSendCode/ButtonSendCode";
import SocialMediaGroup from "../components/SocialMediaGroup/SocialMediaGroup";


export default function SignUpAndLoginWithPhone({navigation}) {
  const [submittedSMSCode, setSubmittedCode] = useState(0);
  const [noCorrectSMS, setNoCorrectSMS] = useState("");
  const [isCreatedUser, setCreatedUser] = useState("");
  const [showInputSMSCode, setShowInputSMSCode] = useState(false);
  const [valuesPhone, setValuesPhone] = useState("");
  const [valuesSMSCode, setValuesSMSCode] = useState("");
  const [showError, setShowError] = useState("");
  const dispatch = useDispatch();


  const funcSubmitButton = async (data) => {
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

    setShowInputSMSCode(false);
    setSubmittedCode(0);
    setValuesPhone("");
    setValuesSMSCode("");
    dispatch(switchAuth());
    navigation.navigate(
      "MainProfile"
    );
  }


  return (
    <Formik
      initialValues={{
        phone: ""
      }}
      onSubmit={() => {
        if (Number(valuesSMSCode) === submittedSMSCode && Number(valuesSMSCode) !== 0 && submittedSMSCode !== 0) {
          if (isCreatedUser === "created") {
            LoginDBPhone({
              phone: valuesPhone
            }).then(async (data) => {
              if (data.user !== "empty") {
                await funcSubmitButton(data);
              }
            })
          } else if (isCreatedUser === "uncreated") {
            const generatePassword = rand(100000, 999999);
            console.log(generatePassword);
            createUserWithPhone({
              username: generateUsername(),
              mail: "",
              phone: valuesPhone,
              lastname: "",
              firstname: "",
              surname: "",
              password: String(generatePassword),
              age: "",
              avatar: "deleted",
              gender: "other",
              is_confirmed_email: "false",
              is_confirmed_phone: "true",
              is_default_password: "true"
            }).then(async (data) => {
              if (data.isUsedPhone === "") {
                await funcSubmitButton(data);
              }
            })
          }
        }
      }}
    >
      {(props) => {
        return (
          <>
            <View style={LoginStyles.container}>
              <Text style={LoginStyles.title}>Зарегистрироваться или авторизироваться</Text>
              <View style={LoginStyles.form}>
                <View>
                  {props.errors.phone && props.touched.phone ? (
                    <Text style={LoginStyles.error}>{props.errors.phone}</Text>
                  ) : (
                    <Text style={LoginStyles.error}>{customValidate(valuesPhone, 11, 11)}</Text>
                  )}

                  <TextInputMasked
                    fontSize={""}
                    mask={"+7 (999) 999 99 99"}
                    values={valuesPhone}
                    placeholder={"+7 (___) ___ __ __"}
                    keyboardType={"numeric"}
                    funcChangeText={(_, phone) => funcCheckCreatedUser(phone, setCreatedUser, setShowInputSMSCode, setNoCorrectSMS, setValuesPhone, setShowError)}
                  />
                </View>

                {valuesPhone.length === 11 ? (
                  <View>
                    {props.errors.phone && props.touched.phone ? (<Text style={LoginStyles.error}>{props.errors.phone}</Text>) : <Text style={LoginStyles.error}>{noCorrectSMS}</Text>}

                    {showInputSMSCode === false ? (
                      <ButtonSendCode isActive={true} funcSendCode={() => funcSendCode(dispatch, valuesPhone, setSubmittedCode, setShowInputSMSCode)} />
                    ) : (
                      <TextInputMasked
                        fontSize={""}
                        mask={"999-999"}
                        values={valuesSMSCode}
                        placeholder={"Введите код.."}
                        keyboardType={"numeric"}
                        funcChangeText={(_, sms_code) => funcCheckValidSMSCode(sms_code, submittedSMSCode, setNoCorrectSMS, setValuesSMSCode)}
                      />
                    )}
                  </View>
                ) : ("")}
              </View>

              <ButtonConfirm
                color={"white"}
                background={Number(valuesSMSCode) === submittedSMSCode && Number(valuesSMSCode) !== 0 && submittedSMSCode !== 0 ? "#048f9d" : "#5eb7c0"}
                size={25}
                title={isCreatedUser === "created" ? "Войти" : "Зарегистрироваться"}
                funcPress={props.handleSubmit}
              />

              <View>
                <Text style={LoginStyles.textLink}>
                  <Text style={LoginStyles.link} onPress={() => navigation.navigate("LoginEmail")}>Войдите</Text> или
                  <Text style={LoginStyles.link} onPress={() => navigation.navigate("SignUpEmail")}> Зарегистрируйтесь</Text>{'\n'} с помощью почты.
                </Text>
              </View>

              {/*<SocialMediaGroup />*/}
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
    flex: 1
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
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
  textLink: {
    color: "#424242",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold"
  },
  link: {
    color: "#048f9d",
  },

})
