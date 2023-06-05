import React, {useState} from "react";
import {TextInput, View, Text} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import SearchInput from "../../../components/SearchTabs/SearchInput/SearchInput";
import {useDispatch} from "react-redux";
import {setSettlements, setStreet} from "../../../store/Slices/searchAddressSlice";


export default function SelectAddress({ route, navigation }) {
  const { typeLocation, textLocation } = route.params;
  const [valueLocation, setValueLocation] = useState("");
  const [region, setRegion] = useState({});
  const [settlementValue, setSettlementValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const dispatch = useDispatch();

  if (settlementValue !== "") {
    console.log(settlementValue);
  }

  return (
    <>
      <SearchInput
        setSearchInput={setValueLocation}
        searchInput={valueLocation}
        setRegion={setRegion}
        type={typeLocation}
        setSettlement={setSettlementValue}
        setStreet={setStreetValue}
      />
      <Text style={{
        backgroundColor: "#82c874",
        paddingVertical: 10,
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff"
      }} onPress={() => {
        if (typeLocation === "settlement") {
          dispatch(setSettlements(settlementValue));
        } else if (typeLocation === "street") {
          dispatch(setStreet(streetValue));
        }
      }}>Сохранить адрес</Text>
    </>
  )
}