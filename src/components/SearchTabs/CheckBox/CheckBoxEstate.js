import React, {useState} from "react";
import {StyleSheet, Text} from "react-native";
import Checkbox from 'expo-checkbox';
import {useDispatch} from "react-redux";
import {editCategory} from "../../../store/Slices/categoryEstatesSlice";


export const CheckBoxEstate = ({item}) => {
  const [isSelectedEstates, setSelectedEstates] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Checkbox
        style={stylesCheckBox.checkbox}
        value={item.isActive === true ? item.isActive : isSelectedEstates}
        onValueChange={(value) => {
          dispatch(editCategory({
            id: item.id,
            category_id: item.category_id,
            parent_id: item.parent_id,
            title: item.title,
            slug: item.slug,
            created_at: item.created_at,
            updated_at: item.updated_at,
            isActive: value
          }))
          setSelectedEstates(value)
        }}
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