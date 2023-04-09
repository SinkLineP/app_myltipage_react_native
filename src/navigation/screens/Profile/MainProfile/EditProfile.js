import React, {useState} from "react";
import {View, StyleSheet, Button, Text} from "react-native";
import ImageViewer from "../../../../components/ImageViewer/ImageViewer";
import {useDispatch, useSelector} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {setAvatarForCurrentUser} from "../../../../store/Slices/usersSlice";


export default function EditProfile({
    stylesEditProfile,
    OutputField,
    CustomButton,
    firstname,
    lastname,
    surname,
    username,
    mail,
    phone,
    funcSave,
    funcCancel,
    age,
    // avatar,
    // password
  }) {
  const currentUser = useSelector(state => state.users.currentUser);
  const [selectedImage, setSelectedImage] = useState("");
  const PickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  }
  const editUserPhoto = (photo) => {
    if (photo !== "") {
      return selectedImage;
    } else {
      return currentUser.avatar;
    }
  }

  const user = {
    id: currentUser.id,
    username: "",
    lastname: "",
    firstname: "",
    surname: "",
    age: "",
    avatar: selectedImage !== "" ? selectedImage : currentUser.avatar
  }

  return (
    <>
      <OutputField stylesContent={stylesEditProfile.titleEditing} content={"Редактирование"} />
      <View style={stylesEdit.containerImage}>
        <View style={stylesEdit.imageContainer}>
          <ImageViewer styles={stylesEditProfile.cardImage} selectedImage={editUserPhoto(selectedImage)} />
        </View>
        <View style={stylesEdit.imageSelectContainer}>
          <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Выбрать изображение.."} fontSize={18} stylesButton={stylesEditProfile.select} funcPress={() => PickImageAsync()} />
        </View>
      </View>
      <View style={stylesEditProfile.aboutUser}>
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Имя: "} field={firstname} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Фамилия: "} field={lastname} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Отчество: "} field={surname} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Возраст: "} field={age} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Username: "} field={username} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Email: "} field={mail} fieldStyles={stylesEditProfile.userDateContent} />
        <OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Phone: "} field={phone} fieldStyles={stylesEditProfile.userDateContent} />
      </View>
      <View>
        <CustomButton colorBG={"#8fcd75"} color={"white"} titleButton={"Сохранить"} stylesButton={stylesEditProfile.saveChanges} funcPress={() => funcSave(user, selectedImage)} />
        <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Отмена"} stylesButton={stylesEditProfile.cancelEditing} funcPress={() => funcCancel()} />
      </View>
    </>
  )
}

const stylesEdit = StyleSheet.create({
  containerImage: {
    display: "flex",
    flexDirection: "row"
  },
  imageContainer: {
    flex: 1,
  },
  imageSelectContainer: {
    flex: 1,
    paddingTop: 12
  }
})

