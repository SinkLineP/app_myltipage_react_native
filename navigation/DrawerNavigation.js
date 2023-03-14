import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {ContactStackNavigator, MainStackNavigator} from "./StackNavigator";
import {setOptions} from "../options/routerHeaderOptions";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} options={setOptions("Домашняя страница", "coral", "#fff", false)} />
      <Drawer.Screen name="Contacts" component={ContactStackNavigator} options={setOptions("Контакты", "#2c3a53", "#fff", false)} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;