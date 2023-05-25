import React, {useRef, useState} from "react";
import {View, StyleSheet, ScrollView, Text, TextInput, Pressable} from "react-native";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import CategoriesContent from "./components/CategoriesContent/CategoriesContent";
import TabAdvancedSearch from "../../../components/SearchTabs/Tabs/TabAdvancedSearch/TabAdvancedSearch";
import TabLink from "../../../components/SearchTabs/Tabs/TabLink/TabLink";


export default function Search({ navigation }) {
  const [currentItem, setCurrentItem] = useState({});
  const modalRefCategories = useRef(null);


  return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        <TabLink navigation={navigation} title={"Быстрый поиск по карте.."} iconName={"location-pin"} typeIcon={"entypo"} route={"TabLocation"} />
        <TabLink navigation={navigation} title={"Расширенный поиск"} iconName={"home-search-outline"} typeIcon={"material"} route={"TabLocation"} />
      </ScrollView>
      <PortalProvider>
        <BottomModalWindow modalRef={modalRefCategories}>
          {currentItem.length !== 0 ? (<CategoriesContent currentItem={currentItem} />) : ("") }
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
    marginBottom: 15,
  }
})