import React from "react"
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import ShowProfile from "./Tabs/ShowProfile";
import {useSelector} from "react-redux";


export default function MainProfile({navigation}) {
  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <>
      <ScrollView style={MainProfileStyles.container}>
        <ShowProfile navigation={navigation} user={currentUser}/>
      </ScrollView>
    </>
  )
}

const MainProfileStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})



