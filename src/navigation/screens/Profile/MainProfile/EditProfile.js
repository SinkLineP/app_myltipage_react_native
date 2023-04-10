import React, {useState} from "react";
import {View, StyleSheet, TextInput, Text} from "react-native";
import ImageViewer from "../../../../components/ImageViewer/ImageViewer";
import {useSelector} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {AuthSchema} from "../../Authorization/Schematics/Schematics";
import {handleAuthClick} from "../../Authorization/Authorization";
import {LoginDB} from "../../../../db/getData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";
import {Formik} from "formik";
import {EditUserSchema} from "./Schematics/Schematics";


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
    }  else if (photo === "deleted") {
      return require("./Images/default_profile_icon.webp");
    } else {
      return currentUser.avatar;
    }
  }

  return (
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          surname: "",
          age: "",
          username: "",
        }}
        validationSchema={EditUserSchema}
        onSubmit={(values) => {
          const user = {
            id: currentUser.id,
            username: values.username !== "" ? values.username : currentUser.username,
            lastname: values.lastname !== "" ? values.lastname : currentUser.lastname,
            firstname: values.firstname !== "" ? values.firstname : currentUser.firstname,
            surname: values.surname !== "" ? values.surname : currentUser.surname,
            age: values.age !== "" ? values.age : currentUser.age,
            avatar: selectedImage !== "" && selectedImage !== "deleted" ? selectedImage :  selectedImage === "deleted" ? selectedImage : currentUser.avatar
          }
          funcSave(user, selectedImage)
          console.log(values)
        }}
      >
        {(props) => (
          <>
            <OutputField stylesContent={stylesEditProfile.titleEditing} content={"Редактирование"} />
            <View style={stylesEdit.containerImage}>
              <View style={stylesEdit.imageContainer}>
                <ImageViewer styles={stylesEditProfile.cardImage} selectedImage={editUserPhoto(selectedImage)} />
              </View>
              <View style={stylesEdit.imageSelectContainer}>
                <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Выбрать изображение.."} fontSize={18} stylesButton={stylesEditProfile.select} funcPress={() => PickImageAsync()} />
                <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Удалить изображение.."} fontSize={18} stylesButton={stylesEditProfile.select} funcPress={() => setSelectedImage("deleted")} />
              </View>
            </View>
            <View style={stylesEditProfile.aboutUser}>

              {props.errors.firstname && props.touched.firstname ? (<Text style={stylesEdit.error}>{props.errors.firstname}</Text>) : <Text></Text>}
              <OutputField stylesContent={stylesEdit.userDateTitle} content={"Имя: "} field={firstname} fieldStyles={stylesEditProfile.userDateContent} />
              <TextInput
                style={stylesEdit.input}
                placeholder={"Введите имя.."}
                onChangeText={props.handleChange("firstname")}
                value={props.values.firstname}
              />

              {props.errors.lastname && props.touched.lastname ? (<Text style={stylesEdit.error}>{props.errors.lastname}</Text>) : <Text></Text>}
              <OutputField stylesContent={stylesEdit.userDateTitle} content={"Фамилия: "} field={lastname} fieldStyles={stylesEditProfile.userDateContent} />
              <TextInput
                style={stylesEdit.input}
                placeholder={"Введите фамилию.."}
                onChangeText={props.handleChange("lastname")}
                value={props.values.lastname}
              />

              {props.errors.surname && props.touched.surname ? (<Text style={stylesEdit.error}>{props.errors.surname}</Text>) : <Text></Text>}
              <OutputField stylesContent={stylesEdit.userDateTitle} content={"Отчество: "} field={surname} fieldStyles={stylesEditProfile.userDateContent} />
              <TextInput
                style={stylesEdit.input}
                placeholder={"Введите отчество.."}
                onChangeText={props.handleChange("surname")}
                value={props.values.surname}
              />

              {props.errors.age && props.touched.age ? (<Text style={stylesEdit.error}>{props.errors.age}</Text>) : <Text></Text>}
              <OutputField stylesContent={stylesEdit.userDateTitle} content={"Возраст: "} field={age} fieldStyles={stylesEditProfile.userDateContent} />
              <TextInput
                keyboardType={"numeric"}
                style={stylesEdit.input}
                placeholder={"Введите возраст.."}
                onChangeText={props.handleChange("age")}
                value={props.values.age}
              />

              {props.errors.username && props.touched.username ? (<Text style={stylesEdit.error}>{props.errors.username}</Text>) : <Text></Text>}
              <OutputField stylesContent={stylesEdit.userDateTitle} content={"Username: "} field={username} fieldStyles={stylesEditProfile.userDateContent} />
              <TextInput
                style={stylesEdit.input}
                placeholder={"Введите имя пользователя.."}
                onChangeText={props.handleChange("username")}
                value={props.values.username}
              />

              {/*<OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Email: "} field={mail} fieldStyles={stylesEditProfile.userDateContent} />*/}
              {/*<OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Phone: "} field={phone} fieldStyles={stylesEditProfile.userDateContent} />*/}
            </View>
            <View>
              <CustomButton colorBG={"#8fcd75"} color={"white"} titleButton={"Сохранить"} stylesButton={stylesEditProfile.saveChanges} funcPress={() => props.handleSubmit()} />
              <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Отмена"} stylesButton={stylesEditProfile.cancelEditing} funcPress={() => funcCancel(props.resetForm)} />
            </View>
          </>
        )}
      </Formik>
  )
}

const stylesEdit = StyleSheet.create({
  containerImage: {
    display: "flex",
    flexDirection: "row"
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  imageSelectContainer: {
    flex: 1,
    // paddingTop: 12
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#fff",
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: "rgba(66,189,202,0.81)"
  },
  userDateTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 3
  },
  error: {
    color: "#b92121",
    fontWeight: "bold",
    textAlign: "center"
  }
})

