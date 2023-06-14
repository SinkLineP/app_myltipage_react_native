import React from "react";
import {Pressable, Text} from "react-native";
import {useDispatch} from "react-redux";
import {
  setAddressStatus,
  setSettlements,
  setShowSettlements,
  setShowStreet,
  setStreetStore,
  setStreetStatus
} from "../../../../store/Slices/searchAddressSlice";
import {useNavigation} from "@react-navigation/native";


export const ShowContentAutoSuggestions = ({ item, setRegion, setActiveLocation, setSearchInput, index, type, setSettlement, setStreet }) => {
  const dispatch = useDispatch();

  const setStoreValue = (value, type) => {
    if (type === "settlement") {
      try {
        dispatch(setShowSettlements(true));
        dispatch(setSettlements(value));
      } finally {
        dispatch(setAddressStatus("saved"));
      }
    } else if (type === "street") {
      try {
        dispatch(setShowStreet(true));
        dispatch(setStreetStore(value));
      } finally {
        dispatch(setStreetStatus("saved"));
      }
    }
  }

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
        setStoreValue(item.value, type)
      }

      setStoreValue(item.value, type)
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