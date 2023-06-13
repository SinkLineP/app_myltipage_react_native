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



  const FormSearch = () => (
    <>
      {/*{*/}
      {/*  isShowSettlements === false && typeLocation === "settlement" && addressStatusStore === "empty"  ||*/}
      {/*  isShowSettlements === false && typeLocation === "street" ?*/}
      {/*(*/}
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
              console.log(valueLocation.trim(""));
              if (valueLocation !== "") {
                try {
                  dispatch(setShowSettlements(true));
                  dispatch(setSettlements(settlementValue));

                  //     if (streetStore !== "") {
                  //       dispatch(setStreet(""));
                  //       dispatch(setShowStreet(true));
                  //     }
                } finally {
                  dispatch(setAddressStatus("saved"));
                  // navigation.goBack()

                  // if (route.name !== "SelectAddress") {
                  //   console.log("is not equal")
                  // }
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
                  dispatch(setAddressStatus("saved"));
                  //     navigation.goBack()
                }
              }
            }
          }}>
            Сохранить адрес
          </Text>
        </View>
      {/*) : ("")}*/}
    </>
  )

  if (isShowSettlements === false) {
    if (typeLocation === "settlement") {
      if (addressStatusStore === "empty") {
        return <FormSearch />
      }
    } else if (typeLocation === "street") {
      return <FormSearch />
    }
  }
}
