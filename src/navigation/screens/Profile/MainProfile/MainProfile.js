import React from "react"
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import CustomCard from "../../../../components/Card/CustomCard";
import ShowProfile from "./Tabs/ShowProfile";


export default function MainProfile({navigation}) {
  return (
    <>
      <ScrollView style={MainProfileStyles.container}>
        <CustomCard>
          <ShowProfile
            navigation={navigation}
          />
        </CustomCard>
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

