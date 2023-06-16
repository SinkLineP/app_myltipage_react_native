import React from "react"
import {ShowContentAutoSuggestions} from "./components/ShowContentAutoSuggestions";
import ContainerTab from "../ContainerTab/ContainerTab";
import {Text, View} from "react-native";


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
      if (item.data.city_type_full !== null && item.data.street_type_full === null || item.data.settlement_type_full !== null && item.data.street_type_full === null) {
        return (
          <View key={index}>
            <ShowContentAutoSuggestions
              type={type}
              item={item}
              setRegion={setRegion}
              setSearchInput={setSearchInput}
              setActiveLocation={setActiveLocation}
              setSettlement={setSettlement}
            />
          </View>
        )
      }
    } else if (type !== undefined && type === "street" && setStreet !== undefined) {
      if (item.data.settlement_type_full !== null && item.data.street_type_full !== null || item.data.city_type_full !== null && item.data.street_type_full !== null) {
        return (
          <View key={index}>
            <ShowContentAutoSuggestions
              type={type}
              item={item}
              setRegion={setRegion}
              setSearchInput={setSearchInput}
              setActiveLocation={setActiveLocation}
              index={index}
              setStreet={setStreet}
            />
          </View>
        )
      }
    }
  });
}