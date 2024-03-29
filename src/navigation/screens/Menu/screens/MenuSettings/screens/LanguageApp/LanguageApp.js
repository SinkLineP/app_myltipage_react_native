import React, {useState} from "react";
import {View} from "react-native";
import RadioButtons from "./RadioButtons";
import {useDispatch, useSelector} from "react-redux";
import {setLanguageApp} from "../../../../../../../store/Slices/settingsAppSlice";




export default function LanguageApp() {
  const language = useSelector(state => state.settingsApp.language);
  const theme = useSelector(state => state.settingsApp.theme);
  const languageData = useSelector(state => state.settingsApp.languageData);
  const dispatch = useDispatch();


  return (
    <View>
      <RadioButtons
        theme={theme}
        items={languageData}
        activeRadio={language}
        setActive={setLanguageApp}
        dispatch={dispatch}
      />
    </View>
  );
}