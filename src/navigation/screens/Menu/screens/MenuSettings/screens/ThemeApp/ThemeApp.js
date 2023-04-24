import React from "react";
import {StyleSheet, View, Text} from "react-native";
import RadioButtons from "../LanguageApp/RadioButtons";
import {useDispatch, useSelector} from "react-redux";
import {setThemeApp} from "../../../../../../../store/Slices/settingsAppSlice";


export default function ThemeApp() {
  const themeData = useSelector(state => state.settingsApp.themeData);
  const theme = useSelector(state => state.settingsApp.theme);
  const dispatch = useDispatch();


  return (
    <View>
      <RadioButtons
        items={themeData}
        activeRadio={theme}
        setActive={setThemeApp}
        dispatch={dispatch}
      />
    </View>
  )
}

const stylesThemeApp = StyleSheet.create({

})