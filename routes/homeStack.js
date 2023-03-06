import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails"


// Создаем экраны для перехода
const screens = {
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  }
}

// Создаем переходы
const HomeStack = createStackNavigator(screens);

// Добавляем в контейнер приложения
export default createAppContainer(HomeStack);