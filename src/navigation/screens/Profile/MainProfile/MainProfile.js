import React from "react"
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import ShowProfile from "./Tabs/ShowProfile";


export default function MainProfile({navigation}) {
  return (
    <>
      <ScrollView style={MainProfileStyles.container}>
        <ShowProfile navigation={navigation} />
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


