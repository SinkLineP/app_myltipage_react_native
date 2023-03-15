import Home from "../screens/HomeNav/Home";
import About from "../screens/AboutNav/About";
import Contacts from "../screens/ContactsNav/Contacts.js";
import {createStackNavigator} from "@react-navigation/stack";
import ReviewDetails from "../screens/ReviewDetails/reviewDetails";
import Header from "../shared/header";
import {setOptions} from "../options/routerHeaderOptions";

const Stack = createStackNavigator();

const screenOptionStyle = {

};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={setOptions("Домашняя страница", "coral", "#fff", true)} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contacts" component={Contacts} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };