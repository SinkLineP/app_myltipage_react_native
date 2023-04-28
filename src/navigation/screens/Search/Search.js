import React, {useEffect, useRef, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {getCategoriesSearchEstate} from "../../../db/getData";
import {TabWithIcon} from "../../../components/SearchTabs/Tabs/TabWithIcon/TabWithIcon";
import {TabSwitch} from "../../../components/SearchTabs/Tabs/TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../../../components/SearchTabs/Tabs/TabCategoryEstate/TabCategoryEstate";


export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");


  return (
    <View style={stylesSearch.container}>
      <TabWithIcon title={"location"} iconColor={"tomato"} iconName={"location"} iconSize={24} />
      <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} />
      <TabCategoryEstate />
    </View>
  )
}

const stylesSearch = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    height: "100%"
  }
})