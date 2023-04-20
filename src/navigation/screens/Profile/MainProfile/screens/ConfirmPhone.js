import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function ConfirmPhone({navigation}) {
  return (
    <View style={stylesConfirmPhone.container}>
      <View>
        <Text onPress={() => {
          navigation.goBack()
        }}>Back</Text>
      </View>
      <Text>Confirm Phone</Text>
    </View>
  )
}

const stylesConfirmPhone = StyleSheet.create({
  container: {
    marginTop: 40
  }
})