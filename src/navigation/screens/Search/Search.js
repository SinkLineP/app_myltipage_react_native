import React, {useRef, useState} from "react";
import {View, StyleSheet, ScrollView, Text} from "react-native";
import {TabLocation} from "../../../components/SearchTabs/Tabs/TabLocation/TabLocation";
import {TabSwitch} from "../../../components/SearchTabs/Tabs/TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../../../components/SearchTabs/Tabs/TabCategoryEstate/TabCategoryEstate";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import TabInputCodeEstate from "../../../components/SearchTabs/Tabs/TabInputCodeEstate/TabInputCodeEstate";
import SearchInputPlacesMap from "../../../components/SearchTabs/Tabs/TabLocation/SearchInputPlacesMap";
import CategoriesContent from "./components/CategoriesContent/CategoriesContent";
import TabSearchMap from "../../../components/SearchTabs/Tabs/TabSearchMap/TabSearchMap";
import {useSelector} from "react-redux";


export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const modalRefCategories = useRef(null);
  const modalRefSearchLocation = useRef(null);


  return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        <TabSearchMap modalRef={modalRefSearchLocation} />
        <TabInputCodeEstate />
        <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
        <TabCategoryEstate setCurrentItem={setCurrentItem} modalRef={modalRefCategories} />
      </ScrollView>
      <PortalProvider>
        <BottomModalWindow modalRef={modalRefCategories}>
          {currentItem.length !== 0 ? (<CategoriesContent currentItem={currentItem} />) : ("") }
        </BottomModalWindow>
        <BottomModalWindow modalRef={modalRefSearchLocation}>
          <SearchInputPlacesMap />
          <View style={stylesSearch.containerMap}>
            <TabLocation title={"location"} iconColor={"tomato"} iconName={"location"} iconSize={24} />
          </View>
        </BottomModalWindow>
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
  scrollViewContainer: {},
  containerMap: {
    paddingHorizontal: 5.5,
    marginBottom: 15
  }
})