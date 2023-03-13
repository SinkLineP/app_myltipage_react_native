import React, {useEffect, useState} from "react";
import 'react-native-gesture-handler';
import Home from "./screens/home";
import { prepareFonts } from "./LoadingFonts";
import AnimatedLoading from "./components/AnimatedLoading/AnimatedLoading";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from "./screens/reviewDetails";
import About from "./screens/about";
import {setOptions} from "./options/routerHeaderOptions";
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import Settings from "./screens/settings";


const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);
  }, []);


  // если шрифты загружены отобразить страницу
  if (fontsLoaded) {
    return (
      <>
        {/*<NavigationContainer>*/}
        {/*  <Drawer.Navigator>*/}
        {/*    <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Домашняя страница' }} />*/}
        {/*    <Drawer.Screen name="About" component={About} options={{ drawerLabel: 'О нас' }}/>*/}
        {/*    <Drawer.Screen name="Settings" component={Settings} options={{ drawerLabel: 'Настройки приложения' }}/>*/}
        {/*  </Drawer.Navigator>*/}
        {/*</NavigationContainer>*/}
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={Home} options={setOptions("Домашняя страница", "coral", "#fff", false)} />
            <AppStack.Screen name="ReviewDetails" component={ReviewDetails} options={setOptions("Обзор", "#4a4848", "#fff", true)} />
            <AppStack.Screen name="About" component={About} options={setOptions("О нас", "#ggg", "#c74242", false)} />
          </AppStack.Navigator>
        </NavigationContainer>
      </>
    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
