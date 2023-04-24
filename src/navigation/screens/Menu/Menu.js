import React from "react";
import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {removeCurrentUser, switchAuth} from "../../../store/Slices/usersSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderLeft from "../../../shared/HeaderLeft/HeaderLeft";


export default function Menu({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);
  const isAuth = useSelector(state => state.users.isAuth);
  const dispatch = useDispatch();
  const exitProfile = async () => {
    dispatch(switchAuth());
    dispatch(removeCurrentUser());
    try {
      await AsyncStorage.removeItem("token")
    } catch (e) {
      console.log(e)
    }
    navigation.navigate(
      "Authorization"
    )
  }

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: (props) => (
  //       <HeaderLeft title={"Меню"} titleColor={"black"} {...props} />
  //     ),
  //     headerRight: () => (
  //       <Pressable style={stylesMenu.containerSettings} onPress={() => navigation.navigate("MenuSettings")}>
  //         <Image style={stylesMenu.settingsIcon} source={require("./Icons/settings-icon.png")} />
  //       </Pressable>
  //     )
  //   });
  // }, [navigation]);

  return (
    <View style={stylesMenu.container}>
      <View style={stylesMenu.containerMenu}>
        <View style={stylesMenu.buttonField}>
          <Text style={stylesMenu.button}></Text>
        </View>
        {isAuth === true ? (
          <View style={stylesMenu.buttonField}>
            <Text style={stylesMenu.buttonExit} onPress={() => exitProfile()}>Выйти</Text>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  )
}

const stylesMenu = StyleSheet.create({
  containerMenu: {
    backgroundColor: "#fff",
    height: "auto",
  },
  buttonField: {

  },
  button: {

  },
  buttonExit: {
    backgroundColor: "#c74242",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 24
  },
  container: {
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
  },
  settingsIcon: {
    width: 30,
    height: 30
  },
  containerSettings: {
    marginRight: 10
  }
})