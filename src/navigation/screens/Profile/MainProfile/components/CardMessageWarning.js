import React from "react";
import {StyleSheet, View} from "react-native";
import GoBackNavigation from "../../../Authorization/components/GoBackNavigation/GoBackNavigation";


export const CardMessageWarning = ({children, navigation}) => {
  return (
    <View style={stylesCardMessageWarning.container}>
      <GoBackNavigation navigation={navigation} title={"Вернуться"} />
      <View style={stylesCardMessageWarning.containerInput}>
        {children}
      </View>
    </View>
  )
}


const stylesCardMessageWarning = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "98%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  containerInput: {
    marginTop: 15
  }
})