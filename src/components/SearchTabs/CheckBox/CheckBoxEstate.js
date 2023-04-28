import React, {useState} from "react";
import {StyleSheet, Text} from "react-native";
import Checkbox from 'expo-checkbox';


export const CheckBoxEstate = ({item}) => {
  const [isSelectedEstates, setSelectedEstates] = useState(false);

  return (
    <>
      <Checkbox
        style={stylesCheckBox.checkbox}
        value={isSelectedEstates}
        onValueChange={(value) => {
          setSelectedEstates(value)
        }}
        color={isSelectedEstates ? '#4630EB' : undefined}
      />
      <Text style={stylesCheckBox.label}>{item.title}</Text>
    </>
  )
}


const stylesCheckBox = StyleSheet.create({
  checkboxContainer: {},
  checkbox: {
    marginBottom: 11
  },
  label: {
    paddingLeft: 10
  }
})