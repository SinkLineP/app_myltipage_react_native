import React from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import ShowActiveText from "./components/ShowActiveText";


export default function SearchAddress() {
  const settlement = "";
  const district = "";
  const street = "";


  return (
    <ContainerTab>
      <ShowActiveText locationTitle={"Населённый пункт"} defaultLocationTitle={"Выберите населённый пункт"} location={settlement} />
      <ShowActiveText locationTitle={"Район"} defaultLocationTitle={"Выберите район"} location={district} />
      <ShowActiveText locationTitle={"Улица"} defaultLocationTitle={"Выберите улицу"} location={street} />
    </ContainerTab>
  )
}