import React, {useEffect, useState} from "react";
import {TextInput, View, Text} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import SearchInput from "../../../components/SearchTabs/SearchInput/SearchInput";
import {useDispatch, useSelector} from "react-redux";
import {setSettlements, setShowSettlements, setShowStreet, setStreet} from "../../../store/Slices/searchAddressSlice";
import {ShowSelectedAddress} from "./components/ShowSelectedAddress";


export default function SelectAddress({ route, navigation }) {
  const { typeLocation, textLocation } = route.params;
  const [valueLocation, setValueLocation] = useState("");
  const [region, setRegion] = useState({});
  const [settlementValue, setSettlementValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const dispatch = useDispatch();
  const isShowSettlements = useSelector(state => state.searchAddress.isShowSettlementsForm);
  const isShowStreet = useSelector(state => state.searchAddress.isShowStreetForm);


  return (
    <>
      <ShowSelectedAddress typeLocation={typeLocation} setValueLocation={setValueLocation} />

      {isShowSettlements === true && typeLocation === "settlement" || isShowStreet === true && typeLocation === "street" ? (
        <View>
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
              dispatch(setShowSettlements(false));
              dispatch(setSettlements(settlementValue));
            } else if (typeLocation === "street") {
              dispatch(setShowStreet(false));
              dispatch(setStreet(streetValue));
            }
          }}>
            Сохранить адрес
          </Text>
        </View>
      ) : ("")}
    </>
  )
}
