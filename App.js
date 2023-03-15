import React, {useEffect, useState} from "react";
import 'react-native-gesture-handler';
import { prepareFonts } from "./LoadingFonts";
import AnimatedLoading from "./components/AnimatedLoading/AnimatedLoading";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigation";
import {ImageBackground} from "react-native";


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);
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
