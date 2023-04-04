import React, {useEffect, useState} from "react";
import { prepareFonts } from "./LoadingFonts";
import { NavigationContainer } from '@react-navigation/native';
import {Provider, useDispatch} from "react-redux";
import 'react-native-gesture-handler';
import AnimatedLoading from "./src/components/AnimatedLoading/AnimatedLoading";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import store from "./src/store/index";
import {getUsers} from "./src/db/getData";
import {removeUsers, setUsers} from "./src/store/Slices/usersSlice";


export default function App () {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

function AppWrapper() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const dispatch = useDispatch();

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);
    getUsers().then(r => {
      dispatch(removeUsers())
      r.users.map(({id, username, mail, phone, lastname, firstname, surname, password, age, avatar}) => {
        dispatch(setUsers({
          id: id,
          username: username,
          mail: mail,
          phone: phone,
          lastname: lastname,
          firstname: firstname,
          surname: surname,
          password: password,
          age: age,
          avatar: avatar,
        }))
      })
    })
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
