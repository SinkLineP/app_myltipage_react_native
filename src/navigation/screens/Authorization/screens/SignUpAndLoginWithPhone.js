import React, {useState} from "react";
import {Formik} from "formik";
import {checkCreatedUserWithPhone, createUserWithPhone, LoginDBPhone, VerifyUserPhone} from "../../../../db/getData";
import {customValidate, generateUsername, handleAuthClick, rand} from "../../../../Variables/functions";
import {Text, View, StyleSheet} from "react-native";
import ButtonConfirm from "../../../../components/Profile/Buttons/ButtonConfirm";
import {setCurrentUser, setLimitSendSMS, switchAuth} from "../../../../store/Slices/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInputMasked from "../components/TextInputMasked/TextInputMasked";


export default function SignUpAndLoginWithPhone({navigation}) {
  const limitSendSMS = useSelector(state => state.users.limitSendSMS);
  const limitMessage = useSelector(state => state.users.limitMessage);
  const [submittedSMSCode, setSubmittedCode] = useState(0);
  const [noCorrectSMS, setNoCorrectSMS] = useState("");
  const [valuesPhone, setValuesPhone] = useState("");
  const [valuesSMSCode, setValuesSMSCode] = useState("");
  const [isCreatedUser, setCreatedUser] = useState("");
  const [showInputSMSCode, setShowInputSMSCode] = useState(false);
  const dispatch = useDispatch();


  const funcCheckCreatedUser = (phone) => {
    if (phone.length === 11) {
      checkCreatedUserWithPhone(phone).then(r => {
        if (r.checkUser === 200) {
          setCreatedUser("created")
        } else if (r.checkUser === 100) {
          setCreatedUser("uncreated")
        }
      })
    }

    if (phone.length < 11) {
      setShowInputSMSCode(false);
      setNoCorrectSMS("");
    }

    setValuesPhone(phone)
  }

  const funcCheckValidSMSCode = (sms_code) => {
    if (Number(sms_code) !== submittedSMSCode && sms_code.length === 6) {
      setNoCorrectSMS("Код не верный");
    } else {
      setNoCorrectSMS("");
    }

    setValuesSMSCode(sms_code);
  }

  const funcSubmitButton = async (data) => {
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
                  {/*error show*/}
                  {limitMessage !== "" ? (<Text style={LoginStyles.limitMessage}>{limitMessage}</Text>) : ("")}

                  {props.errors.phone && props.touched.phone ? (
                    <Text style={LoginStyles.error}>{props.errors.phone}</Text>
                  ) : (
                    <Text style={LoginStyles.error}>{customValidate(valuesPhone, 11, 11)}</Text>
                  )}

                  <TextInputMasked
                    mask={"+7 (999) 999 99 99"}
                    values={valuesPhone}
                    placeholder={"+7 (___) ___ __ __"}
                    keyboardType={"numeric"}
                    funcChangeText={(_, phone) => funcCheckCreatedUser(phone)}
                  />
                </View>

                {valuesPhone.length === 11 ? (
                  <View>
                    {props.errors.phone && props.touched.phone ? (<Text style={LoginStyles.error}>{props.errors.phone}</Text>) : <Text style={LoginStyles.error}>{noCorrectSMS}</Text>}

                    {showInputSMSCode === false ? (
                      <Text style={LoginStyles.buttonSendSMS} onPress={() => {
                        dispatch(setLimitSendSMS(limitSendSMS - 1));
                        const smsCode = rand(100000, 999999);

                        VerifyUserPhone(valuesPhone, smsCode).then(r => {
                          if (r.sms[valuesPhone].status === "OK") {
                            setSubmittedCode(smsCode);
                            console.log(r);
                          } else {
                            console.log("BAD")
                          }
                        });

                        setShowInputSMSCode(true);
                      }}>Отправить код</Text>
                    ) : (
                      <TextInputMasked
                        mask={"999-999"}
                        values={valuesSMSCode}
                        placeholder={"Введите код.."}
                        keyboardType={"numeric"}
                        funcChangeText={(_, sms_code) => funcCheckValidSMSCode(sms_code)}
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
  title: {
    textAlign: "center",
    color: "#048f9d",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  buttonSendSMS: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#048f9d",
    width: "auto",
    padding: 10,
    marginBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#048f9d",
    fontWeight: "bold",
    textDecorationLine: "none",
    fontSize: 20,
    textAlign: "center"
  }
})
