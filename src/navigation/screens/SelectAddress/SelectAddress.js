import React, {useState} from "react";
import {TextInput, View} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import SearchInput from "../../../components/SearchTabs/SearchInput/SearchInput";


export default function SelectAddress({ route, navigation }) {
  const { typeLocation, textLocation } = route.params;
  const [valueLocation, setValueLocation] = useState("");
  const [region, setRegion] = useState({});

  // console.log(region);
  // console.log(valueLocation);

  return (
    <>
      <SearchInput setSearchInput={setValueLocation} searchInput={valueLocation} setRegion={setRegion} type={"settlements"} />
      {/*<TextInput*/}
      {/*  value={valueLocation}*/}
      {/*  onChangeText={(value) => setValueLocation(value)}*/}
      {/*  placeholder={textLocation}*/}
      {/*/>*/}
    </>
  )
}