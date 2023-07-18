import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {CardMessageWarning} from "../components/CardMessageWarning";
import CustomTextInput from "../../../Authorization/components/CustomTextInput/CustomTextInput";
import {useDispatch, useSelector} from "react-redux";
import {getTokenFromAsyncStorage, rand} from "../../../../../Variables/functions";
import {EditUser, sendConfirmCodeToMail, VerifyUserPhone} from "../../../../../db/getData";
import TextInputMasked from "../../../Authorization/components/TextInputMasked/TextInputMasked";
import ButtonConfirm from "../../../../../components/Profile/Buttons/ButtonConfirm";
import {setCurrentUser} from "../../../../../store/Slices/usersSlice";


const ShowSMSInput = ({setSMSCodeValue, smsCodeValue, showErrorCode, smsCode, setShowErrorCode}) => {
  return (
    <>
      <Text style={stylesChangePassword.errorCode}>{showErrorCode}</Text>
      <TextInputMasked
        mask={"999-999"}
        placeholder={"Введите код из SMS.."}
        keyboardType={"numeric"}
        funcChangeText={(_, sms_code) => {
          if (sms_code === String(smsCode) && sms_code.length === 6) {
            setShowErrorCode("");
          } else {
            setShowErrorCode("Код не верный.");
          }

          if (sms_code.length < 6) {
            setShowErrorCode("");
          }

          setSMSCodeValue(sms_code);
        }}
        fontSize={""}
        values={smsCodeValue}
      />
    </>
  )
}

const ShowMailInput = ({setMailCodeValue, mailCodeValue, showErrorCode, mailCode, setShowErrorCode}) => {
  return (
    <>
      <Text style={stylesChangePassword.errorCode}>{showErrorCode}</Text>
      <TextInputMasked
        mask={"999-999"}
        placeholder={"Введите код из почты.."}
        keyboardType={"numeric"}
        funcChangeText={(_, mail_code) => {
          if (mail_code === String(mailCode) && mail_code.length === 6) {
            setShowErrorCode("");
          } else {
            setShowErrorCode("Код не верный.");
          }

          if (mail_code.length < 6) {
            setShowErrorCode("");
          }

          setMailCodeValue(mail_code);
        }}
        fontSize={""}
        values={mailCodeValue}
      />
    </>
  )
}

export default function ChangePassword({navigation}) {
  const {id, mail, is_confirmed_phone, is_confirmed_email, phone, username, lastname, surname, firstname, age, gender, is_default_password, avatar, updated_at, created_at} = useSelector(state => state.users.currentUser);
  const [newPassword, setNewPassword] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [smsCode, setSMSCode] = useState("");
  const [mailCode, setMailCode] = useState("");
  const [smsCodeValue, setSMSCodeValue] = useState("");
  const [mailCodeValue, setMailCodeValue] = useState("");
  const [typeButtonSend, setTypeButtonSend] = useState("");
  const [showErrorCode, setShowErrorCode] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();


  const sendSMSCode = (phone) => {
    const smsCode = rand(100000, 999999);

    VerifyUserPhone(phone, smsCode).then(r => {
      if (r.sms[phone].status === "OK") {
        setTypeButtonSend("sms");
        setSMSCode(smsCode);
        console.log(r);
      }
    });
  }

  const sendMailCode = () => {
    sendConfirmCodeToMail(id, mail).then(r => {
      setTypeButtonSend("mail");
      setMailCode(r.code);
    });
  }

  const savePassword = async () => {
    const user = {
      id: id,
      password: newPassword,
      is_default_password: "false",
    }

    await getTokenFromAsyncStorage(setToken)

    EditUser({user, token}).then(r => {
      dispatch(setCurrentUser({
        id: id,
        username: username,
        mail: mail,
        phone: phone,
        lastname: lastname,
        firstname: firstname,
        surname: surname,
        password: r.user.password,
        age: age,
        avatar: avatar,
        gender: gender,
        is_confirmed_email: is_confirmed_email,
        is_confirmed_phone : is_confirmed_phone,
        is_default_password: r.user.is_default_password,
        created_at: created_at,
        updated_at: updated_at
      }))
    })

    navigation.navigate("MainProfile");
  }

  return (
    <CardMessageWarning navigation={navigation}>
      {is_confirmed_phone === "true" || is_confirmed_email === "true" || is_confirmed_phone === "true" && is_confirmed_email === "true" ? (
        <CustomTextInput
          onChangeText={(password) => {
            if (password.length >= 6) {
              console.log(password);
              setNewPassword(password);
            }

            setValuePassword(password)
          }}
          value={valuePassword}
          placeholder={"Введите новый пароль.."}
          isCenter={false}
        />
      ) : (
        <Text style={stylesChangePassword.error}>Вы не можете изменить пароль!{'\n'}У вас не подтверждена почта и телефон.</Text>
      )}



      {newPassword !== "" ? (<View style={stylesChangePassword.containerCardsSend}>
        {is_confirmed_phone === "true" ? (
          <>
            <View style={stylesChangePassword.cardSendCode}>
              <TouchableWithoutFeedback onPress={() => sendSMSCode(phone)}>
                <View>
                  <Image resizeMode={"contain"} style={stylesChangePassword.cardIcon} source={require("../Images/smartphone-icon.png")} />
                  <Text style={stylesChangePassword.cardText}>Отправить SMS{'\n'} на телефон</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </>
        ) : ("")}
        {is_confirmed_email === "true" ? (
          <>
            <View style={stylesChangePassword.cardSendCode}>
              <TouchableWithoutFeedback onPress={() => sendMailCode()}>
                <View>
                  <Image resizeMode={"contain"} style={stylesChangePassword.cardIcon} source={require("../Images/mail-icon.png")} />
                  <Text style={stylesChangePassword.cardText}>Отправить код{'\n'} на почту</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </>
        ) : ("")}
      </View>) : ("")}

      {typeButtonSend === "sms" ? (
        <ShowSMSInput
          smsCode={smsCode}
          showErrorCode={showErrorCode}
          setSMSCodeValue={setSMSCodeValue}
          smsCodeValue={smsCodeValue}
          setShowErrorCode={setShowErrorCode}
        />) : ("")}

      {typeButtonSend === "mail" ? (
        <ShowMailInput
          mailCode={mailCode}
          showErrorCode={showErrorCode}
          setMailCodeValue={setMailCodeValue}
          mailCodeValue={mailCodeValue}
          setShowErrorCode={setShowErrorCode}
        />) : ("")}

      {typeButtonSend === "sms" && smsCodeValue === String(smsCode) ? (<ButtonConfirm
        color={"white"}
        background={smsCodeValue === String(smsCode) ? "#048f9d" : "#5eb7c0"}
        size={25}
        title={"Сохранить"}
        funcPress={smsCodeValue === String(smsCode) ? savePassword : () => {console.log("ok sms")}}
      />) : ("")}

      {typeButtonSend === "mail" && mailCodeValue === String(mailCode) ? (<ButtonConfirm
        color={"white"}
        background={mailCodeValue === String(mailCode) ? "#048f9d" : "#5eb7c0"}
        size={25}
        title={"Сохранить"}
        funcPress={mailCodeValue === String(mailCode) ? savePassword : () => {console.log("ok mail")}}
      />) : ("")}

    </CardMessageWarning>
  )
}


const stylesChangePassword = StyleSheet.create({
  cardSendCode: {
    width: "auto",
    height: 100,
    backgroundColor: "#048f9d",
    padding: 4,
    borderRadius: 10
  },
  containerCardsSend: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 5
  },
  cardText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  cardIcon: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
  },
  errorCode: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 3
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
})