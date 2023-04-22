import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import GoBackNavigation from "../../../Authorization/components/GoBackNavigation/GoBackNavigation";
import {
  checkCreatedUserWithPhone, EditUser,
  VerifyUserPhone
} from "../../../../../db/getData";
import TextInputMasked from "../../../Authorization/components/TextInputMasked/TextInputMasked";
import ButtonSendCode from "../../../Authorization/components/ButtonSendCode/ButtonSendCode";
import ButtonConfirm from "../../../../../components/Profile/Buttons/ButtonConfirm";
import {
  getTokenFromAsyncStorage,
  rand
} from "../../../../../Variables/functions";
import {setCurrentUser} from "../../../../../store/Slices/usersSlice";
import {CardMessageWarning} from "../components/CardMessageWarning";


const ConfirmComponent = ({phone, is_confirmed_phone, navigation}) => {
  const currentUser = useSelector(state => state.users.currentUser);
  const [isFoundUser, setIsFoundUser] = useState(false);
  const [valueCodeInput, setValueCodeInput] = useState("");
  const [showError, setShowError] = useState("");
  const [codePhoneConfirm, setCodePhoneConfirm] = useState(0);
  const [showErrorCode, setShowErrorCode] = useState("");
  const [showPhoneHowText, setShowPhoneHowText] = useState("");
  const [token, setToken] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [valuesPhone, setValuesPhone] = useState("");
  const dispatch = useDispatch();


  if (phone === "" && is_confirmed_phone === "false") {
    return (
      <>
        {showError !== "" && valuesPhone.length === 11  ? (<Text style={stylesConfirmPhone.error}>{showError}</Text>) : (<Text style={stylesConfirmPhone.error}></Text>)}
        {showPhoneHowText === "" ? (
          <TextInputMasked
            fontSize={""}
            mask={"+7 (999) 999 99 99"}
            values={valuesPhone}
            placeholder={"+7 (___) ___ __ __"}
            keyboardType={"numeric"}
            funcChangeText={(_, phone) => {
              if (phone.length === 11) {
                checkCreatedUserWithPhone(phone).then(r => {
                  if (r.checkUser === 200) {
                    console.log("Этот номер телефона занят.");
                    setIsFoundUser(false);
                  } else if (r.checkUser === 100) {
                    console.log("Этот номер телефона свободен.");
                    setIsFoundUser(true);
                  }
                })
              } else {
                setShowError("");
                setShowInput(false);
                setIsFoundUser(false);
              }

              setValuesPhone(phone)
            }}
          />
        ) : (
          <View style={stylesConfirmPhone.containerEmailText}>
            <Text style={stylesConfirmPhone.emailText}>{showPhoneHowText !== "" ? showPhoneHowText : ""}</Text>
            <Text style={stylesConfirmPhone.editButton} onPress={() => {
              setShowInput(false)
              setShowPhoneHowText("")
              setValueCodeInput("")
              setValuesPhone("")
            }}>изменить...</Text>
          </View>
        )}

        {showInput === true ? (
          <>
            <Text style={stylesConfirmPhone.errorCode}>{showErrorCode !== "" ? showErrorCode : ""}</Text>
            <TextInputMasked
              fontSize={""}
              mask={"999-999"}
              values={valueCodeInput}
              placeholder={"Введите код.."}
              keyboardType={"numeric"}
              funcChangeText={(_, sms_code) => {
                if (sms_code === String(codePhoneConfirm) && sms_code.length === 6) {
                  console.log("Code Successful!")
                  setShowErrorCode("")
                } else if (sms_code !== String(codePhoneConfirm) && sms_code.length === 6) {
                  console.log("Code Bad!")
                  setShowErrorCode("Код неверный.")
                }

                if (sms_code.length < 6) {
                  setShowErrorCode("")
                }

                setValueCodeInput(sms_code);
              }}
            />
          </>
        ) : (
          <ButtonSendCode isActive={isFoundUser !== false} funcSendCode={() => {
            if (isFoundUser !== false) {
              setShowInput(true)
              const smsCode = rand(100000, 999999);

              VerifyUserPhone(valuesPhone, smsCode).then(r => {
                if (r.sms[valuesPhone].status === "OK") {
                  setCodePhoneConfirm(smsCode);
                  setShowPhoneHowText(valuesPhone);
                  console.log(r);
                } else {
                  console.log("BAD")
                }
              });
            }
          }} />
        )}

        {Number(valueCodeInput) === codePhoneConfirm && valueCodeInput.length === 6 ? (
          <ButtonConfirm
            color={"white"}
            background={Number(valueCodeInput) === codePhoneConfirm && Number(valueCodeInput) !== 0 && codePhoneConfirm !== 0 ? "#048f9d" : "#5eb7c0"}
            size={25}
            title={"Подтвердить"}
            funcPress={async () => {
              console.log("clicked submit sms code!")
              const user = {
                id: currentUser.id,
                phone: valuesPhone,
                is_confirmed_phone: "true",
              }

              await getTokenFromAsyncStorage(setToken)

              EditUser({user, token}).then(r => {
                dispatch(setCurrentUser({
                  id: currentUser.id,
                  username: currentUser.username,
                  mail: currentUser.mail,
                  phone: r.user.phone,
                  lastname: currentUser.lastname,
                  firstname: currentUser.firstname,
                  surname: currentUser.surname,
                  password: currentUser.password,
                  age: currentUser.age,
                  avatar: currentUser.avatar,
                  gender: currentUser.gender,
                  is_confirmed_email: currentUser.is_confirmed_email,
                  is_confirmed_phone : r.user.is_confirmed_phone,
                  is_default_password: currentUser.is_default_password,
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

export default function ConfirmPhone({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <CardMessageWarning navigation={navigation}>
        <ConfirmComponent navigation={navigation} is_confirmed_phone={currentUser.is_confirmed_phone} phone={currentUser.phone} />
    </CardMessageWarning>
  )
}

const stylesConfirmPhone = StyleSheet.create({
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