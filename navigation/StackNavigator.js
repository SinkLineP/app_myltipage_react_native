import Home from "../screens/HomeNav/Home";
import About from "../screens/AboutNav/About";
import Contacts from "../screens/ContactsNav/Contacts.js";
import {createStackNavigator} from "@react-navigation/stack";
import ReviewDetails from "../screens/ReviewDetails/reviewDetails";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };