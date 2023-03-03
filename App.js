import React, {useCallback, useEffect, useState} from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from "expo-splash-screen";
import {View} from "react-native";

const getFonts = () => Font.loadAsync({
  "shell-sans-light": require("./assets/fonts/ShantellSans-Light.ttf"),
  "shell-sans-lightItalic": require("./assets/fonts/ShantellSans-LightItalic.ttf"),
})

SplashScreen.preventAutoHideAsync().then(r => r);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => { //асинхронная функция загрузки шрифтов
    async function prepare() {
      try {
        await getFonts;
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn("Error: " + e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare().then(r => r);
  }, []);

  const onLayoutRootView = useCallback(async () => { // отображение загрузчика экрана
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (fontsLoaded) { // если шрифты загружены отобразить страницу
    return (
      <View onLayout={onLayoutRootView}>
        <Home />
        <StatusBar style="auto" />
      </View>
    )
  } else { //если не загружены шрифты не отображать
    return null;
  }
}
