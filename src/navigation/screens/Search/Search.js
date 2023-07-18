import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import TabLink from "../../tabs/TabLink/TabLink";


export default function Search({ navigation }) {
  return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        {/*<TabLink navigation={navigation} title={"Быстрый поиск по карте.."} iconName={"location-pin"} typeIcon={"entypo"} route={"TabLocation"} />*/}
        <TabLink navigation={navigation} title={"Расширенный поиск"} iconName={"home-search-outline"} typeIcon={"material"} route={"TabAdvancedSearch"} />
      </ScrollView>
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