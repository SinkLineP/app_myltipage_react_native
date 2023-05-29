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
import Authorization from "./screens/Authorization/screens/Authorization";
import SettingsProfile from "./screens/Profile/MainProfile/Tabs/SettingsPages/SettingsProfile";
import ConfidentialSettings from "./screens/Profile/MainProfile/Tabs/SettingsPages/ConfidentialSettings";
import EditProfile from "./screens/Profile/MainProfile/Tabs/EditPages/EditProfile";
import EditEmail from "./screens/Profile/MainProfile/Tabs/EditPages/EditEmail";
import EditPhone from "./screens/Profile/MainProfile/Tabs/EditPages/EditPhone";
import AllFriendsPage from "./screens/Profile/MainProfile/Tabs/FriendsPages/AllFriendsPage";
import RequestFriendsPages from "./screens/Profile/MainProfile/Tabs/FriendsPages/RequestFriendsPages";
import ResponseFriendsPage from "./screens/Profile/MainProfile/Tabs/FriendsPages/ResponseFriendsPage";
import Menu from "./screens/Menu/Menu";
import Search from "./screens/Search/Search";
import Chat from "./screens/Chat/Chat";
import LoginEmail from "./screens/Authorization/screens/LoginEmail";
import SignUpEmail from "./screens/Authorization/screens/SignUpEmail";
import ConfirmEmail from "./screens/Profile/MainProfile/screens/ConfirmEmail";
import ConfirmPhone from "./screens/Profile/MainProfile/screens/ConfirmPhone";
import ChangePassword from "./screens/Profile/MainProfile/screens/ChangePassword";
import MenuSettings from "./screens/Menu/screens/MenuSettings/MenuSettings";
import LanguageApp from "./screens/Menu/screens/MenuSettings/screens/LanguageApp/LanguageApp";
import ThemeApp from "./screens/Menu/screens/MenuSettings/screens/ThemeApp/ThemeApp";
import {
  controllerTheme_StackNavigator_Background,
  controllerTheme_StackNavigator_Title
} from "../controllers/Theme/Theme";
import {useSelector} from "react-redux";
import {TabLocation} from "../components/SearchTabs/Tabs/TabLocation/TabLocation";
import CountryApp from "./screens/Menu/screens/MenuSettings/screens/CountryApp/CountryApp";
import TabAdvancedSearch from "../components/SearchTabs/Tabs/TabAdvancedSearch/TabAdvancedSearch";
import ShowAdvertisement from "./screens/Menu/screens/ShowAdvertisement/ShowAdvertisement";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainReviews" component={MainReviews} options={setOptions("Категории", "coral", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="Move" component={MoveReviews} options={setOptions("Фильмы", "#9e3e1b", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="Cartoon" component={CartoonReviews} options={setOptions("Мультфильмы", "#1e9dff", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="Serials" component={SerialsReviews} options={setOptions("Сериалы", "#fec260", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="Anime" component={AnimeReviews} options={setOptions("Аниме", "#ff34c7", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="CartoonSerials" component={CartoonSerials} options={setOptions("Мульт Сериалы", "#1588e2", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={setOptions("Обзор", "#2c3a53", "#fff", false)} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authorization" component={Authorization} options={setOptions("", "#048f9d", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="MainProfile" component={MainProfile} options={setOptions("Мой профиль", "#fff", "#404040", "", 0, 0, "", false)} />
      <Stack.Screen name="LoginEmail" component={LoginEmail} options={setOptions("", "#ebebeb", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} options={setOptions("", "#ebebeb", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={setOptions("", "#ebebeb", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="ConfirmPhone" component={ConfirmPhone} options={setOptions("", "#ebebeb", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={setOptions("", "#ebebeb", "#fff", "", 0, 0, "", false)} />
      {/* Settings Pages */}
      <Stack.Screen name="SettingsProfile" component={SettingsProfile} options={setOptions("Настройки", "#048f9d", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="ConfidentialSettings" component={ConfidentialSettings} options={setOptions("Конфиденциальные данные", "#048f9d", "#fff", "", 0, 0, "", false)} />
      {/* Edit Pages */}
      <Stack.Screen name="EditProfile" component={EditProfile} options={setOptions("Редактирование профиля", "#048f9d", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="EditEmail" component={EditEmail} options={setOptions("Изменение почты", "#048f9d", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="EditPhone" component={EditPhone} options={setOptions("Изменение телефона", "#048f9d", "#fff", "", 0, 0, "", false)} />
      {/* Friends */}
      <Stack.Screen name="AllFriendsPage" component={AllFriendsPage} options={setOptions("Друзья", "#048f9d", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="RequestFriendsPages" component={RequestFriendsPages} options={setOptions("Заявки в друзья", "#048f9d", "#fff", "", 0, 0, "", false)} />
      <Stack.Screen name="ResponseFriendsPage" component={ResponseFriendsPage} options={setOptions("Запросы в друзья", "#048f9d", "#fff", "", 0, 0, "", false)} />
    </Stack.Navigator>
  )
}


const AuthorizationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authorization" component={Authorization} options={setOptions("", "#048f9d", "#fff", "", 0, 0, "", false)} />
    </Stack.Navigator>
  )
}


const MenuStackNavigator = () => {
  const theme = useSelector(state => state.settingsApp.theme);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={setOptions("Меню", controllerTheme_StackNavigator_Background(theme, "#ffffff"), controllerTheme_StackNavigator_Title(theme, "#000000"), "MenuSettings", 30, 30, require("./Icons/settings-icon.png"), true)} />
      <Stack.Screen name="MenuSettings" component={MenuSettings} options={setOptions("Настройки приложения", controllerTheme_StackNavigator_Background(theme, "#ffffff"), controllerTheme_StackNavigator_Title(theme, "#000000"), "", 30, 30, require("./Icons/settings-icon.png"), false)} />
      <Stack.Screen name="LanguageApp" component={LanguageApp} options={setOptions("Выберите язык", controllerTheme_StackNavigator_Background(theme, "#ffffff"), controllerTheme_StackNavigator_Title(theme, "#000000"), "", 30, 30, require("./Icons/settings-icon.png"), false)} />
      <Stack.Screen name="ThemeApp" component={ThemeApp} options={setOptions("Выберите тему", controllerTheme_StackNavigator_Background(theme, "#ffffff"), controllerTheme_StackNavigator_Title(theme, "#000000"), "", 30, 30, require("./Icons/settings-icon.png"), false)} />
      <Stack.Screen name="CountryApp" component={CountryApp} options={setOptions("Выберите страну", controllerTheme_StackNavigator_Background(theme, "#ffffff"), controllerTheme_StackNavigator_Title(theme, "#000000"), "", 30, 30, require("./Icons/settings-icon.png"), false)} />
    </Stack.Navigator>
  );
}


const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={setOptions("Поиск", "tomato", "white", "", 0, 0, "", "", 0, 0, "", false)} />
      <Stack.Screen name="TabLocation" component={TabLocation} options={setOptions("Быстрый поиск", "tomato", "white", "", 0, 0, "", "", 0, 0, "", false)} />
      <Stack.Screen name="TabAdvancedSearch" component={TabAdvancedSearch} options={setOptions("Расширенный поиск", "tomato", "white", "", 0, 0, "", "", 0, 0, "", false)} />
      <Stack.Screen name="ShowAdvertisement" component={ShowAdvertisement} options={setOptions("Осмотреть", "tomato", "white", "", 0, 0, "", "", 0, 0, "", false)} />
    </Stack.Navigator>
  );
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} options={setOptions("Чат", "#ff9a75", "#ffffff", "", 0, 0, "", "", 0, 0, "", false)} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ProfileStackNavigator, AuthorizationStackNavigator, MenuStackNavigator, SearchStackNavigator, ChatStackNavigator};