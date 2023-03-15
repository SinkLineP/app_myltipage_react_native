import HomePage from "../screens/HomeNav/Home";
import ContactsPage from "../screens/ContactsNav/Contacts.js";
import {createStackNavigator} from "@react-navigation/stack";
import ReviewDetails from "../screens/ReviewDetails/reviewDetails";
import {setOptions} from "../options/routerHeaderOptions";

const Stack = createStackNavigator();

const screenOptionStyle = {

};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={setOptions("Домашняя страница", "coral", "#fff", true)} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ContactsPage" component={ContactsPage} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };