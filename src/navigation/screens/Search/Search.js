import React, {useEffect, useRef, useState} from "react";
import {View, StyleSheet, ScrollView, TextInput, Text, FlatList} from "react-native";
import {TabLocation} from "../../../components/SearchTabs/Tabs/TabLocation/TabLocation";
import {TabSwitch} from "../../../components/SearchTabs/Tabs/TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../../../components/SearchTabs/Tabs/TabCategoryEstate/TabCategoryEstate";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import TabInputCodeEstate from "../../../components/SearchTabs/Tabs/TabInputCodeEstate/TabInputCodeEstate";
import {AddressSuggestions} from "react-dadata";
import {getPlacesFromMap} from "../../../db/getData";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import SearchInputPlacesMap from "../../../components/SearchTabs/Tabs/TabLocation/SearchInputPlacesMap";


export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const modalRef = useRef(null);
  const [valuePlaces, setValuePlaces] = useState("");
  const [arrayPlaces, setArrayPlaces] = useState([]);
  const TYPE = "city";
  const testPlace =  [{
    bbox: [
      38.27981,
      46.7090465,
      38.2813642,
      46.710192
    ],
    geometry: {
      coordinates: [
        38.28049776161937,
        46.7096389
      ]
    },
    properties: {
      address_line1: "АО \"Ейскхлеб\"",
      address_line2: "улица Победы 127, АО \"Ейскхлеб\", Yeysk, Krasnodar Krai, Russia",
      city: "Yeysk",
      country: "Russia",
      country_code: "ru",
      county: "Yeysky District",
      datasource: {
        attribution: "© OpenStreetMap contributors",
        license: "Open Database License",
        sourcename: "openstreetmap",
        url: "https://www.openstreetmap.org/copyright"
      },
      formatted: "АО \"Ейскхлеб\", улица Победы 127, АО \"Ейскхлеб\", Yeysk, Krasnodar Krai, Russia",
      housenumber: "127",
      industrial: "bakery",
      lat: 46.7096389,
      lon: 38.28049776161937,
      municipality: "Ейское городское поселение",
      name: "АО \"Ейскхлеб\"",
      place_id: "51d260c459e72343405916bc8d72d55a4740f00102f901e2729c2f00000000c00201920317d090d09e2022d095d0b9d181d0bad185d0bbd0b5d0b122",
      rank: {
        confidence: 1,
        importance: 0.2000099999999999,
        match_type: "full_match"
      },
      region: "Southern Federal District",
      result_type: "amenity",
      state: "Krasnodar Krai",
      street: "улица Победы",
      suburb: "АО \"Ейскхлеб\"",
      timezone: {
        abbreviation_DST: "MSK",
        abbreviation_STD: "MSK",
        name: "Europe/Moscow",
        offset_DST: "+03:00",
        offset_DST_seconds: 10800,
        offset_STD: "+03:00",
        offset_STD_seconds: 10800
      }
    },
    type: "Feature"
  }]



      return (
    <View style={stylesSearch.container}>
      <ScrollView style={stylesSearch.scrollViewContainer}>
        <SearchInputPlacesMap />
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
  scrollViewContainer: {},

})