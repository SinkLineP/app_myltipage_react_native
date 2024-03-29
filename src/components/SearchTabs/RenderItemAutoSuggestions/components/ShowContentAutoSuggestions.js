import React from "react";
import {Pressable, Text} from "react-native";
import {useDispatch} from "react-redux";
import {setSettlements, setStreet} from "../../../../store/Slices/searchAddressSlice";


export const ShowContentAutoSuggestions = ({ item, setRegion, setActiveLocation, setSearchInput, index, type, setSettlement, setStreet }) => {
  return (
    <Pressable key={index} onPress={() => {
      const latitude = item.data.geo_lat;
      const longitude = item.data.geo_lon;

      if (latitude !== null && longitude !== null) {
        if (typeof setRegion !== undefined) {

          if (setSettlement !== undefined) {
            setSettlement(item.unrestricted_value);
          } else if (setStreet !== undefined) {
            setStreet(item.unrestricted_value);
          }

          setRegion({
            latitude: Number(latitude),
            longitude: Number(longitude),
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
          })
        }

        setActiveLocation(item);
        setSearchInput(item.value);
      }

      setSearchInput(item.value);
    }} style={{
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderTopWidth: index === 0 ? 1 : 0,
      borderColor: "#d2d2d2",
    }}>
      <Text style={{
        color: "#323232",
      }}>{item.value}</Text>
    </Pressable>
  )
}