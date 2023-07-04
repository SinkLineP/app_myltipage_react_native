import {createStackNavigator} from "@react-navigation/stack";
import {setOptions} from "../options/routerHeaderOptions";
import MainProfile from "./tabs/TabAuth/Profile/MainProfile/MainProfile";
import Authorization from "./tabs/TabAuth/Authorization/screens/Authorization";
import SettingsProfile from "./tabs/TabAuth/Profile/MainProfile/Tabs/SettingsPages/SettingsProfile";
import ConfidentialSettings from "./tabs/TabAuth/Profile/MainProfile/Tabs/SettingsPages/ConfidentialSettings";
import EditProfile from "./tabs/TabAuth/Profile/MainProfile/Tabs/EditPages/EditProfile";
import EditEmail from "./tabs/TabAuth/Profile/MainProfile/Tabs/EditPages/EditEmail";
import EditPhone from "./tabs/TabAuth/Profile/MainProfile/Tabs/EditPages/EditPhone";
import AllFriendsPage from "./tabs/TabAuth/Profile/MainProfile/Tabs/FriendsPages/AllFriendsPage";
import RequestFriendsPages from "./tabs/TabAuth/Profile/MainProfile/Tabs/FriendsPages/RequestFriendsPages";
import ResponseFriendsPage from "./tabs/TabAuth/Profile/MainProfile/Tabs/FriendsPages/ResponseFriendsPage";
import Menu from "./tabs/TabMenu/Menu";
import Search from "./tabs/TabSearch/Search";
import Chat from "./tabs/TabChat/Chat";
import LoginEmail from "./tabs/TabAuth/Authorization/screens/LoginEmail";
import SignUpEmail from "./tabs/TabAuth/Authorization/screens/SignUpEmail";
import ConfirmEmail from "./tabs/TabAuth/Profile/MainProfile/screens/ConfirmEmail";
import ConfirmPhone from "./tabs/TabAuth/Profile/MainProfile/screens/ConfirmPhone";
import ChangePassword from "./tabs/TabAuth/Profile/MainProfile/screens/ChangePassword";
import {
  controllerTheme_StackNavigator_Background,
  controllerTheme_StackNavigator_Title
} from "../controllers/Theme/Theme";
import {useSelector} from "react-redux";
import SearchAddress from "./screens/SearchAddress/SearchAddress";
import SelectAddress from "./screens/SelectAddress/SelectAddress";
import ShowAds from "./screens/ShowAds/ShowAds";
import Home from "./tabs/TabHome/Home";
import {TabLocation} from "./tabs/TabSearch/TabLocation/TabLocation";
import TabAdvancedSearch from "./tabs/TabSearch/TabAdvancedSearch/TabAdvancedSearch";
import MenuSettings from "./screens/MenuSettings/MenuSettings";
import LanguageApp from "./screens/LanguageApp/LanguageApp";
import ThemeApp from "./screens/ThemeApp/ThemeApp";
import CountryApp from "./screens/CountryApp/CountryApp";
import ShowAdvertisement from "./screens/ShowAdvertisement/ShowAdvertisement";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={setOptions("Главная", "tomato", "#fff", false)} />
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
      <Stack.Screen name="SearchAddress" component={SearchAddress} options={setOptions("Выберите адрес", "tomato", "white", "", 0, 0, "", "", 0, 0, "", false)} />
      <Stack.Screen name="SelectAddress" component={SelectAddress} options={setOptions("Выберите адрес", "tomato", "white", "", 0, 0, "", "", 0, 0, "", false)} />
      <Stack.Screen name="ShowAds" component={ShowAds} options={setOptions("Найденные объявления", "#1e9dff", "white", "", 0, 0, "", "", 0, 0, "", false)} />
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