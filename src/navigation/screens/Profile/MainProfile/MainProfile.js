import React from "react"
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import CardProfile from "../../../../components/Profile/CardProfile/CardProfile";
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
      <ScrollView style={MainProfileStyles.container}>
        <CardProfile navigation={navigation} funcExit={exitProfile} />
      </ScrollView>
    </>
  )
}

const MainProfileStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

