import React from "react"
import {Pressable, Text, View} from "react-native";
import {ShowContentAutoSuggestions} from "./components/ShowContentAutoSuggestions";


export default function RenderItemAutoSuggestions({ searchResult, setRegion, setActiveLocation, setSearchInput, type }) {
  return searchResult.map((item, index) => {
    if (type !== undefined && type === "settlements") {
      if (item.data.city_type_full === "город" && item.data.street_type_full === null || item.data.settlement_type_full === "поселок" && item.data.street_type_full === null) {
        return <ShowContentAutoSuggestions item={item} setRegion={setRegion} setSearchInput={setSearchInput} setActiveLocation={setActiveLocation} index={index} />
      }
    } else if (type !== undefined && type == "street") {
      return (
        <View>
          <Text>street</Text>
        </View>
      )
    } else {
      return <ShowContentAutoSuggestions item={item} setRegion={setRegion} setSearchInput={setSearchInput} setActiveLocation={setActiveLocation} index={index} />
    }
  })
}