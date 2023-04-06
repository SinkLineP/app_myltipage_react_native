import ContactsPage from "./screens/ContactsNav/Contacts.js";
import {createStackNavigator} from "@react-navigation/stack";
import ReviewDetails from "./screens/ReviewDetails/reviewDetails";
import {setOptions} from "../options/routerHeaderOptions";
import MainReviews from "./screens/Reviews/MainReviews/MainReviews";
import AnimeReviews from "./screens/Reviews/Categories/Anime/AnimeReviews";
import MoveReviews from "./screens/Reviews/Categories/Move/MoveReviews";
import CartoonReviews from "./screens/Reviews/Categories/Cartoon/CartoonReviews";
import SerialsReviews from "./screens/Reviews/Categories/Serials/SerialsReviews";
import CartoonSerials from "./screens/Reviews/Categories/CartoonSerials/CartoonSerials";
import MainProfile from "./screens/Profile/MainProfile/MainProfile";
import Authorization from "./screens/Authorization/Authorization";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainReviews" component={MainReviews} options={setOptions("Категории", "coral", "#fff", false)} />
      <Stack.Screen name="Move" component={MoveReviews} options={setOptions("Фильмы", "#9e3e1b", "#fff", false)} />
      <Stack.Screen name="Cartoon" component={CartoonReviews} options={setOptions("Мультфильмы", "#1e9dff", "#fff", false)} />
      <Stack.Screen name="Serials" component={SerialsReviews} options={setOptions("Сериалы", "#fec260", "#fff", false)} />
      <Stack.Screen name="Anime" component={AnimeReviews} options={setOptions("Аниме", "#ff34c7", "#fff", false)} />
      <Stack.Screen name="CartoonSerials" component={CartoonSerials} options={setOptions("Мульт Сериалы", "#1588e2", "#fff", false)} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainProfile" component={MainProfile} options={setOptions("Мой профиль", "coral", "#fff", false)} />
    </Stack.Navigator>
  )
}

const EnglishLearning = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen name="thousandWords" component={thousandWords} options={setOptions("1000 слов", "coral", "#fff", false)} />*/}
    </Stack.Navigator>
  )
}


const AuthorizationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Authorization" component={Authorization} options={setOptions("", "#048f9d", "#fff", false)} />
    </Stack.Navigator>
  )
}


const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactsPage" component={ContactsPage} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator, ProfileStackNavigator, AuthorizationStackNavigator };