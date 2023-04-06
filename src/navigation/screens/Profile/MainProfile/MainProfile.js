import React from "react"
import {View} from "react-native";
import LargeCardProfile from "../../../../components/Profile/CardProfile/LargeCardProfile";
import {useDispatch} from "react-redux";
import {removeCurrentUser, switchAuth} from "../../../../store/Slices/usersSlice";


export default function MainProfile({navigation}) {
  const dispatch = useDispatch();

  const exitProfile = () => {
    dispatch(switchAuth());
    dispatch(removeCurrentUser);
  }

  return (
    <>
      <View>
        <LargeCardProfile navigation={navigation} funcExit={exitProfile} />
      </View>
    </>
  )
}

