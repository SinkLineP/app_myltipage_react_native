import React, {useRef, useState} from "react";
import {View, StyleSheet, ScrollView, Text, TextInput} from "react-native";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import CategoriesContent from "./components/CategoriesContent/CategoriesContent";
import TabSearchMap from "../../../components/SearchTabs/Tabs/TabSearchMap/TabSearchMap";
import TabAdvancedSearch from "../../../components/SearchTabs/Tabs/TabAdvancedSearch/TabAdvancedSearch";


export default function Search({ navigation }) {
  const [currentItem, setCurrentItem] = useState({});
  const modalRefCategories = useRef(null);


  return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        <TabSearchMap navigation={navigation} />
        <TabAdvancedSearch modalRef={modalRefCategories} setCurrentItem={setCurrentItem} />
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