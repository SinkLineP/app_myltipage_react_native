import React, {useEffect, useState} from "react";
import {TextInput, View, Text} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import SearchInput from "../../../components/SearchTabs/SearchInput/SearchInput";
import {useDispatch, useSelector} from "react-redux";
import {setSettlements, setStreet} from "../../../store/Slices/searchAddressSlice";


export default function SelectAddress({ route, navigation }) {
  const { typeLocation, textLocation } = route.params;
  const [valueLocation, setValueLocation] = useState("");
  const [region, setRegion] = useState({});
  const [settlementValue, setSettlementValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const dispatch = useDispatch();
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);


  useEffect(() => {
    console.log(settlementValue);
    console.log(streetValue);
  })

  const ShowSelectedAddress = ({ type }) => {
    if (type === "settlement") {
      if (settlementStore !== "") {
        return (
          <ContainerTab>
            <Text style={{ color: "#323232", fontWeight: "bold" }}>Выбранный адрес: </Text>
            <Text style={{ color: "#323232", fontWeight: "bold" }}>{settlementStore}</Text>
          </ContainerTab>
        )
      }
    } else if (type === "street") {
      if (streetStore !== "") {
        return (
          <ContainerTab>
            <Text style={{ color: "#323232", fontWeight: "bold" }}>Выбранная улица: </Text>
            <Text style={{ color: "#323232", fontWeight: "bold" }}>{streetStore}</Text>
          </ContainerTab>
        )
      }
    }
  }


  return (
    <>
      <ShowSelectedAddress type={typeLocation} />
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
        console.log(settlementValue);
        console.log(streetValue);

        if (typeLocation === "settlement") {
          dispatch(setSettlements(settlementValue));
        } else if (typeLocation === "street") {
          dispatch(setStreet(streetValue));
        }
      }}>Сохранить адрес</Text>
    </>
  )
}