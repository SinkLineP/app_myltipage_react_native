import {errorsMessages} from "../navigation/screens/Authorization/Schematics/Schematics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {checkCreatedUserWithPhone, UserIsAuthed, VerifyUserPhone} from "../db/getData";

export const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateUsernameFromEmail = (email) => {
  const minNumber = 1000;
  const maxNumber = 9999;
  const emailTitle = email.split("@")[0];
  const randNumber = rand(minNumber, maxNumber);

  return `${emailTitle}-${randNumber}`;
}

export const generateUsername = () => {
  const minNumber = 1000;
  const maxNumber = 9999;
  const randNumber = rand(minNumber, maxNumber);

  return `Username-${randNumber}`;
}

export const returnMinutesFromNumber = (number) => {
  return number * 60;
}

export const customValidate = (value, minLength, maxLength) => {
  if (value.length < minLength && value.length !== 0) {
    return errorsMessages.shortText;
  } else if (value.length > maxLength) {
    return errorsMessages.longText;
  }
}

export const hourToMilliseconds = (hrs,min,sec) => {
  return (hrs*60*60+min*60+sec)*1000;
}

export const handleAuthClick = async () => {
  try {
    const token = await AsyncStorage.getItem("token")
    if(token !== null) {
      UserIsAuthed(token).then(r => r)
    }
  } catch(e) {
    console.log(e)
  }
}

export const getTokenFromAsyncStorage = async (setToken) => {
  try {
    const tokenStorage = await AsyncStorage.getItem("token");
    if (tokenStorage !== null) {
      setToken(tokenStorage)
    }
  } catch (e) {
    console.log(e)
  }
}

export const funcCheckCreatedUser = (phone, setCreatedUser, setShowInputSMSCode, setNoCorrectSMS, setValuesPhone, setShowError) => {
  if (phone.length === 11) {
    checkCreatedUserWithPhone(phone).then(r => {
      if (r.checkUser === 200) {
        setCreatedUser("created")
        setShowError("Данный номер телефона занят")
      } else if (r.checkUser === 100) {
        setCreatedUser("uncreated")
        setShowError("")
      }
    })
  }

  if (phone.length < 11) {
    setShowInputSMSCode(false);
    setNoCorrectSMS("");
  }

  setValuesPhone(phone)
}

export const funcCheckValidSMSCode = (sms_code, submittedSMSCode, setNoCorrectSMS, setValuesSMSCode) => {
  if (Number(sms_code) !== submittedSMSCode && sms_code.length === 6) {
    setNoCorrectSMS("Код не верный");
  } else {
    setNoCorrectSMS("");
  }

  setValuesSMSCode(sms_code);
}

export const funcSendCode = (dispatch, valuesPhone, setSubmittedCode, setShowInputSMSCode) => {
  console.log("sms clicked!")
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
}


export const validationEmail = (val) => {
  return val.includes("@") && val.includes(".com") || val.includes(".ru") || val.includes(".ua") || val.includes(".net");
}