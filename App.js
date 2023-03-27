import React, {useEffect, useState} from "react";
import { prepareFonts } from "./LoadingFonts";
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux";
import 'react-native-gesture-handler';
import AnimatedLoading from "./src/components/AnimatedLoading/AnimatedLoading";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import store from "./src/store/index";


export default function App () {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

function AppWrapper() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
