import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../ContainerTab/ContainerTab";
import RenderItemAutoSuggestions from "../RenderItemAutoSuggestions/RenderItemAutoSuggestions";
import ShowAndHide from "../ShowAndHide/ShowAndHide";
import {setAddressStatus, setSettlementsStore, setShowSettlements} from "../../../store/Slices/searchAddressSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";


export default function SearchInput({
  searchInput,
  setSearchInput,
  setRegion,
  type,
  setStreet,
  setSettlement,
}) {
  const limitResulItems = 5;
  const [activeLocation, setActiveLocation] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);
  const dispatch = useDispatch();
  const addressStatusStore = useSelector(state => state.searchAddress.addressStatus);
  const navigation = useNavigation();
  const streetStatusStore = useSelector(state => state.searchAddress.streetStatus);


  const autoSuggestions = (query) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "900a2e145ea5b6e72207aa3fe72d2df99e3b7a7d";

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => setSearchResult(result.suggestions.slice(0, limitResulItems)))
      // .catch(error => console.log("error", error));
  }


  useEffect(() => {
    if (settlementStore !== "" && addressStatusStore === "editing") {
      setSearchInput(settlementStore);
    }

    if (streetStore !== "" && streetStatusStore === "editing") {
      setSearchInput(streetStore)
    }
  }, [])

  return (
    <>
      <ContainerTab>
        <View style={stylesSearchInput.containerSearchInput}>
          <TextInput
            style={stylesSearchInput.searchInput}
            value={searchInput}
            onChangeText={(val) => {
              if (val.length === 0) {
                setActiveLocation({})
              }

              if (type === "street") {
                autoSuggestions(`${settlementStore} ${val}`)
              } else {
                autoSuggestions(val)
              }

              console.log(val);

              setSearchInput(val)
            }}
            placeholder={"Введите адрес..."}
          />
          <Text style={stylesSearchInput.clearSearchInput} onPress={() => {
            setSearchInput("")
            setSearchResult([])
            setActiveLocation({})

            if (setSettlement !== undefined) { // type: settlement
              setSettlement("");
              setStreet("");
            } else { // type: street
              setStreet("");
            }
          }}>{searchInput !== "" ? "x" : ""}</Text>
        </View>
      </ContainerTab>

      <ShowAndHide activeLocation={activeLocation} searchInput={searchInput} searchResult={searchResult}>
        <RenderItemAutoSuggestions
          searchResult={searchResult}
          setActiveLocation={setActiveLocation}
          setRegion={setRegion}
          setSearchInput={setSearchInput}
          type={type}
          setSettlement={setSettlement}
          setStreet={setStreet}
        />
      </ShowAndHide>
    </>
  )
}


const stylesSearchInput = StyleSheet.create({
  clearSearchInput: {
    fontSize: 24,
    fontWeight: "bold",
    color: "tomato",
    paddingHorizontal: 10,
    paddingVertical: 5,
    bottom: 3,
  },
  containerSearchInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchInput: {
    height: 50,
    width: "90%",
    fontSize: 16
  },
})