import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import {
  checkCreatedUserWithPhone,
  createUserWithPhone,
  LoginDB,
  LoginDBPhone,
  VerifyUserPhone
} from "../../../../db/getData";
import {
  customValidate,
  generateUsername,
  rand,
  stopInterval,
} from "../../../../Variables/functions";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../components/LinkSwitchLoginAndRegister";
import { MaskedTextInput } from "react-native-mask-text";
import {TIME_TO_DELETE_THE_SMS} from "../../../../Variables/ServerConfig";
import {setCurrentUser, setLimitSendSMS, switchAuth} from "../../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {AuthSchema, errorsMessages} from "../Schematics/Schematics";
import {handleAuthClick} from "./Authorization";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LoginPhone({navigation, changeForm}) {
  const limitSendSMS = useSelector(state => state.users.limitSendSMS);
  const limitMessage = useSelector(state => state.users.limitMessage);
  const [showError, setError] = useState("");
  const [statusCode, setStatusCode] = useState("BAD");
  const [showTimer, setShowTimer] = useState("Отправить код");
  const [submittedSMSCode, setSubmittedCode] = useState(0);
  const [noCorrectSMS, setNoCorrectSMS] = useState("");
  const [valuesPhone, setValuesPhone] = useState("");
  const [valuesSMSCode, setValuesSMSCode] = useState("");
  const [noCorrectData, setNoCorrectData] = useState("");
  const [isCreatedUser, setCreatedUser] = useState("");
  const dispatch = useDispatch();
  let interval = null;
  let timeout = null;


  return (
    <Formik
      initialValues={{
        phone: ""
      }}
      onSubmit={() => {
        if (Number(valuesSMSCode) === submittedSMSCode && Number(valuesSMSCode) !== 0 && submittedSMSCode !== 0) {
          LoginDBPhone({
            phone: valuesPhone
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

              dispatch(switchAuth())
              navigation.navigate(
                "MainProfile"
              )
            } else {
              setNoCorrectData(data.failure)
              setTimeout(() => setNoCorrectData(""), 3000)
            }
          })
        }
      }}
    >
      {(props) => {
        return (
          <>
            <View style={LoginStyles.container}>
              <View style={LoginStyles.form}>

                <View>
                  {/*error show*/}
                  {showError !== "" ? (<Text style={LoginStyles.error}>{showError}</Text>) : ("")}
                  {noCorrectData !== "" ? (<Text style={LoginStyles.error}>{noCorrectData}</Text>) : ("")}
                  {limitMessage !== "" ? (<Text style={LoginStyles.limitMessage}>{limitMessage}</Text>) : ("")}
                  {isCreatedUser === "uncreated" ? (<Text style={LoginStyles.limitMessage}>{errorsMessages.userIsNoCreated}</Text> ) : ("")}

                  {props.errors.phone && props.touched.phone ? (
                    <Text style={LoginStyles.error}>{props.errors.phone}</Text>
                  ) : (
                    <Text style={LoginStyles.error}>{customValidate(valuesPhone, 11, 11)}</Text>
                  )}

                  <MaskedTextInput
                    mask="+7 (999) 999 99 99"
                    onChangeText={(_, phone) => {
                      if (phone.length === 11) {
                        checkCreatedUserWithPhone(phone).then(r => {
                          if (r.checkUser === 200) {
                            setCreatedUser("created")
                          } else if (r.checkUser === 100) {
                            setCreatedUser("uncreated")
                          }
                        })
                      }

                      setValuesPhone(phone)
                    }}
                    value={valuesPhone}
                    style={LoginStyles.input}
                    keyboardType="numeric"
                    placeholder={"+7 (___) ___ __ __"}
                  />

                  <TouchableHighlight style={LoginStyles.buttonSendSMSCode} underlayColor='transparent'>
                    {limitSendSMS !== 0 && isCreatedUser === "created" ? (
                      <View>
                        <Text style={LoginStyles.titleSendSMSCode} onPress={() => {
                          if (valuesPhone.length === 11) {
                            dispatch(setLimitSendSMS(limitSendSMS - 1))
                            let time = TIME_TO_DELETE_THE_SMS;
                            const smsCode = rand(100000, 999999);

                            VerifyUserPhone(valuesPhone, smsCode).then(r => {
                              if (r.sms[valuesPhone].status === "OK") {
                                setStatusCode("OK");
                                setSubmittedCode(smsCode);

                                // запускаем таймер
                                interval = setInterval(() => {
                                  const minutes = Math.floor(time / 60);
                                  let seconds = time % 60;
                                  seconds = seconds < 10 ? "0" + seconds: seconds;
                                  setShowTimer(`${minutes}:${seconds}`);
                                  time--;
                                }, 1000);

                                console.log(r);

                                // очистка таймера
                                timeout = setTimeout(() => {
                                  stopInterval(interval);
                                  setShowTimer("Отправить код")
                                }, TIME_TO_DELETE_THE_SMS * 1000 + 1000)
                              } else {
                                setStatusCode("BAD");

                                if (r.sms[valuesPhone].status_code === 202) {
                                  setError("Неправильно указан номер телефона")
                                }

                                setTimeout(() => setError(""), 3000)
                              }
                            });
                          }
                        }}>{showTimer}</Text>
                      </View>
                    ) : (
                      <Text style={LoginStyles.titleSendSMSCode}>Недоступно</Text>
                    )}
                  </TouchableHighlight>
                </View>
                <View>
                  {props.errors.phone && props.touched.phone ? (<Text style={LoginStyles.error}>{props.errors.phone}</Text>) : <Text style={LoginStyles.error}>{noCorrectSMS}</Text>}
                  <MaskedTextInput
                    mask="999-999"
                    onChangeText={(_, sms_code) => {
                      if (Number(sms_code) !== submittedSMSCode) {
                        console.log(sms_code);
                        console.log(submittedSMSCode);
                        setNoCorrectSMS("Код не верный");
                      } else {
                        setNoCorrectSMS("");
                      }
                      setValuesSMSCode(sms_code);
                    }}
                    value={valuesSMSCode}
                    style={LoginStyles.input}
                    keyboardType="numeric"
                    placeholder={"Введите код.."}
                  />
                </View>
              </View>

              {Number(valuesSMSCode) === submittedSMSCode && Number(valuesSMSCode) !== 0 && submittedSMSCode !== 0 ? (
                <ButtonConfirm color={"white"} background={"#048f9d"} size={25} title={"Войти"} funcPress={props.handleSubmit} />
              ) : (
                <ButtonConfirm color={"white"} background={"#5eb7c0"} size={25} title={"Войти"} funcPress={props.handleSubmit} />
              )}
              <LinkSwitchLoginAndRegister changeForm={() => changeForm("Регистрация", "Зарегистрироваться", "registration")} titleButton={"зарегистрироваться"} titleContent={"Нету учетной записи - "} />
            </View>
          </>
        )
      }}
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
    flex: 1
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5
  },
  limitMessage: {
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
  buttonSendSMSCode: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 8,
    right: 20,
    position: "absolute",
    borderLeftWidth: 1,
    borderColor: "#048f9d",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  titleSendSMSCode: {
    color: "#048f9d"
  }
})
