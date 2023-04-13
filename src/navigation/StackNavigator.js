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
import SettingsProfile from "./screens/Profile/MainProfile/Tabs/SettingsPages/SettingsProfile";
import ConfidentialSettings from "./screens/Profile/MainProfile/Tabs/SettingsPages/ConfidentialSettings";
import EditProfile from "./screens/Profile/MainProfile/Tabs/EditPages/EditProfile";
import EditEmail from "./screens/Profile/MainProfile/Tabs/EditPages/EditEmail";
import EditPassword from "./screens/Profile/MainProfile/Tabs/EditPages/EditPassword";
import EditPhone from "./screens/Profile/MainProfile/Tabs/EditPages/EditPhone";
import AllFriendsPage from "./screens/Profile/MainProfile/Tabs/FriendsPages/AllFriendsPage";
import RequestFriendsPages from "./screens/Profile/MainProfile/Tabs/FriendsPages/RequestFriendsPages";
import ResponseFriendsPage from "./screens/Profile/MainProfile/Tabs/FriendsPages/ResponseFriendsPage";
import Menu from "./screens/Menu/Menu";


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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authorization" component={Authorization} options={setOptions("", "#048f9d", "#fff", false)} />
      <Stack.Screen name="MainProfile" component={MainProfile} options={setOptions("Мой профиль", "#ebebeb", "#fff", false)} />
      {/* Settings Pages */}
      <Stack.Screen name="SettingsProfile" component={SettingsProfile} options={setOptions("Настройки", "#048f9d", "#fff", false)} />
      <Stack.Screen name="ConfidentialSettings" component={ConfidentialSettings} options={setOptions("Конфиденциальные данные", "#048f9d", "#fff", false)} />
      {/* Edit Pages */}
      <Stack.Screen name="EditProfile" component={EditProfile} options={setOptions("Редактирование профиля", "#048f9d", "#fff", false)} />
      <Stack.Screen name="EditEmail" component={EditEmail} options={setOptions("Изменение почты", "#048f9d", "#fff", false)} />
      <Stack.Screen name="EditPassword" component={EditPassword} options={setOptions("Изменение пароля", "#048f9d", "#fff", false)} />
      <Stack.Screen name="EditPhone" component={EditPhone} options={setOptions("Изменение телефона", "#048f9d", "#fff", false)} />
      {/* Friends */}
      <Stack.Screen name="AllFriendsPage" component={AllFriendsPage} options={setOptions("Друзья", "#048f9d", "#fff", false)} />
      <Stack.Screen name="RequestFriendsPages" component={RequestFriendsPages} options={setOptions("Заявки в друзья", "#048f9d", "#fff", false)} />
      <Stack.Screen name="ResponseFriendsPage" component={ResponseFriendsPage} options={setOptions("Запросы в друзья", "#048f9d", "#fff", false)} />
    </Stack.Navigator>
  )
}


const AuthorizationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authorization" component={Authorization} options={setOptions("", "#048f9d", "#fff", false)} />
    </Stack.Navigator>
  )
}


const MenuStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} options={setOptions("Меню", "#ffffff", "#1e9dff", false)} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ProfileStackNavigator, AuthorizationStackNavigator, MenuStackNavigator};