import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ShowProfile from "../../../navigation/screens/Profile/MainProfile/ShowProfile";
import EditProfile from "../../../navigation/screens/Profile/MainProfile/EditProfile";
import {EditUser} from "../../../db/getData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setCurrentUser} from "../../../store/Slices/usersSlice";
import SettingsProfile from "../../../navigation/screens/Profile/MainProfile/SettingsProfile";


export default function CardProfile({navigation, funcExit}) {
  const [isEditing, setEditing] = useState(false);
  const [isSetting, setSetting] = useState(false);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser);

  const funcEdit = () => {
    setEditing(!isEditing);
  }

  const funcSave = async (user) => {
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
      setEditing(!isEditing);
    })
  }

  const funcCancel = (resetForm) => {
    resetForm({values: ""})
    setEditing(!isEditing);
  }

  const funcSettings = () => {
    setSetting(!isSetting)
  }

  const RenderShow = () => {
    if (isSetting) {
      return (
        <SettingsProfile
          setting={isSetting}
          funcSetting={setSetting}
          funcEdit={funcEdit}
        />
      )
    } else {
      return (
        <ShowProfile
          funcExit={funcExit}
          funcSettings={funcSettings}
        />
      )
    }
  }

  return (
    <View style={LargeStyles.container}>
      {!isEditing ? (<RenderShow />) : (
        <EditProfile
          funcSave={funcSave}
          stylesEditProfile={LargeStyles}
          funcCancel={funcCancel}
        />
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
    borderRadius: 10,
    marginBottom: 20
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
})