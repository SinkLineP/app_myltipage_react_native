import React, {useEffect, useState} from "react";
import { prepareFonts } from "./LoadingFonts";
import { NavigationContainer } from '@react-navigation/native';
import {Provider, useDispatch} from "react-redux";
import 'react-native-gesture-handler';
import AnimatedLoading from "./src/components/AnimatedLoading/AnimatedLoading";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import store from "./src/store/index";
import {AutoLogin} from "./src/db/getData";
import {setCurrentUser, switchAuth} from "./src/store/Slices/usersSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App () {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

function AppWrapper() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

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
            created_at: data.user.created_at,
            updated_at: data.user.updated_at
          }))
          dispatch(switchAuth())
        })
      }
    }
    fetchData().then(r => r)
  }, []);



  // если шрифты загружены отобразить страницу
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
