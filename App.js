import React, {useEffect, useState} from "react";
import 'react-native-gesture-handler';
import { prepareFonts } from "./LoadingFonts";
import AnimatedLoading from "./src/components/AnimatedLoading/AnimatedLoading";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import {ImageBackground} from "react-native";
import {createStore} from "redux";
import {Provider} from "react-redux";
import getData from "./src/db/getData";


const initialState = {
  counter: 0
}
const reducer = (state=initialState) => {
  return state
}
const store = createStore(reducer);
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);
    getData()
  }, []);


  // если шрифты загружены отобразить страницу
  if (fontsLoaded) {


    return (
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
