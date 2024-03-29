import React from "react"
import {Pressable, Text, View} from "react-native";
import {ShowContentAutoSuggestions} from "./components/ShowContentAutoSuggestions";
import {useSelector} from "react-redux";


export default function RenderItemAutoSuggestions({
  searchResult,
  setRegion,
  setActiveLocation,
  setSearchInput,
  type,
  setSettlement,
  setStreet,
}) {
  return searchResult.map((item, index) => {
    if (type !== undefined && type === "settlement" && setSettlement !== undefined) {
      if (item.data.city_type_full === "город" && item.data.street_type_full === null || item.data.settlement_type_full === "поселок" && item.data.street_type_full === null) {
        return (
          <ShowContentAutoSuggestions
            type={type}
            item={item}
            setRegion={setRegion}
            setSearchInput={setSearchInput}
            setActiveLocation={setActiveLocation}
            index={index}
            setSettlement={setSettlement}
          />
        )
      }
    } else if (type !== undefined && type === "street" && setStreet !== undefined) {
      return (
        <ShowContentAutoSuggestions
          type={type}
          item={item}
          setRegion={setRegion}
          setSearchInput={setSearchInput}
          setActiveLocation={setActiveLocation}
          index={index}
          setStreet={setStreet}
        />
      )
    } else {
      return (
        <ShowContentAutoSuggestions
          index={index}
          item={item}
          setRegion={setRegion}
          setSearchInput={setSearchInput}
          setActiveLocation={setActiveLocation}
        />
      )
    }
  })
}