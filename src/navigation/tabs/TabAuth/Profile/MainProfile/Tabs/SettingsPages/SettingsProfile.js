import React from "react";
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import {CustomButton} from "../../../../../../../components/Profile/Buttons/CustomButton";
import CustomCard from "../../../../../../../components/Card/CustomCard";


export default function SettingsProfile({navigation}) {
  return (
    <ScrollView style={stylesSettingsProfile.container}>
      <CustomCard>
        <View style={stylesSettingsProfile.whiteSpace}>
          <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Редактирование профиля"} funcPress={() => {
            navigation.navigate(
              "EditProfile"
            )
          }} />
          <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Конфиденциальные данные"} funcPress={() => {
            navigation.navigate(
              "ConfidentialSettings"
            )
          }} />
        </View>
      </CustomCard>
    </ScrollView>
  )
}

const stylesSettingsProfile = StyleSheet.create({
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  whiteSpace: {
    flexDirection: "column",
    gap: 10
  }
})