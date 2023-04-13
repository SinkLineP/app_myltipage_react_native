import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  MenuStackNavigator,
  ProfileStackNavigator
} from "./StackNavigator";
import {FontAwesome} from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import {useSelector} from "react-redux";


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const isAuth = useSelector(state => state.users.isAuth);

  const userIsAuthed = (responseAuthorized, responseUnauthorized) => {
    console.log(isAuth);
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
          icon.size = 23
        }  else if (route.name === 'MenuTab') {
          icon.name = focused ? 'ios-menu' : 'ios-menu';
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
      <Tab.Screen options={{title: userIsAuthed("Профиль", "Авторизироваться")}} name="ProfileTab" component={ProfileStackNavigator} />
      <Tab.Screen options={{title: "Меню"}} name="MenuTab" component={MenuStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;