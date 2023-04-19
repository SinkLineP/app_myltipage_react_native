import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {setLimitSendSMS} from "../../../../../store/Slices/usersSlice";
import {TIME_TO_DELETE_THE_SMS} from "../../../../../Variables/ServerConfig";
import {rand, stopInterval} from "../../../../../Variables/functions";
import {VerifyUserPhone} from "../../../../../db/getData";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import isEqual from "isequal.es/index";


const sendCode = ({setError, valuesPhone, limitSendSMS, setStatusCode, setSubmittedCode, setShowTimer, interval, timeout, dispatch, currentUser}) => {
  // if (valuesPhone.length === 11) {
  //   dispatch(setLimitSendSMS(limitSendSMS - 1))
  //   let time = TIME_TO_DELETE_THE_SMS;
  //   const smsCode = rand(100000, 999999);
  //
  //   VerifyUserPhone(valuesPhone, smsCode).then(r => {
  //     if (r.sms[valuesPhone].status === "OK") {
  //       setStatusCode("OK");
  //       setSubmittedCode(smsCode);
  //
  //       // запускаем таймер
  //       interval = setInterval(() => {
  //         const minutes = Math.floor(time / 60);
  //         let seconds = time % 60;
  //         seconds = seconds < 10 ? "0" + seconds: seconds;
  //         setShowTimer(`${minutes}:${seconds}`);
  //         time--;
  //       }, 1000);
  //
  //       console.log(r);
  //
  //       // очистка таймера
  //       timeout = setTimeout(() => {
  //         stopInterval(interval);
  //         setShowTimer("Отправить код")
  //       }, TIME_TO_DELETE_THE_SMS * 1000 + 1000)
  //     } else {
  //       setStatusCode("BAD");
  //
  //       if (r.sms[valuesPhone].status_code === 202) {
  //         setError("Неправильно указан номер телефона")
  //       }
  //
  //       setTimeout(() => setError(""), 3000)
  //     }
  //   });
  // }
  if (valuesPhone.length === 11) {

  }
}

export default function ButtonSubmitSMSCode({setError, valuesPhone, limitSendSMS, setStatusCode, setSubmittedCode, setShowTimer, interval, timeout, showTimer}) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <TouchableHighlight style={stylesButtonSubmitSMSCode.buttonSendSMSCode} underlayColor='transparent'>
      {limitSendSMS !== 0 ? (
        <View>
          {/*<Text style={stylesButtonSubmitSMSCode.titleSendSMSCode} onPress={() => sendCode({dispatch, setError, valuesPhone, limitSendSMS, setStatusCode, setSubmittedCode, setShowTimer, interval, timeout, currentUser})}>{showTimer}</Text>*/}
        </View>
      ) : (
        <Text style={stylesButtonSubmitSMSCode.titleSendSMSCode}>Недоступно</Text>
      )}
    </TouchableHighlight>
  )
}

const stylesButtonSubmitSMSCode = StyleSheet.create({
  titleSendSMSCode: {
    color: "#048f9d"
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
})