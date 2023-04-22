import {errorsMessages} from "../navigation/screens/Authorization/Schematics/Schematics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserIsAuthed} from "../db/getData";

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