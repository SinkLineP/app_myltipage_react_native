import React from "react";
import {StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import ImageViewer from "../../../../components/ImageViewer/ImageViewer";


export default function ShowProfile({OutputField, CustomButton, funcEdit, funcExit}) {
  const currentUser = useSelector(state => state.users.currentUser);
  const language = "RU";

  const translateGender = (lang, gender) => {
    if (lang === "RU") {
      if (gender === "male") {
        return "Мужчина";
      } else if (gender === "other") {
        return "Другое";
      } else if (gender === "female") {
        return "Женщина";
      }
    }
  }

  return (
    <>
      <View style={stylesShowProfile.containerFlex}>
        <View style={stylesShowProfile.containerImage}>
          <ImageViewer styles={stylesShowProfile.cardImage} selectedImage={currentUser.avatar} />
        </View>
        <View style={stylesShowProfile.containerAboutUser}>
          <OutputField stylesContent={stylesShowProfile.text} content={currentUser.firstname} />
          <OutputField stylesContent={stylesShowProfile.text} content={currentUser.lastname} />
          <OutputField stylesContent={stylesShowProfile.textLight} content={currentUser.surname} />
        </View>
      </View>
      <View>
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Редактировать профиль"} funcPress={() => funcEdit()} />
      </View>
      <View style={stylesShowProfile.aboutUser}>
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Возраст: "} field={currentUser.age} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Пол: "} field={translateGender(language, currentUser.gender)} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Username: "} field={currentUser.username} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Email: "} field={currentUser.mail} fieldStyles={stylesShowProfile.userDateContent} />
        <OutputField stylesContent={stylesShowProfile.userDateTitle} content={"Phone: "} field={currentUser.phone} fieldStyles={stylesShowProfile.userDateContent} />
      </View>
      <View>
        <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Выйти из профиля"} stylesButton={stylesShowProfile.exit} funcPress={() => funcExit()} />
      </View>
    </>
  )
}

const stylesShowProfile = StyleSheet.create({
  containerFlex: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingBottom: 15
  },
  containerImage: {
    flex: 1,
    paddingLeft: "4%"
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 20
  },
  containerAboutUser: {
    flex: 1,
    paddingTop: 15,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
  textLight: {
    color: "rgba(255,255,255,0.9)",
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: 18,
    paddingLeft: 3
  },
  aboutUser: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userDateTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  userDateContent: {
    fontWeight: "normal",
  },
})