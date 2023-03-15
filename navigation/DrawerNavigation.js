import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {ContactStackNavigator, MainStackNavigator} from "./StackNavigator";
import {setOptions, drawerNavigatorOptions} from "../options/routerHeaderOptions";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator backBehavior="history" screenOptions={drawerNavigatorOptions(false)}>
      <Drawer.Screen name="Home" component={MainStackNavigator} options={setOptions("Домашняя страница", "coral", "#fff", true)} />
      <Drawer.Screen name="Contacts" component={ContactStackNavigator} options={setOptions("Контакты", "#2c3a53", "#fff", true)} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;