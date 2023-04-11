import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomCard from "../../../../../../components/Card/CustomCard";
import {CustomButton} from "../../../../../../components/Profile/Buttons/CustomButton";


export default function ConfidentialSettings({navigation}) {

  return (
    <CustomCard>
      <View style={stylesConfidentialSettings.whiteSpace}>
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Изменение почты"} funcPress={() => {
          navigation.navigate(
            "EditProfile"
          )
        }} />
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Изменение пароля"} funcPress={() => {
          navigation.navigate(
            "EditProfile"
          )
        }} />
        <CustomButton colorBG={"#13bfd4"} color={"white"} titleButton={"Изменение телефона"} funcPress={() => {
          navigation.navigate(
            "EditProfile"
          )
        }} />
      </View>
    </CustomCard>
  )
}


const stylesConfidentialSettings = StyleSheet.create({
  whiteSpace: {
    flexDirection: "column",
    gap: 10
  }
})