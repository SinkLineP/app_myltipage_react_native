import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {ContactStackNavigator, MainStackNavigator} from "./StackNavigator";
import {setOptions, drawerNavigatorOptions} from "../options/routerHeaderOptions";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator backBehavior="history" screenOptions={drawerNavigatorOptions(false)}>
      <Drawer.Screen name="Home" component={MainStackNavigator} options={setOptions("Обзоры", "coral", "#fff", true)} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;