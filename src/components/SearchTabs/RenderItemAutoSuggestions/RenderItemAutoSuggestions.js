import React from "react"
import {Pressable, Text} from "react-native";


export default function RenderItemAutoSuggestions({ searchResult, setRegion, setActiveLocation, setSearchInput }) {
  return searchResult.map((item, index) => {
    return (
      <Pressable onPress={() => {
        const latitude = item.data.geo_lat;
        const longitude = item.data.geo_lon;

        if (latitude !== null && longitude !== null) {
          setRegion({
            latitude: Number(latitude),
            longitude: Number(longitude),
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
          })

          setActiveLocation(item);
          setSearchInput(item.value);
        }

        setSearchInput(item.value);
      }} style={{
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderTopWidth: index === 0 ? 1 : 0,
        borderColor: "#d2d2d2",
      }} key={index}>
        <Text style={{
          color: "#323232",
        }}>{item.value}</Text>
      </Pressable>
    )
  })
}