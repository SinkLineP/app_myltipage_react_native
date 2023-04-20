import React from "react";
import {StyleSheet, Text, View} from "react-native";
import GoBackNavigation from "../../../Authorization/components/GoBackNavigation/GoBackNavigation";



export default function ConfirmEmail({navigation}) {
  return (
    <View style={stylesConfirmEmail.container}>
      <GoBackNavigation navigation={navigation} title={"Вернуться"} />
      <View>

      </View>
    </View>
  )
}

const stylesConfirmEmail = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  }
})