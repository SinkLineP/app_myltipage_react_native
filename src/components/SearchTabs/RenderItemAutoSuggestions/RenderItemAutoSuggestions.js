import React from "react"
import {Pressable, Text, View} from "react-native";
import {ShowContentAutoSuggestions} from "./components/ShowContentAutoSuggestions";


export default function RenderItemAutoSuggestions({ searchResult, setRegion, setActiveLocation, setSearchInput, type }) {
  return searchResult.map((item, index) => {
    if (type !== undefined && type === "settlement") {
      if (item.data.city_type_full === "город" && item.data.street_type_full === null || item.data.settlement_type_full === "поселок" && item.data.street_type_full === null) {
        return (
          <ShowContentAutoSuggestions type={type} item={item} setRegion={setRegion} setSearchInput={setSearchInput} setActiveLocation={setActiveLocation} index={index} />
        )
      }
    } else if (type !== undefined && type === "street") {
      return (
        <ShowContentAutoSuggestions type={type} item={item} setRegion={setRegion} setSearchInput={setSearchInput} setActiveLocation={setActiveLocation} index={index} />
      )
    } else {
      return (
        <ShowContentAutoSuggestions index={index} item={item} setRegion={setRegion} setSearchInput={setSearchInput} setActiveLocation={setActiveLocation} />
      )
    }
  })
}