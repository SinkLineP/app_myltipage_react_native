import React, {useEffect, useState} from "react";
import {View, Text, Pressable} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AntDesign} from "@expo/vector-icons";
import {
  setAddressStatus,
  setSettlements,
  setShowSettlements
} from "../../store/Slices/searchAddressSlice";
import SearchInput from "../SearchTabs/SearchInput/SearchInput";


export default function SelectAddressForm({ navigation, isShowSettlements, typeLocation, setValueLocation, valueLocation }) {
  const [region, setRegion] = useState({});
  const [settlementValue, setSettlementValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const dispatch = useDispatch();
  // redux store
  const addressStatusStore = useSelector(state => state.searchAddress.addressStatus);


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{
          paddingLeft: 15,
          paddingRight: 10
        }} onPress={() => {
          try {
            if (addressStatusStore === "editing") {
              dispatch(setAddressStatus("saved"));
              dispatch(setShowSettlements(true));
            } else if (addressStatusStore === "deleted") {
              dispatch(setAddressStatus("empty"));
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

  if (isShowSettlements === false) {
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
      return ""
    }
  }
}
