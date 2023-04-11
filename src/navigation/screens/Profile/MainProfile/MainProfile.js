import React from "react"
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import CustomCard from "../../../../components/Card/CustomCard";
import ShowProfile from "./Tabs/ShowProfile";
import FriendlyTab from "./Tabs/FriendlyTab";


export default function MainProfile({navigation}) {
  return (
    <>
      <ScrollView style={MainProfileStyles.container}>
        <ShowProfile navigation={navigation} />
        <FriendlyTab navigation={navigation} />
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

