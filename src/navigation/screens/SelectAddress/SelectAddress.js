import React, {useEffect, useState} from "react";
import {TextInput, View, Text} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import SearchInput from "../../../components/SearchTabs/SearchInput/SearchInput";
import {useDispatch, useSelector} from "react-redux";
import {setSettlements, setShowSettlements, setShowStreet, setStreet} from "../../../store/Slices/searchAddressSlice";
import {ShowSelectedAddress} from "./components/ShowSelectedAddress";


export default function SelectAddress({ route, navigation }) {
  const { typeLocation } = route.params;
  const [valueLocation, setValueLocation] = useState("");
  const [region, setRegion] = useState({});
  const [settlementValue, setSettlementValue] = useState("");
  const [streetValue, setStreetValue] = useState("");
  const dispatch = useDispatch();
  // redux store
  const isShowSettlements = useSelector(state => state.searchAddress.isShowSettlementsForm);
  const isShowStreet = useSelector(state => state.searchAddress.isShowStreetForm);
  const streetStore = useSelector(state => state.searchAddress.street);
  const settlementStore = useSelector(state => state.searchAddress.settlements);



  return (
    <>
      <ShowSelectedAddress
        typeLocation={typeLocation}
        setValueLocation={setValueLocation}
        valueLocation={valueLocation}
        isShowSettlements={isShowSettlements}
      />

      {isShowSettlements === false && typeLocation === "settlement" || isShowStreet === false && typeLocation === "street" ? (
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
            backgroundColor: valueLocation !== "" ? "#82c874" : "#bee6b3",
            paddingVertical: 10,
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff"
          }} onPress={() => {
            if (typeLocation === "settlement") {
              console.log("[LOG][Settlement group][MESSAGE: type_location 'settlement' ]");

              if (valueLocation !== "") {
                console.log("[LOG][Settlement group][MESSAGE: value location is not equals, empty. ]");

                try {
                  console.log("[LOG][Settlement group][MESSAGE: start 'try'. ]")
                  console.log(`[LOG][Settlement group][MESSAGE: dispatch(setShowSettlements(true)). ` + "Current store value: " + isShowSettlements + " ]");
                  console.log("[LOG][Settlement group][MESSAGE: dispatch(setSettlements(settlementValue)): " + `${settlementStore === "" ? '"Empty"' : settlementStore}` + "; SettlementValue: " + settlementValue + ". ]");
                  dispatch(setShowSettlements(true));
                  dispatch(setSettlements(settlementValue));

                  //     if (streetStore !== "") {
                  //       dispatch(setStreet(""));
                  //       dispatch(setShowStreet(true));
                  //     }
                } finally {
                  console.log("[LOG][Settlement group][MESSAGE: 'finally' ]")
                  //     navigation.goBack()
                }
              }
            } else if (typeLocation === "street") {
              console.log("type_location 'street'");

              if (valueLocation !== "") {
                console.log("[Street group] - value location is not equals, empty.");
                try {
                  console.log("[Street group] - start 'try'.")
                  //     dispatch(setShowStreet(false));
                  //     dispatch(setStreet(streetValue));
                } finally {
                  console.log("[Street group] - 'finally'")
                  //     navigation.goBack()
                }
              }
            }
          }}>
            Сохранить адрес
          </Text>
        </View>
      ) : ("")}
    </>
  )
}
