import React, {useRef, useState} from "react";
import TabInputCodeEstate from "../TabInputCodeEstate/TabInputCodeEstate";
import {TabSwitch} from "../TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../TabCategoryEstate/TabCategoryEstate";


export default function TabAdvancedSearch({ setCurrentItem, modalRef }) {
  const [selectedSwitch, setSelectedSwitch] = useState("");


  return (
    <>
      <TabInputCodeEstate />
      <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
      <TabCategoryEstate setCurrentItem={setCurrentItem} modalRef={modalRef} />
    </>
  )
}