import React from "react";
import {Image, View} from "react-native";


export default function ShowProfile({stylesShowProfile, OutputField, CustomButton, funcEdit, funcExit, avatar, firstname, lastname, surname, username, mail, phone}) {
  return (
    <>
      <View style={stylesShowProfile.containerFlex}>
        <View style={stylesShowProfile.containerImage}>
          <Image style={stylesShowProfile.cardImage} source={avatar === "" ? require("./Images/default_profile_icon.webp") : ""} />
        </View>
        <View style={stylesShowProfile.containerAboutUser}>
          <OutputField stylesContent={stylesShowProfile.text} content={firstname} />
          <OutputField stylesContent={stylesShowProfile.text} content={lastname} />
          <OutputField stylesContent={stylesShowProfile.textLight} content={surname} />
        </View>
      </View>
      <View>
        <CustomButton titleButton={"Редактировать профиль"} stylesButton={stylesShowProfile.editButton} funcPress={() => funcEdit()} />
      </View>
      <View style={stylesShowProfile.aboutUser}>
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Username: "} field={username} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Email: "} field={mail} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Phone: "} field={phone} fieldStyles={stylesShowProfile.userDateContent} />
      </View>
      <View>
        <CustomButton titleButton={"Выйти из профиля"} stylesButton={stylesShowProfile.exit} funcPress={() => funcExit()} />
      </View>
    </>
  )
}