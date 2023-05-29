import React, {useRef, useState} from "react";
import TabInputCodeEstate from "../TabInputCodeEstate/TabInputCodeEstate";
import {TabSwitch} from "../TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../TabCategoryEstate/TabCategoryEstate";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";
import CategoriesContent from "../../../../navigation/screens/Search/components/CategoriesContent/CategoriesContent";
import {PortalProvider} from "@gorhom/portal";
import TabPrice from "../TabPrice/TabPrice";


export default function TabAdvancedSearch() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const modalRefCategories = useRef(null);


  return (
    <>
      <TabInputCodeEstate />
      <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
      <TabPrice />
      <TabCategoryEstate setCurrentItem={setCurrentItem} modalRef={modalRefCategories} />
      <PortalProvider>
        <BottomModalWindow modalRef={modalRefCategories}>
          {currentItem.length !== 0 ? (<CategoriesContent currentItem={currentItem} />) : ("") }
        </BottomModalWindow>
      </PortalProvider>
    </>
  )
}