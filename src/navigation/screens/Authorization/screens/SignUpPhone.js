import React, {useState} from "react";
import {Formik} from "formik";
import {acceptPhoneSchema} from "../Schematics/Schematics";
import {handleAuthClick} from "./Authorization";
import {createUser, VerifyUserPhone} from "../../../../db/getData";
import {rand, stopInterval, TimerCountDownFromNumber} from "../../../../Variables/functions";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import LinkSwitchLoginAndRegister from "../components/LinkSwitchLoginAndRegister";
import { MaskedTextInput } from "react-native-mask-text";
import {TIME_TO_DELETE_THE_SMS} from "../../../../Variables/ServerConfig";


export default function SignUpPhone({navigation, changeForm}) {
  const [showError, setError] = useState("");
  const [statusCode, setStatusCode] = useState("BAD");
  const [showTimer, setShowTimer] = useState("Отправить код");
  let time = TIME_TO_DELETE_THE_SMS;
  let interval = null;

  return (
    <Formik
      initialValues={{
        phone: "",
        // sms_code: ""
      }}
      validationSchema={acceptPhoneSchema}
      onSubmit={(values, {resetForm}) => {
        handleAuthClick().then(r => r)
        const smsCode = rand(1000, 9999);
        VerifyUserPhone(values.phone, "Код подтверждения", smsCode).then(r => {
          if (r.status === "OK") {
            setStatusCode("OK")
          } else {
            setStatusCode("BAD")
            console.log(r.status_code);
          }
        });

        // createUser({
        //   username: generateUsername(),
        //   mail: "",
        //   phone: values.phone,
        //   lastname: "",
        //   firstname: "",
        //   surname: "",
        //   password: "",
        //   age: "",
        //   avatar: "deleted",
        //   gender: "other",
        //   smsCode: ""
        // }).then(async (data) => {
        //   if (data.isUsedEmail === "") {
        //     changeForm("Авторизация", "Войти", "login", resetForm)
        //   } else {
        //     setError(data.isUsedEmail);
        //     setTimeout(() => setError(""), 3000)
        //   }
        // })
      }}
    >
      {(props) => {
        return (
          <>
            <Text style={SignUpStyles.error}>{showError !== "" ? showError : ""}</Text>

            <View style={SignUpStyles.container}>
              <View style={SignUpStyles.form}>

                <View>
                  {props.errors.phone && props.touched.phone ? (<Text style={SignUpStyles.error}>{props.errors.phone}</Text>) : <Text style={SignUpStyles.error}></Text>}

                  <MaskedTextInput
                    mask="+7 (999) 999 99 99"
                    onChangeText={(_, rawText) => props.setFieldValue("phone", rawText)}
                    value={props.values.phone}
                    style={SignUpStyles.input}
                    keyboardType="numeric"
                    placeholder={"+7 (___) ___ __ __"}
                  />

                  <TouchableHighlight style={SignUpStyles.buttonSendSMSCode} onPress={(val) => {console.log(val)}} underlayColor='transparent'>
                    <View>
                      <Text style={SignUpStyles.titleSendSMSCode} onPress={() => {
                        if (props.values.phone.length === 11) {
                          interval = setInterval(() => {
                            const minutes = Math.floor(time / 60);
                            let seconds = time % 60;
                            seconds = seconds < 10 ? "0" + seconds: seconds;
                            setShowTimer(`${minutes}:${seconds}`);
                            time--;
                          }, 1000);

                          if (time === 0) {
                            stopInterval(interval);
                          }
                        }
                      }}>{showTimer}</Text>
                    </View>
                  </TouchableHighlight>
                </View>


              </View>

              {statusCode === "OK" && props.values !== "" ? (
                <ButtonConfirm color={"white"} background={"#048f9d"} size={25} title={"Зарегистрироваться"} funcPress={props.handleSubmit} />
              ) : (
                <ButtonConfirm  color={"white"} background={"#4a9da4"} size={25} title={"Зарегистрироваться"} funcPress={props.handleSubmit} />
              )}
              <LinkSwitchLoginAndRegister changeForm={() => changeForm("Авторизация", "Войти", "login", props.resetForm)} titleButton={"войти"} titleContent={"Есть учетная запись - "} />
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
