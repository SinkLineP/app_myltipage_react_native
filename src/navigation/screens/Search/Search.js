import React, {useRef, useState} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {TabLocation} from "../../../components/SearchTabs/Tabs/TabLocation/TabLocation";
import {TabSwitch} from "../../../components/SearchTabs/Tabs/TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../../../components/SearchTabs/Tabs/TabCategoryEstate/TabCategoryEstate";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import TabInputCodeEstate from "../../../components/SearchTabs/Tabs/TabInputCodeEstate/TabInputCodeEstate";


export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const modalRef = useRef(null);


  return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        <TabLocation title={"location"} iconColor={"tomato"} iconName={"location"} iconSize={24} />
        <TabInputCodeEstate />
        <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
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
    paddingLeft: 5,
    paddingRight: 5,
    height: "100%",
  },
  scrollViewContainer: {}
})