import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";


export const CheckBox = () => {
  const [isSelected, setSelection] = useState("");

  return (
    <View style={stylesCheckBox.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={stylesCheckBox.checkbox}
      />
      <Text style={stylesCheckBox.label}>Do you like React Native?</Text>
    </View>
  )
}


const stylesCheckBox = StyleSheet.create({
  checkboxContainer: {},
  checkbox: {},
  label: {}
})