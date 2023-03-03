import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const getFonts = () => Font.loadAsync({
  "shell-sans-light": require("./assets/fonts/ShantellSans-Light.ttf"),
  "shell-sans-bold": require("./assets/fonts/ShantellSans-Bold.ttf"),
  "shell-sans-boldItalic": require("./assets/fonts/ShantellSans-BoldItalic.ttf"),
  "shell-sans-lightItalic": require("./assets/fonts/ShantellSans-LightItalic.ttf"),
})

export const prepareFonts = async (setFonts) => {
  try {
    await getFonts();
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (e) {
    console.warn("Error: " + e);
  } finally {
    setFonts(true);
  }
}

