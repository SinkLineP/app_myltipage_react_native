import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ShowProfile from "../../../navigation/screens/Profile/MainProfile/ShowProfile";
import EditProfile from "../../../navigation/screens/Profile/MainProfile/EditProfile";
import {EditUser} from "../../../db/getData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setAvatarForCurrentUser, setCurrentUser} from "../../../store/Slices/usersSlice";


export default function LargeCardProfile({navigation, funcExit}) {
  const {avatar, mail, lastname, firstname, surname, phone, username, age, password} = useSelector(state => state.users.currentUser);
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

  const funcSave = async (user, selectedImage) => {
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


  const funcDeleteImage = () => {
    EditUser({user, token}).then(r => {
      dispatch(setAvatarForCurrentUser(""))
      setEditing(!isEditing);
    })
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
          avatar={avatar}
          stylesEditProfile={LargeStyles}
          surname={surname}
          username={username}
          phone={phone}
          mail={mail}
          OutputField={OutputField}
          CustomButton={CustomButton}
          funcCancel={funcCancel}
          firstname={firstname}
          lastname={lastname}
          age={age}
          password={password}
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