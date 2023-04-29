import React, {useEffect, useRef, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {getCategoriesSearchEstate} from "../../../db/getData";
import {TabWithIcon} from "../../../components/SearchTabs/Tabs/TabWithIcon/TabWithIcon";
import {TabSwitch} from "../../../components/SearchTabs/Tabs/TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../../../components/SearchTabs/Tabs/TabCategoryEstate/TabCategoryEstate";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";


export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const modalRef = useRef(null);


  return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        <TabWithIcon title={"location"} iconColor={"tomato"} iconName={"location"} iconSize={24} />
        <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} />
        <TabCategoryEstate setCurrentItem={setCurrentItem} modalRef={modalRef} />
      </ScrollView>
      <PortalProvider>
        <BottomModalWindow currentItem={currentItem} modalRef={modalRef} />
      </PortalProvider>
    </View>
  )
}

const stylesSearch = StyleSheet.create({
  container: {
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    height: "100%",
  },
  scrollViewContainer: {
  }
})