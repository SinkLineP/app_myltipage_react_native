import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ChatStackNavigator,
  MainStackNavigator,
  MenuStackNavigator,
  ProfileStackNavigator, SearchStackNavigator
} from "./StackNavigator";
import {FontAwesome} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import {useSelector} from "react-redux";


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const isAuth = useSelector(state => state.users.isAuth);

  const userIsAuthed = (responseAuthorized, responseUnauthorized) => {
    return isAuth === true ? responseAuthorized : responseUnauthorized;
  }

  return (
    <Tab.Navigator screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        const icon = {
          name: "",
          typeOutput: "",
          size: 0
        }

        if (route.name === 'HomeTab') {
          icon.name = focused ? 'home' : 'home';
          icon.typeOutput = "FontAwesome";
          icon.size = 25
        } else if (route.name === 'ProfileTab') {
          icon.name = focused ? userIsAuthed("user-circle-o", "ios-enter-outline") : userIsAuthed("user-circle-o", "ios-enter-outline");
          icon.typeOutput = userIsAuthed("FontAwesome", "IonIcons");
          icon.size = userIsAuthed(24, 27)
        } else if (route.name === 'MenuTab') {
          icon.name = focused ? 'ios-menu' : 'ios-menu';
          icon.typeOutput = "IonIcons";
          icon.size = 27
        } else if (route.name === 'SearchTab') {
          icon.name = focused ? 'search-outline' : 'search-outline';
          icon.typeOutput = "IonIcons";
          icon.size = 27
        } else if (route.name === 'ChatTab') {
          icon.name = focused ? 'md-chatbox-ellipses-outline' : 'md-chatbox-ellipses-outline';
          icon.typeOutput = "IonIcons";
          icon.size = 27
        }

        if (icon.typeOutput === "FontAwesome") {
          return <FontAwesome name={icon.name} size={icon.size} color={color} />;
        } else if (icon.typeOutput === "IonIcons") {
          return <Ionicons name={icon.name} size={icon.size} color={color} />;
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 60,
        paddingBottom: 10,
        paddingTop: 10
      }
    })}>
      <Tab.Screen options={{title: "Главная"}} name="HomeTab" component={MainStackNavigator} />
      <Tab.Screen options={{title: "Поиск"}} name="SearchTab" component={SearchStackNavigator} />
      <Tab.Screen options={{title: userIsAuthed("Профиль", "Войти")}} name="ProfileTab" component={ProfileStackNavigator} />
      <Tab.Screen options={{title: "Чаты"}} name="ChatTab" component={ChatStackNavigator} />
      <Tab.Screen options={{title: "Меню"}} name="MenuTab" component={MenuStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;