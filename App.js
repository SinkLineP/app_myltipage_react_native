import React, {useEffect, useState} from "react";
import { prepareFonts } from "./LoadingFonts";
import { NavigationContainer } from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from "react-redux";
import 'react-native-gesture-handler';
import AnimatedLoading from "./src/components/AnimatedLoading/AnimatedLoading";
import store from "./src/store/index";
import {
  AutoLogin,
  getCategoriesSearchEstate, getEstates,
  getMainCategoriesSearchEstate,
} from "./src/db/getData";
import {setCurrentUser, switchAuth} from "./src/store/Slices/usersSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StatusBar} from "expo-status-bar";
import TabNavigator from "./src/navigation/TabNavigator";
import {
  setCategoryEstates,
  setMainCategoryEstates,
} from "./src/store/Slices/categoryEstatesSlice";
import {setAllEstates} from "./src/store/Slices/estatesSlice";


export default function App () {
  return (
    <Provider store={store}>
      <AppWrapper />
      <StatusBar style={"auto"} />
    </Provider>
  )
}

function AppWrapper() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  // const activeTab = useSelector(state => state.categoryEstates.activeTab);

  //асинхронная функция загрузки шрифтов
  useEffect(() => {
    prepareFonts(setFontsLoaded).then(r => r);

    async function fetchData() {
      try {
        const tokenStorage = await AsyncStorage.getItem("token");
        if (tokenStorage !== null) {
          setToken(tokenStorage)
        }
      } catch (e) {
        console.log(e)
      }

      if (token) {
        AutoLogin(token).then((data) => {
          dispatch(setCurrentUser({
            id: data.user.id,
            username: data.user.username,
            mail: data.user.mail,
            phone: data.user.phone,
            lastname: data.user.lastname,
            firstname: data.user.firstname,
            surname: data.user.surname,
            password: data.user.password,
            age: data.user.age,
            avatar: data.user.avatar,
            gender: data.user.gender,
            is_confirmed_email: data.user.is_confirmed_email,
            is_confirmed_phone: data.user.is_confirmed_phone,
            is_default_password: data.user.is_default_password,
            created_at: data.user.created_at,
            updated_at: data.user.updated_at
          }))
          dispatch(switchAuth())
        })
      }
    }

    fetchData().then(r => r)

    getCategoriesSearchEstate().then(r => {
      r.categories.map(category => {
        if (category.parent_id !== null) {
          dispatch(setCategoryEstates({
            id: category.id,
            category_id: category.category_id,
            parent_id: category.parent_id,
            title: category.title,
            slug: category.slug,
            created_at: category.created_at,
            updated_at: category.updated_at,
            isActive: false
          }));
        }
      })

      dispatch(setMainCategoryEstates(r.categories.filter(category => category.parent_id === null)));
    });

    getMainCategoriesSearchEstate().then(r => {
      dispatch(setMainCategoryEstates(r.main_categories));
    });

    getEstates().then(r => {
      dispatch(setAllEstates(r));
    })
  }, []);

  // если шрифты загружены отобразить страницу
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    )
  } else { //если не загружены шрифты не отображать
    return (
      <AnimatedLoading />
    )
  }
}
