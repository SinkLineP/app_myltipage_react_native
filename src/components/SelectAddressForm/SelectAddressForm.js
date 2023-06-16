import React, {useEffect, useState} from "react";
import {View, Text, Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AntDesign} from "@expo/vector-icons";
import {
  setAddressStatus,
  setShowSettlements,
  setShowStreet,
  setStreetStatus
} from "../../store/Slices/searchAddressSlice";
import SearchInput from "../SearchTabs/SearchInput/SearchInput";


export default function SelectAddressForm({ navigation, isShowSettlements, typeLocation, setValueLocation, valueLocation, isShowStreet }) {
  const [region, setRegion] = useState({});
  const [settlementValue, setSettlementValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const dispatch = useDispatch();
  // redux store
  const addressStatusStore = useSelector(state => state.searchAddress.addressStatus);
  const streetStatusStore = useSelector(state => state.searchAddress.streetStatus);


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{
          paddingLeft: 15,
          paddingRight: 10
        }} onPress={() => {
          try {
            // console.log(typeLocation);
            if (typeLocation === "settlement") {
              if (addressStatusStore === "editing") {
                dispatch(setAddressStatus("saved"));
                dispatch(setShowSettlements(true));
              } else if (addressStatusStore === "deleted") {
                dispatch(setAddressStatus("empty"));
              }
            } else if (typeLocation === "street") {
              if (streetStatusStore === "editing") {
                dispatch(setStreetStatus("saved"));
                dispatch(setShowStreet(true));
              } else if (streetStatusStore === "deleted") {
                dispatch(setStreetStatus("empty"));
              }
            }
          } finally {
            navigation.goBack();
          }
        }}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
      )
    })
  })

  if (isShowSettlements === false || isShowStreet === false) {
    if (typeLocation === "settlement") {
      if (addressStatusStore === "empty" || addressStatusStore === "editing" || addressStatusStore === "deleted") {
        return <SearchInput
          setSearchInput={setValueLocation}
          searchInput={valueLocation}
          setRegion={setRegion}
          type={typeLocation}
          setSettlement={setSettlementValue}
          setStreet={setStreetValue}
        />
      }
    } else if (typeLocation === "street") {
      if (streetStatusStore === "empty" || streetStatusStore === "editing" || streetStatusStore === "deleted") {
        return <SearchInput
          setSearchInput={setValueLocation}
          searchInput={valueLocation}
          setRegion={setRegion}
          type={typeLocation}
          setSettlement={setSettlementValue}
          setStreet={setStreetValue}
        />
      }
    }
  }
}
