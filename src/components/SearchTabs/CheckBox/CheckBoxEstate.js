import React, {useState} from "react";
import {StyleSheet, Text} from "react-native";
import Checkbox from 'expo-checkbox';


export const CheckBoxEstate = ({item, setEstate}) => {
  const [isSelectedEstates, setSelectedEstates] = useState(false);

  const containObjIntoArray = (array, obj) => {
    if (array !== undefined) {
      array.map((element) => {
        if (element.category_id !== obj.category_id) {
          return ([...array, {
            id: obj.id,
            category_id: obj.category_id,
            parent_id: obj.parent_id,
            title: obj.title,
            slug: obj.slug,
            created_at: obj.created_at,
            updated_at: obj.updated_at
          }])
        } else {
          console.log("this obj contained!")
        }
      })
    }
  }

  return (
    <>
      <Checkbox
        style={stylesCheckBox.checkbox}
        value={isSelectedEstates}
        onValueChange={(value) => {
          setSelectedEstates(value)
          setEstate(item);
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