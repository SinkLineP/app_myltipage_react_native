import React from "react";
import {Image, View} from "react-native";
import {useSelector} from "react-redux";
import ImageViewer from "../../../../components/ImageViewer/ImageViewer";


export default function ShowProfile({stylesShowProfile, OutputField, CustomButton, funcEdit, funcExit, firstname, lastname, surname, username, mail, phone, age}) {
  const currentUser = useSelector(state => state.users.currentUser);
  console.log(currentUser)

  return (
    <>
      <View style={stylesShowProfile.containerFlex}>
        <View style={stylesShowProfile.containerImage}>
          <ImageViewer styles={stylesShowProfile.cardImage} selectedImage={currentUser.avatar} />
        </View>
        <View style={stylesShowProfile.containerAboutUser}>
          <OutputField stylesContent={stylesShowProfile.text} content={firstname} />
          <OutputField stylesContent={stylesShowProfile.text} content={lastname} />
          <OutputField stylesContent={stylesShowProfile.textLight} content={surname} />
        </View>
      </View>
      <View>
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Редактировать профиль"} funcPress={() => funcEdit()} />
      </View>
      <View style={stylesShowProfile.aboutUser}>
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Username: "} field={username} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Возраст: "} field={age} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Email: "} field={mail} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Phone: "} field={phone} fieldStyles={stylesShowProfile.userDateContent} />
      </View>
      <View>
        <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Выйти из профиля"} stylesButton={stylesShowProfile.exit} funcPress={() => funcExit()} />
      </View>
    </>
  )
}