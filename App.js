import React, {useEffect, useState} from "react";
import { prepareFonts } from "./LoadingFonts";
import { NavigationContainer } from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from "react-redux";
import 'react-native-gesture-handler';
import AnimatedLoading from "./src/components/AnimatedLoading/AnimatedLoading";
import store from "./src/store/index";
import {AutoLogin} from "./src/db/getData";
import {setCurrentUser, setLimitMessage, setLimitSendSMS, switchAuth} from "./src/store/Slices/usersSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StatusBar} from "expo-status-bar";
import TabNavigator from "./src/navigation/TabNavigator";
import {hourToMilliseconds} from "./src/Variables/functions";
import {CLEAR_LIMIT_MESSAGE, LIMIT_SMS} from "./src/Variables/ServerConfig";


export default function App () {


  return (
    <Provider store={store}>
      <AppWrapper />
      <StatusBar style={"auto"} />
    </Provider>
  )
}

function AppWrapper() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const limitSendSMS = useSelector(state => state.users.limitSendSMS);

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);

    async function fetchData() {
      try {
        const tokenStorage = await AsyncStorage.getItem("token");
        if (tokenStorage !== null) {
          setToken(tokenStorage)
        }
      } catch (e) {
        console.log(e)
      }

      if (token) {
        AutoLogin(token).then((data) => {
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
          dispatch(switchAuth())
        })
      }
    }

    fetchData().then(r => r)
  }, []);

  useEffect(() => {
    if (limitSendSMS === 0) {
      dispatch(setLimitMessage("Лимит исчерпан вернитесть через 3 часа"));

      setTimeout(() => {
        dispatch(setLimitMessage(CLEAR_LIMIT_MESSAGE));
        dispatch(setLimitSendSMS(LIMIT_SMS));
        console.log("limit cleared!");
      }, hourToMilliseconds(3, 0, 0));
    } else {
      dispatch(setLimitMessage(""));
    }
  })

  // если шрифты загружены отобразить страницу
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
