import React, {useCallback, useEffect, useState} from "react";
import Home from "./screens/home";
import { StatusBar } from 'expo-status-bar';
import {Text, View} from "react-native";
import { prepareFonts } from "./LoadingFonts";
import AnimatedLoading from "./components/AnimatedLoading/AnimatedLoading";


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);
  }, []);

  // если шрифты загружены отобразить страницу
  if (fontsLoaded) {
    return (
      <View>
        <Home />
        <StatusBar style="auto" />
      </View>

    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
