import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import GoBackNavigation from "../../../Authorization/components/GoBackNavigation/GoBackNavigation";
import ButtonSendCode from "../../../Authorization/components/ButtonSendCode/ButtonSendCode";
import {useSelector} from "react-redux";
import CustomTextInput from "../../../Authorization/components/CustomTextInput/CustomTextInput";
import {checkUsedEmail, sendConfirmCodeToMail} from "../../../../../db/getData";


const funcSendCode = (id, mail) => {

}

const SwitchConfirmation = ({mail, is_confirmed_email, setValueCode, valueCode}) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const [showInput, setShowInput] = useState(false);
  const [isFoundUser, setIsFoundUser] = useState(false);
  const [valueEmail, setValueEmail] = useState("");
  const [showError, setShowError] = useState("");

  if (mail === "" && is_confirmed_email === "false") {
    return (
      <>
        {showError !== "" ? (<Text style={stylesConfirmEmail.error}>{showError}</Text>) : ("")}
        <CustomTextInput onChangeText={(val) => {
          if (val.includes("@") && val.includes(".com") || val.includes(".ru") || val.includes(".ua") || val.includes(".net")) {
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
        {showInput === true ? (
          <CustomTextInput onChangeText={(val) => setValueCode(val)} placeholder={"Введите код..."} value={valueCode} />
        ) : (
          <ButtonSendCode isActive={isFoundUser !== false} funcSendCode={() => {
            if (isFoundUser !== false) {
              setShowInput(true)
              sendConfirmCodeToMail(currentUser.id, valueEmail).then(r => console.log(r));
            }
          }} />
        )}
      </>
    )
  } else if (is_confirmed_email === "false") {
    return (
      <>
        {showInput === true ? (
          <CustomTextInput onChangeText={(val) => setValueCode(val)} placeholder={"Введите код..."} value={valueCode} />
        ) : (
          <ButtonSendCode funcSendCode={() => {
            setShowInput(true)
            funcSendCode(mail)
          }} />
        )}
      </>
    )
  }
}

export default function ConfirmEmail({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);
  const [emailValue, setEmailValue] = useState("");

  return (
    <View style={stylesConfirmEmail.container}>
      <GoBackNavigation navigation={navigation} title={"Вернуться"} />
      <View style={stylesConfirmEmail.containerInput}>
        <SwitchConfirmation is_confirmed_email={currentUser.is_confirmed_email} mail={currentUser.mail} value={emailValue} setValue={setEmailValue} />
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
})