import React from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import ShowActiveText from "./components/ShowActiveText";
import {useSelector} from "react-redux";


export default function SearchAddress() {
  const settlementStore = useSelector(state => state.searchAddress.settlements);
  const streetStore = useSelector(state => state.searchAddress.street);


  return (
    <ContainerTab>
      <ShowActiveText locationTitle={"Населённый пункт"} defaultLocationTitle={"Выберите населённый пункт"} location={settlementStore} typeLocation={"settlement"} />
      {settlementStore !== "" ? (<ShowActiveText locationTitle={"Улица"} defaultLocationTitle={"Выберите улицу"} location={streetStore} typeLocation={"street"} />) : ("")}
    </ContainerTab>
  )
}