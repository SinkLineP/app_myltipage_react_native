import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import GoBackNavigation from "../../../Authorization/components/GoBackNavigation/GoBackNavigation";
import ButtonSendCode from "../../../Authorization/components/ButtonSendCode/ButtonSendCode";
import {useDispatch, useSelector} from "react-redux";
import CustomTextInput from "../../../Authorization/components/CustomTextInput/CustomTextInput";
import {checkUsedEmail, EditUser, sendConfirmCodeToMail} from "../../../../../db/getData";
import TextInputMasked from "../../../Authorization/components/TextInputMasked/TextInputMasked";
import ButtonConfirm from "../../../../../components/Profile/Buttons/ButtonConfirm";
import {generateUsername, getTokenFromAsyncStorage, validationEmail} from "../../../../../Variables/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setCurrentUser} from "../../../../../store/Slices/usersSlice";


const SwitchConfirmation = ({mail, is_confirmed_email, navigation}) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const [showInput, setShowInput] = useState(false);
  const [isFoundUser, setIsFoundUser] = useState(false);
  const [valueEmail, setValueEmail] = useState("");
  const [valueCodeInput, setValueCodeInput] = useState("");
  const [showError, setShowError] = useState("");
  const [codeEmailConfirm, setCodeEmailConfirm] = useState(0);
  const [showErrorCode, setShowErrorCode] = useState("");
  const [showEmailHowText, setShowEmailHowText] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();


  if (mail === "" && is_confirmed_email === "false") {
    return (
      <>
        {showError !== "" ? (<Text style={stylesConfirmEmail.error}>{showError}</Text>) : ("")}
        {showEmailHowText === "" ? (
          <CustomTextInput isCenter={false} onChangeText={(val) => {
            if (validationEmail(val)) {
              checkUsedEmail(val).then(r => {
                if (r.message === "User not found.") {
                  console.log(r.message);
                  setIsFoundUser(true);
                } else if (r.message === "Этот почтовый адрес занят.") {
                  setShowError(r.message);
                  setIsFoundUser(false);
                }
              });
            } else {
              setShowError("");
              setShowInput(false);
              setIsFoundUser(false);
            }

            setValueEmail(val)
          }} placeholder={"Введите почту..."} value={valueEmail} />
        ) : (
          <View style={stylesConfirmEmail.containerEmailText}>
            <Text style={stylesConfirmEmail.emailText}>{showEmailHowText !== "" ? showEmailHowText : ""}</Text>
            <Text style={stylesConfirmEmail.editButton} onPress={() => {
              setShowEmailHowText("")
              setShowInput(false)
              setValueCodeInput("")
            }}>изменить...</Text>
          </View>
        )}
        {showInput === true ? (
          <>
            <Text style={stylesConfirmEmail.errorCode}>{showErrorCode !== "" ? showErrorCode : ""}</Text>
            <TextInputMasked
              fontSize={""}
              mask={"999-999"}
              values={valueCodeInput}
              placeholder={"Введите код.."}
              keyboardType={"numeric"}
              funcChangeText={(_, code) => {
                if (code === String(codeEmailConfirm) && code.length === 6) {
                  console.log("Code Successful!")
                  setShowErrorCode("")
                } else if (code !== String(codeEmailConfirm) && code.length === 6) {
                  console.log("Code Bad!")
                  setShowErrorCode("Код неверный.")
                }

                if (code.length < 6) {
                  setShowErrorCode("")
                }

                setValueCodeInput(code)
              }}
            />
          </>
        ) : (
          <ButtonSendCode isActive={isFoundUser !== false} funcSendCode={() => {
            if (isFoundUser !== false) {
              setShowInput(true)
              sendConfirmCodeToMail(currentUser.id, valueEmail).then(r => {
                setCodeEmailConfirm(r.code);
                setShowEmailHowText(valueEmail);
              });
            }
          }} />
        )}

        {Number(valueCodeInput) === codeEmailConfirm && valueCodeInput.length === 6 ? (
          <ButtonConfirm
            color={"white"}
            background={Number(valueCodeInput) === codeEmailConfirm && Number(valueCodeInput) !== 0 && codeEmailConfirm !== 0 ? "#048f9d" : "#5eb7c0"}
            size={25}
            title={"Подтвердить"}
            funcPress={async () => {
              const user = {
                id: currentUser.id,
                mail: showEmailHowText,
                is_confirmed_email: "true",
              }

              await getTokenFromAsyncStorage(setToken)

              EditUser({user, token}).then(r => {
                dispatch(setCurrentUser({
                  id: currentUser.id,
                  username: currentUser.username,
                  mail: r.user.mail,
                  phone: currentUser.phone,
                  lastname: currentUser.lastname,
                  firstname: currentUser.firstname,
                  surname: currentUser.surname,
                  password: currentUser.password,
                  age: currentUser.age,
                  avatar: currentUser.avatar,
                  gender: currentUser.gender,
                  is_confirmed_email: r.user.is_confirmed_email,
                  is_confirmed_phone : currentUser.is_confirmed_phone,
                  created_at: currentUser.created_at,
                  updated_at: currentUser.updated_at
                }))
              })

              navigation.navigate("MainProfile");
            }}
          />
        ) : ("")}


      </>
    )
  } else if (is_confirmed_email === "false") {
    return (
      <>
        <Text style={stylesConfirmEmail.emailTitle}>{currentUser.mail}</Text>
        {showInput === true ? (
          <>
            <Text style={stylesConfirmEmail.errorCode}>{showErrorCode !== "" ? showErrorCode : ""}</Text>
            <TextInputMasked
              fontSize={""}
              mask={"999-999"}
              values={valueCodeInput}
              placeholder={"Введите код.."}
              keyboardType={"numeric"}
              funcChangeText={(_, code) => {
                if (code === String(codeEmailConfirm) && code.length === 6) {
                  console.log("Code Successful!")
                  setShowErrorCode("")
                } else if (code !== String(codeEmailConfirm) && code.length === 6) {
                  console.log("Code Bad!")
                  setShowErrorCode("Код неверный.")
                }

                if (code.length < 6) {
                  setShowErrorCode("")
                }

                setValueCodeInput(code)
              }}
            />
          </>
        ) : (
          <ButtonSendCode isActive={true} funcSendCode={() => {
            setShowInput(true)
            sendConfirmCodeToMail(currentUser.id, currentUser.mail).then(r => {
              setCodeEmailConfirm(r.code);
            });
          }} />
        )}
        {Number(valueCodeInput) === codeEmailConfirm && valueCodeInput.length === 6 ? (
          <ButtonConfirm
            color={"white"}
            background={Number(valueCodeInput) === codeEmailConfirm && Number(valueCodeInput) !== 0 && codeEmailConfirm !== 0 ? "#048f9d" : "#5eb7c0"}
            size={25}
            title={"Подтвердить"}
            funcPress={async () => {
              const user = {
                id: currentUser.id,
                mail: currentUser.mail,
                is_confirmed_email: "true",
              }

              await getTokenFromAsyncStorage(setToken)

              EditUser({user, token}).then(r => {
                dispatch(setCurrentUser({
                  id: currentUser.id,
                  username: currentUser.username,
                  mail: currentUser.mail,
                  phone: currentUser.phone,
                  lastname: currentUser.lastname,
                  firstname: currentUser.firstname,
                  surname: currentUser.surname,
                  password: currentUser.password,
                  age: currentUser.age,
                  avatar: currentUser.avatar,
                  gender: currentUser.gender,
                  is_confirmed_email: r.user.is_confirmed_email,
                  is_confirmed_phone : currentUser.is_confirmed_phone,
                  created_at: currentUser.created_at,
                  updated_at: currentUser.updated_at
                }))
              })

              navigation.navigate("MainProfile");
            }}
          />
        ) : ("")}
      </>
    )
  }
}

export default function ConfirmEmail({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <View style={stylesConfirmEmail.container}>
      <GoBackNavigation navigation={navigation} title={"Вернуться"} />
      <View style={stylesConfirmEmail.containerInput}>
        <SwitchConfirmation navigation={navigation} is_confirmed_email={currentUser.is_confirmed_email} mail={currentUser.mail} />
      </View>
    </View>
  )
}

const stylesConfirmEmail = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  containerInput: {
    marginTop: 15
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorCode: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 3
  },
  emailText: {
    color: "#4a4848",
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: 14
  },
  emailTitle: {
    color: "#4a4848",
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 10
  },
  editButton: {
    color: "blue",
    fontStyle: "italic",
    fontSize: 14,
    textDecorationLine: "underline"
  },
  containerEmailText: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})