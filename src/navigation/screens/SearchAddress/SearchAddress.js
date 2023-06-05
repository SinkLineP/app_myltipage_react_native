import React from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import ShowActiveText from "./components/ShowActiveText";


export default function SearchAddress() {
  const settlement = "";
  const street = "";


  return (
    <ContainerTab>
      <ShowActiveText locationTitle={"Населённый пункт"} defaultLocationTitle={"Выберите населённый пункт"} location={settlement} typeLocation={"settlement"} />
      <ShowActiveText locationTitle={"Улица"} defaultLocationTitle={"Выберите улицу"} location={street} typeLocation={"street"} />
    </ContainerTab>
  )
}