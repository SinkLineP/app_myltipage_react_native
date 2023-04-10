import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {OutputField} from "../../../../components/OutputField/OutputField";
import {CustomButton} from "../../../../components/Profile/Buttons/CustomButton";


export default function SettingsProfile({setting, funcSetting, funcEdit}) {
  const [showTabEditProfile, setShowTabEditProfile] = useState(false);
  const [showTabMain, setShowTabMain] = useState(true);

  const TabEditProfile = () => {
    return (
      <>
        <OutputField stylesContent={stylesSettingsProfile.title} content={"Настройки профиля"} />
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Основные настройки"} funcPress={() => funcEdit()} />
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Дополнительные настройки"} funcPress={() => {

        }} />
        <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Вернутся"} stylesButton={stylesSettingsProfile.cancel} funcPress={() => setShowTabMain(!showTabMain)} />
      </>
    )
  }

  const TabMain = () => {
    return (
      <>
        <OutputField stylesContent={stylesSettingsProfile.title} content={"Настройки профиля"} />
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Редактирование профиля"} stylesButton={stylesSettingsProfile.cancel} funcPress={() => {
          setShowTabEditProfile(!showTabEditProfile)
          setShowTabMain(!showTabMain)
        }} />
        <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Вернутся"} stylesButton={stylesSettingsProfile.cancel} funcPress={() => funcSetting(!setting)} />
      </>
    )
  }


  if (showTabMain) {
    return (
      <TabMain />
    )
  } else if (showTabEditProfile) {
    return (
      <TabEditProfile />
    )
  }


}

const stylesSettingsProfile = StyleSheet.create({
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20
  },
  cancel: {
    backgroundColor: "#c74242",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    marginTop: 5
  }
})