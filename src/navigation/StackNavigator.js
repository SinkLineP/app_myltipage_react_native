import ContactsPage from "./screens/ContactsNav/Contacts.js";
import {createStackNavigator} from "@react-navigation/stack";
import ReviewDetails from "./screens/ReviewDetails/reviewDetails";
import {setOptions} from "../options/routerHeaderOptions";
// import MoveReviews from "./screens/Reviews/Move/MoveReviews";
// import CartoonReviews from "./screens/Reviews/Cartoon/CartoonReviews";
// import SerialsReviews from "./screens/Reviews/Serials/SerialsReviews";
// import AnimeReviews from "./screens/Reviews/Anime/AnimeReviews";
import MainReviews from "./screens/Reviews/MainReviews/MainReviews";
import AnimeReviews from "./screens/Reviews/Categories/Anime/AnimeReviews";
import MoveReviews from "./screens/Reviews/Categories/Move/MoveReviews";
import CartoonReviews from "./screens/Reviews/Categories/Cartoon/CartoonReviews";
import SerialsReviews from "./screens/Reviews/Categories/Serials/SerialsReviews";

const Stack = createStackNavigator();

const screenOptionStyle = {

};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainReviews" component={MainReviews} options={setOptions("Категории", "coral", "#fff", false)} />
      <Stack.Screen name="Move" component={MoveReviews} options={setOptions("Фильмы", "#9e3e1b", "#fff", false)} />
      <Stack.Screen name="Cartoon" component={CartoonReviews} options={setOptions("Мультфильмы", "#922525", "#fff", false)} />
      <Stack.Screen name="Serials" component={SerialsReviews} options={setOptions("Сериалы", "#a58716", "#fff", false)} />
      <Stack.Screen name="Anime" component={AnimeReviews} options={setOptions("Аниме", "#a84d90", "#fff", false)} />
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