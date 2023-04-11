import React, {useEffect, useState} from "react";
import {View, StyleSheet, TextInput, Text, Dimensions, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import * as ImagePicker from "expo-image-picker";
import {Formik} from "formik";
import { ButtonGroup } from '@rneui/themed'
import {EditUserSchema} from "../../Schematics/Schematics";
import {OutputField} from "../../../../../../components/OutputField/OutputField";
import ImageViewer from "../../../../../../components/ImageViewer/ImageViewer";
import {CustomButton} from "../../../../../../components/Profile/Buttons/CustomButton";
import CustomCard from "../../../../../../components/Card/CustomCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {EditUser} from "../../../../../../db/getData";
import {setCurrentUser} from "../../../../../../store/Slices/usersSlice";


export default function EditProfile({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    setSelectedIndex(returnIndexGender(currentUser.gender));
  }, [currentUser.gender])

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
      return require("../../Images/default_profile_icon.webp");
    } else {
      return currentUser.avatar;
    }
  }

  const returnIndexGender = (gender) => {
    if (gender === "male") {
      return 0;
    } else if (gender === "other") {
      return 1;
    } else if (gender === "female") {
      return 2;
    } else {
      return 1;
    }
  }

  const returnGenderFromIndex = (index) => {
    if (index === 0) {
      return "male";
    } else if (index === 1) {
      return "other";
    } else if (index === 2) {
      return "female";
    } else {
      return "other";
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
        onSubmit={async (values) => {
          const user = {
            id: currentUser.id,
            username: values.username !== "" ? values.username : currentUser.username,
            lastname: values.lastname !== "" ? values.lastname : currentUser.lastname,
            firstname: values.firstname !== "" ? values.firstname : currentUser.firstname,
            surname: values.surname !== "" ? values.surname : currentUser.surname,
            age: values.age !== "" ? values.age : currentUser.age,
            avatar: selectedImage !== "" && selectedImage !== "deleted" ? selectedImage :  selectedImage === "deleted" ? selectedImage : currentUser.avatar,
            gender: returnGenderFromIndex(selectedIndex)
          }

          try {
            const tokenStorage = await AsyncStorage.getItem("token");
            if (tokenStorage !== null) {
              setToken(tokenStorage)
            }
          } catch (e) {
            console.log(e)
          }

          EditUser({user, token}).then(r => {
            dispatch(setCurrentUser({
              id: currentUser.id,
              username: user.username,
              mail: currentUser.mail,
              phone: currentUser.phone,
              lastname: user.lastname,
              firstname: user.firstname,
              surname: user.surname,
              password: currentUser.password,
              age: user.age,
              avatar: user.avatar,
              gender: user.gender,
              created_at: currentUser.created_at,
              updated_at: currentUser.updated_at
            }))
          })
          navigation.goBack()
        }}
      >
        {(props) => (
          <ScrollView style={stylesEdit.container}>
            <CustomCard>
              <View style={stylesEdit.containerImage}>
                <View style={stylesEdit.imageContainer}>
                  <ImageViewer styles={stylesEdit.cardImage} selectedImage={editUserPhoto(selectedImage)} />
                </View>
                <View style={stylesEdit.imageSelectContainer}>
                  <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Выбрать изображение.."} fontSize={18} funcPress={() => PickImageAsync()} />
                  <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Удалить изображение.."} fontSize={18} funcPress={() => setSelectedImage("deleted")} />
                </View>
              </View>
              <View style={stylesEdit.aboutUser}>

                {props.errors.firstname && props.touched.firstname ? (<Text style={stylesEdit.error}>{props.errors.firstname}</Text>) : <Text></Text>}
                <OutputField stylesContent={stylesEdit.userDateTitle} content={"Имя: "} field={currentUser.firstname} fieldStyles={stylesEdit.userDateContent} />
                <TextInput
                  style={stylesEdit.input}
                  placeholder={"Введите имя.."}
                  onChangeText={props.handleChange("firstname")}
                  value={props.values.firstname}
                />

                {props.errors.lastname && props.touched.lastname ? (<Text style={stylesEdit.error}>{props.errors.lastname}</Text>) : <Text></Text>}
                <OutputField stylesContent={stylesEdit.userDateTitle} content={"Фамилия: "} field={currentUser.lastname} fieldStyles={stylesEdit.userDateContent} />
                <TextInput
                  style={stylesEdit.input}
                  placeholder={"Введите фамилию.."}
                  onChangeText={props.handleChange("lastname")}
                  value={props.values.lastname}
                />

                {props.errors.surname && props.touched.surname ? (<Text style={stylesEdit.error}>{props.errors.surname}</Text>) : <Text></Text>}
                <OutputField stylesContent={stylesEdit.userDateTitle} content={"Отчество: "} field={currentUser.surname} fieldStyles={stylesEdit.userDateContent} />
                <TextInput
                  style={stylesEdit.input}
                  placeholder={"Введите отчество.."}
                  onChangeText={props.handleChange("surname")}
                  value={props.values.surname}
                />

                {props.errors.age && props.touched.age ? (<Text style={stylesEdit.error}>{props.errors.age}</Text>) : <Text></Text>}
                <OutputField stylesContent={stylesEdit.userDateTitle} content={"Возраст: "} field={currentUser.age} fieldStyles={stylesEdit.userDateContent} />
                <TextInput
                  keyboardType={"numeric"}
                  style={stylesEdit.input}
                  placeholder={"Введите возраст.."}
                  onChangeText={props.handleChange("age")}
                  value={props.values.age}
                />

                <Text></Text>
                <OutputField stylesContent={stylesEdit.userDateTitle} content={"Ваш пол: "} field={currentUser.username} fieldStyles={stylesEdit.userDateContent} />
                <ButtonGroup
                  textStyle={stylesEdit.groupButtonsText}
                  buttons={['male', 'other', 'female']}
                  selectedIndex={selectedIndex}
                  onPress={(value) => {
                    setSelectedIndex(value)
                  }}
                  containerStyle={stylesEdit.groupButtons}
                  selectedButtonStyle={stylesEdit.groupButtonsSelectedButton}
                />


                {props.errors.username && props.touched.username ? (<Text style={stylesEdit.error}>{props.errors.username}</Text>) : <Text></Text>}
                <OutputField stylesContent={stylesEdit.userDateTitle} content={"Имя пользователя: "} field={currentUser.username} fieldStyles={stylesEdit.userDateContent} />
                <TextInput
                  style={stylesEdit.input}
                  placeholder={"Введите имя пользователя.."}
                  onChangeText={props.handleChange("username")}
                  value={props.values.username}
                />

                {/*<OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Email: "} field={mail} fieldStyles={stylesEditProfile.userDateContent} />*/}
                {/*<OutputField stylesContent={stylesEditProfile.userDateTitle} content={"Phone: "} field={phone} fieldStyles={stylesEditProfile.userDateContent} />*/}
              </View>
              <View style={stylesEdit.whiteSpace}>
                <CustomButton colorBG={"#8fcd75"} color={"white"} titleButton={"Сохранить"} stylesButton={stylesEdit.saveChanges} funcPress={() => props.handleSubmit()} />
                <CustomButton colorBG={"#c74242"} color={"white"} titleButton={"Отмена"} stylesButton={stylesEdit.cancelEditing} funcPress={() => {
                  props.resetForm({values: ""})
                  navigation.goBack()
                }} />
              </View>
            </CustomCard>
          </ScrollView>
        )}
      </Formik>
  )
}

const stylesEdit = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
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
    flexDirection: "column",
    gap: 10
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#fff",
    marginBottom: 15,
    paddingLeft: 10,
    marginLeft: 10,
    width: "93.5%",
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
  },
  userDateContent: {
    fontWeight: "normal",
  },
  aboutUser: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 20
  },
  groupButtons: {
    borderRadius: 50,
    borderColor: "#fff",
    height: 30,
    backgroundColor: "rgba(66,189,202,0.81)",
    textAlign: "center",
    marginRight: 10,
    marginBottom: 15
  },
  groupButtonsText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  groupButtonsSelectedButton: {
    backgroundColor: "rgb(68,230,233)",
  },
  whiteSpace: {
    flexDirection: "column",
    gap: 10
  }
})