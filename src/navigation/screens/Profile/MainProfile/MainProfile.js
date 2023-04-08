import React from "react"
import {View} from "react-native";
import LargeCardProfile from "../../../../components/Profile/CardProfile/LargeCardProfile";
import {useDispatch} from "react-redux";
import {removeCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function MainProfile({navigation}) {
  const dispatch = useDispatch();

  const exitProfile = async () => {
    dispatch(switchAuth());
    dispatch(removeCurrentUser);
    try {
      await AsyncStorage.removeItem("token")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <View>
        <LargeCardProfile navigation={navigation} funcExit={exitProfile} />
      </View>
    </>
  )
}

