import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {ProfileStackNavigator, MainStackNavigator, AuthorizationStackNavigator} from "./StackNavigator";
import {setOptions, drawerNavigatorOptions} from "../options/routerHeaderOptions";
import useAuth from "../hooks/useAuth";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator backBehavior="history" screenOptions={drawerNavigatorOptions(false)}>
      {useAuth() === false ? (
        <Drawer.Screen name="Authorization" component={AuthorizationStackNavigator} options={setOptions("Авторизация", "#1571b5", "#fff", true)} />
      ) : (
        <Drawer.Screen name="Profile" component={ProfileStackNavigator} options={setOptions("Профиль", "#1571b5", "#fff", true)} />
      )}
      <Drawer.Screen name="Home" component={MainStackNavigator} options={setOptions("Обзоры", "coral", "#fff", true)} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;