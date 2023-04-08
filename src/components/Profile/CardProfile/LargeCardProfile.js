import React, {useState} from "react";
import {StyleSheet, View, Image, Text, Dimensions, Button} from "react-native";
import {useSelector} from "react-redux";


export default function LargeCardProfile({navigation, funcExit}) {
  const {avatar, mail, lastname, firstname, surname, phone, username} = useSelector(state => state.users.currentUser);
  const [isEditing, setEditing] = useState(false);

  const OutputField = ({stylesContent, content, field, fieldStyles}) => {
    if (field !== undefined) {
      return (
        <Text style={stylesContent}>{content}<Text style={fieldStyles}>{field !== "" ? field : "-пусто-"}</Text></Text>
      );
    } else {
      return (
        <Text style={stylesContent}>{content !== "" ? content : "-пусто-"}</Text>
      );
    }
  }

  const CustomButton = ({stylesButton, funcPress, titleButton}) => {
    return (
      <Text style={stylesButton} onPress={funcPress}>{titleButton}</Text>
    )
  }

  const funcEdit = () => {
    setEditing(!isEditing);
  }


  return (
    <View style={LargeStyles.container}>
      {!isEditing ? (
        <>
          <View style={LargeStyles.containerFlex}>
            <View style={LargeStyles.containerImage}>
              <Image style={LargeStyles.cardImage} source={avatar === "" ? require("./Images/default_profile_icon.webp") : ""} />
            </View>
            <View style={LargeStyles.containerAboutUser}>
              <OutputField stylesContent={LargeStyles.text} content={firstname} />
              <OutputField stylesContent={LargeStyles.text} content={lastname} />
              <OutputField stylesContent={LargeStyles.textLight} content={surname} />
            </View>
          </View>
          <View>
            <CustomButton titleButton={"Редактировать профиль"} stylesButton={LargeStyles.editButton} funcPress={() => funcEdit()} />
          </View>
          <View style={LargeStyles.aboutUser}>
            <OutputField stylesContent={LargeStyles.userDateTitle} content={"Username: "} field={username} fieldStyles={LargeStyles.userDateContent} />
            <OutputField stylesContent={LargeStyles.userDateTitle} content={"Email: "} field={mail} fieldStyles={LargeStyles.userDateContent} />
            <OutputField stylesContent={LargeStyles.userDateTitle} content={"Phone: "} field={phone} fieldStyles={LargeStyles.userDateContent} />
          </View>
          <View>
            <CustomButton titleButton={"Выйти из профиля"} stylesButton={LargeStyles.exit} funcPress={() => funcExit()} />
          </View>
        </>
      ) : (
        <>
          <OutputField stylesContent={LargeStyles.titleEditing} content={"Редактирование"} />
          <View style={LargeStyles.containerFlex}>
            <View style={LargeStyles.containerImage}>
              <Image style={LargeStyles.cardImage} source={avatar === "" ? require("./Images/default_profile_icon.webp") : ""} />
            </View>
            <View style={LargeStyles.containerAboutUser}>
              <OutputField stylesContent={LargeStyles.text} content={firstname} />
              <OutputField stylesContent={LargeStyles.text} content={lastname} />
              <OutputField stylesContent={LargeStyles.textLight} content={surname} />
            </View>
          </View>
          <View style={LargeStyles.aboutUser}>
            <OutputField stylesContent={LargeStyles.userDateTitle} content={"Username: "} field={username} fieldStyles={LargeStyles.userDateContent} />
            <OutputField stylesContent={LargeStyles.userDateTitle} content={"Email: "} field={mail} fieldStyles={LargeStyles.userDateContent} />
            <OutputField stylesContent={LargeStyles.userDateTitle} content={"Phone: "} field={phone} fieldStyles={LargeStyles.userDateContent} />
          </View>
          <View>
            <CustomButton titleButton={"Сохранить"} stylesButton={LargeStyles.saveChanges} funcPress={() => funcEdit()} />
            <CustomButton titleButton={"Отмена"} stylesButton={LargeStyles.cancelEditing} funcPress={() => funcEdit()} />
          </View>
        </>
      )}
    </View>
  )
}

const LargeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#048f9d",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderStyle: "solid",
    borderRadius: 10
  },
  containerFlex: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  containerImage: {
    flex: 1,
    paddingLeft: "4%"
  },
  containerAboutUser: {
    flex: 1,
    paddingTop: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  exit: {
    width: "100%",
    backgroundColor: "#c74242",
    padding: 5,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
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
    fontSize: 18
  },
  editButton: {
    width: "100%",
    backgroundColor: "#13bfd4",
    padding: 5,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10
  },
  aboutUser: {
    paddingLeft: 10,
    paddingTop: 15,
  },
  userDateTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  userDateContent: {
    fontWeight: "normal",
  },
  titleEditing: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20
  },
  saveChanges: {
    backgroundColor: "#8fcd75",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    marginTop: 20
  },
  cancelEditing: {
    backgroundColor: "#c74242",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    marginTop: 5
  }
})