import React, {useEffect, useState} from "react";
import Home from "./screens/home";
import { prepareFonts } from "./LoadingFonts";
import AnimatedLoading from "./components/AnimatedLoading/AnimatedLoading";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from "./screens/reviewDetails";


const AppStack = createNativeStackNavigator();
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
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="ReviewDetails" component={ReviewDetails} />
        </AppStack.Navigator>
      </NavigationContainer>
    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
