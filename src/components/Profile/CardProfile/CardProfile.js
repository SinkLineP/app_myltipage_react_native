import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ShowProfile from "../../../navigation/screens/Profile/MainProfile/ShowProfile";
import EditProfile from "../../../navigation/screens/Profile/MainProfile/EditProfile";
import {EditUser} from "../../../db/getData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setAvatarForCurrentUser, setCurrentUser} from "../../../store/Slices/usersSlice";


export default function CardProfile({navigation, funcExit}) {
  const [isEditing, setEditing] = useState(false);
  const textEmpty = "не указано"

  const OutputField = ({stylesContent, content, field, fieldStyles}) => {
    if (field !== undefined) {
      return (
        <Text style={stylesContent}>{content}<Text style={fieldStyles}>{field !== "" ? field : textEmpty}</Text></Text>
      );
    } else {
      return (
        <Text style={stylesContent}>{content !== "" ? content : textEmpty}</Text>
      );
    }
  }

  const CustomButton = ({color, colorBG, funcPress, titleButton, fontSize}) => {
    return (
      <Text style={{
        backgroundColor: colorBG,
        textAlign: "center",
        color: color,
        fontWeight: "bold",
        fontSize: fontSize !== undefined ? fontSize : 20,
        padding: 10,
        marginTop: 5
      }} onPress={funcPress}>{titleButton}</Text>
    )
  }

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

  return (
    <View style={LargeStyles.container}>
      {!isEditing ? (
        <ShowProfile
          CustomButton={CustomButton}
          funcEdit={funcEdit}
          funcExit={funcExit}
          OutputField={OutputField}
        />
      ) : (
        <EditProfile
          funcSave={funcSave}
          stylesEditProfile={LargeStyles}
          OutputField={OutputField}
          CustomButton={CustomButton}
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