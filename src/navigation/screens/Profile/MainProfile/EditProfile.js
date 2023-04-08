import React from "react";
import {Image, View, Text} from "react-native";


export default function EditProfile({stylesEditProfile, OutputField, CustomButton, avatar, firstname, lastname, surname, username, mail, phone, funcEdit, funcCancel}) {

  return (
    <>
      <OutputField stylesContent={stylesEditProfile.titleEditing} content={"Редактирование"} />
      <View style={stylesEditProfile.containerFlex}>
        <View style={stylesEditProfile.containerImage}>
          <Image style={stylesEditProfile.cardImage} source={avatar === "" ? require("./Images/default_profile_icon.webp") : ""} />
          {/*<CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Выбрать изображение.."} stylesButton={stylesEditProfile.select} funcPress={() => funcEdit()} />*/}
        </View>
        <View style={stylesEditProfile.containerAboutUser}>
          <OutputField stylesContent={stylesEditProfile.text} content={firstname} />
          <OutputField stylesContent={stylesEditProfile.text} content={lastname} />
          <OutputField stylesContent={stylesEditProfile.textLight} content={surname} />
        </View>
      </View>
      <View style={stylesEditProfile.aboutUser}>
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Username: "} field={username} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Email: "} field={mail} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Phone: "} field={phone} fieldStyles={stylesEditProfile.userDateContent} />
      </View>
      <View>
        <CustomButton colorBG={"#8fcd75"} color={"white"} titleButton={"Сохранить"} stylesButton={stylesEditProfile.saveChanges} funcPress={() => funcEdit()} />
        <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Отмена"} stylesButton={stylesEditProfile.cancelEditing} funcPress={() => funcCancel()} />
      </View>
    </>
  )
}