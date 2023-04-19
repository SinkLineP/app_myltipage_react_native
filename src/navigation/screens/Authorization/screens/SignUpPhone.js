import React, {useState} from "react";
import {Formik} from "formik";
import {createUserWithPhone, VerifyUserPhone} from "../../../../db/getData";
import {
  customValidate, generatePassword,
  generateUsername,
  rand,
  stopInterval,
} from "../../../../Variables/functions";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../components/LinkSwitchLoginAndRegister/LinkSwitchLoginAndRegister";
import { MaskedTextInput } from "react-native-mask-text";
import {TIME_TO_DELETE_THE_SMS} from "../../../../Variables/ServerConfig";
import {setDefaultPassword, setLimitSendSMS} from "../../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";


export default function SignUpPhone({navigation, changeForm}) {
  const limitSendSMS = useSelector(state => state.users.limitSendSMS);
  const limitMessage = useSelector(state => state.users.limitMessage);
  const [showError, setError] = useState("");
  const [statusCode, setStatusCode] = useState("BAD");
  const [showTimer, setShowTimer] = useState("Отправить код");
  const [submittedSMSCode, setSubmittedCode] = useState(0);
  const [noCorrectSMS, setNoCorrectSMS] = useState("");
  const [valuesPhone, setValuesPhone] = useState("");
  const [valuesSMSCode, setValuesSMSCode] = useState("");
  const dispatch = useDispatch();
  let interval = null;
  let timeout = null;


  return (
    <Formik
      initialValues={{
        phone: "",
        sms_code: ""
      }}
      onSubmit={() => {
        if (Number(valuesSMSCode) === submittedSMSCode && Number(valuesSMSCode) !== 0 && submittedSMSCode !== 0) {
          const generatePassword = rand(100000, 999999);
          createUserWithPhone({
            username: generateUsername(),
            mail: "",
            phone: valuesPhone,
            lastname: "",
            firstname: "",
            surname: "",
            password: `${generatePassword}`,
            age: "",
            avatar: "deleted",
            gender: "other",
          }).then(async (data) => {
            if (data.isUsedPhone === "") {
              dispatch(setDefaultPassword(generatePassword))
              changeForm("Авторизация", "Войти", "login")
            } else {
              setError(data.isUsedPhone);
              setTimeout(() => setError(""), 3000)
            }
          })
        }
      }}
    >
      {(props) => {
        return (
          <>
            <View style={SignUpStyles.container}>
              <View style={SignUpStyles.form}>

                <View>
                  {/*error show*/}
                  {showError !== "" ? (<Text style={SignUpStyles.error}>{showError}</Text>) : ("")}
                  {limitMessage !== "" ? (<Text style={SignUpStyles.limitMessage}>{limitMessage}</Text>) : ("")}

                  {props.errors.phone && props.touched.phone ? (
                    <Text style={SignUpStyles.error}>{props.errors.phone}</Text>
                  ) : (
                    <Text style={SignUpStyles.error}>{customValidate(valuesPhone, 11, 11)}</Text>
                  )}

                  <MaskedTextInput
                    mask="+7 (999) 999 99 99"
                    onChangeText={(_, phone) => setValuesPhone(phone)}
                    value={valuesPhone}
                    style={SignUpStyles.input}
                    keyboardType="numeric"
                    placeholder={"+7 (___) ___ __ __"}
                  />

                  <TouchableHighlight style={SignUpStyles.buttonSendSMSCode} underlayColor='transparent'>
                    {limitSendSMS !== 0 ? (
                      <View>
                        <Text style={SignUpStyles.titleSendSMSCode} onPress={() => {
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
                      <Text style={SignUpStyles.titleSendSMSCode}>Недоступно</Text>
                    )}
                  </TouchableHighlight>
                </View>
                <View>
                  {props.errors.phone && props.touched.phone ? (<Text style={SignUpStyles.error}>{props.errors.phone}</Text>) : <Text style={SignUpStyles.error}>{noCorrectSMS}</Text>}
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
                    style={SignUpStyles.input}
                    keyboardType="numeric"
                    placeholder={"Введите код.."}
                  />
                </View>
              </View>

              {Number(valuesSMSCode) === submittedSMSCode && Number(valuesSMSCode) !== 0 && submittedSMSCode !== 0 ? (
                <ButtonConfirm color={"white"} background={"#048f9d"} size={25} title={"Зарегистрироваться"} funcPress={props.handleSubmit} />
              ) : (
                <ButtonConfirm color={"white"} background={"#5eb7c0"} size={25} title={"Зарегистрироваться"} funcPress={props.handleSubmit} />
              )}
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
