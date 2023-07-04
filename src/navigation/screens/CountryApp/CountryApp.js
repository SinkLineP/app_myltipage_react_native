import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {View} from "react-native";
import RadioButtons from "../LanguageApp/RadioButtons";
import {setCountryApp} from "../../../store/Slices/settingsAppSlice";


export default function CountryApp() {
  const country = useSelector(state => state.settingsApp.country);
  const theme = useSelector(state => state.settingsApp.theme);
  const countryData = useSelector(state => state.settingsApp.countryData);
  const dispatch = useDispatch();


  return (
    <View>
      <RadioButtons
        theme={theme}
        items={countryData}
        activeRadio={country}
        setActive={setCountryApp}
        dispatch={dispatch}
      />
    </View>
  );
}