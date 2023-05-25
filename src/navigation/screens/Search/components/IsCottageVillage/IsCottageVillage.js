import React from "react";
import {useSelector} from "react-redux";
import {StyleSheet, View} from "react-native";
import {CheckBoxEstate} from "../../../../../components/SearchTabs/CheckBox/CheckBoxEstate";


export const IsСottageVillage = ({currentItem, isCottage}) => {
  const allCategories = useSelector(state => state.categoryEstates.allCategories);
  const activeTab = useSelector(state => state.categoryEstates.activeTab);


  if (isCottage === true && currentItem.category_id === 1) {
    return allCategories.filter(element => element.parent_id === activeTab && element.slug === "kottedj").map((item) => (
      <View style={stylesIsСottageVillage.contentCheckBox} key={item.category_id}>
        <CheckBoxEstate item={item} />
      </View>
    ))
  } else if (isCottage === false && currentItem.category_id === 1) {
    return allCategories.filter(element => element.parent_id === activeTab && element.slug !== "kottedj").map((item) => (
      <View style={stylesIsСottageVillage.contentCheckBox} key={item.category_id}>
        <CheckBoxEstate item={item} />
      </View>
    ))
  } else {
    return allCategories.filter(element => element.parent_id === activeTab).map((item) => (
      <View style={stylesIsСottageVillage.contentCheckBox} key={item.category_id}>
        <CheckBoxEstate item={item} />
      </View>
    ))
  }
}

const stylesIsСottageVillage = StyleSheet.create({
  contentCheckBox: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
  }
})