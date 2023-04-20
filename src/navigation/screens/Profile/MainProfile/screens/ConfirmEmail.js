import React from "react";
import {StyleSheet, View} from "react-native";
import GoBackNavigation from "../../../Authorization/components/GoBackNavigation/GoBackNavigation";
import ButtonSendCode from "../../../Authorization/components/ButtonSendCode/ButtonSendCode";

const funcSendCode = () => {
  console.log("send mail code!")
}

export default function ConfirmEmail({navigation}) {
  return (
    <View style={stylesConfirmEmail.container}>
      <GoBackNavigation navigation={navigation} title={"Вернуться"} />
      <View style={stylesConfirmEmail.containerInput}>
        {/*<CustomTextInput onChangeText={() => {}} placeholder={""} value={""} />*/}
        <ButtonSendCode funcSendCode={() => funcSendCode()} />
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