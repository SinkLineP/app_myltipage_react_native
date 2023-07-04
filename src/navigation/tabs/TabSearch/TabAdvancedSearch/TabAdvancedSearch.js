import React, {useEffect, useRef, useState} from "react";
import TabInputCodeEstate from "./components/TabInputCodeEstate/TabInputCodeEstate";
import {TabSwitch} from "./components/TabSwitch/TabSwitch";
import {TabCategoryEstate} from "./components/TabCategoryEstate/TabCategoryEstate";
import {PortalProvider} from "@gorhom/portal";
import TabPrice from "./components/TabPrice/TabPrice";
import {ScrollView, StyleSheet, Text} from "react-native";
import TabAddress from "./components/TabAddress/TabAddress";
import {TabArea} from "./components/TabArea/TabArea";
import TabFloors from "./components/TabFloors/TabFloors";
import TabObjectInfo from "./components/TabObjectInfo/TabObjectInfo";
import TabExchange from "./components/TabExchange/TabExchange";
import TabDocs from "./components/TabDocs/TabDocs";
import TabRent from "./components/TabRent/TabRent";
import ContainerTab from "../../../../components/SearchTabs/ContainerTab/ContainerTab";
import ButtonShowAllAds from "../../../../components/ButtonShowAllAds/ButtonShowAllAds";
import {BottomModalWindow} from "../../../../components/BottomModalWindow/BottomModalWindow";
import ModalCategories from "../../../../components/ModalComponents/ModalCategories/ModalCategories";
import ModalCountRooms from "../../../../components/ModalComponents/ModalCountRooms/ModalCountRooms";
import ModalRent from "../../../../components/ModalComponents/ModalRent/ModalRent";


export default function TabAdvancedSearch() {
  const [selectedSwitch, setSelectedSwitch] = useState(1);
  const [currentItem, setCurrentItem] = useState({});
  const [range, setRange] = useState(1);
  const [isStudio, setIsStudio] = useState(false);
  const [codeValues, setCodeValues] = useState("");
  const [returnType, setReturnType] = useState("");
  const modalRefCategories = useRef(null);
  const modalCountRoomsRef = useRef(null);
  const modalReturnTypeRef = useRef(null);

  // useEffect(() => {
  //   // give code value
  //   if (codeValues !== undefined && codeValues.length === 9 || codeValues !== "" && codeValues.length === 9) {
  //     console.log(codeValues);
  //   }
  //
  //   //give selected switch
  //   if (selectedSwitch === 1) {
  //     console.log("buy");
  //   } else if (selectedSwitch === 2) {
  //     console.log("rent");
  //   }
  // })


  return (
    <>
      <ScrollView>
        <TabInputCodeEstate setCodeValues={setCodeValues} codeValues={codeValues} />
        <ContainerTab>
          <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
          {selectedSwitch === 2 ? <TabRent modalRef={modalReturnTypeRef} returnType={returnType} setReturnType={setReturnType} /> : ""}
        </ContainerTab>
        <TabPrice modalRef={modalCountRoomsRef} isStudio={isStudio} range={range} setIsStudio={setIsStudio} setRange={setRange} />
        <TabCategoryEstate setCurrentItem={setCurrentItem} modalRef={modalRefCategories} />
        <TabAddress />
        <TabArea />
        <TabFloors />
        <TabObjectInfo />
        <TabExchange />
        <TabDocs />
      </ScrollView>

      <ButtonShowAllAds />

      <PortalProvider>
        <BottomModalWindow modalRef={modalRefCategories}>
          <ModalCategories currentItem={currentItem} />
        </BottomModalWindow>
      </PortalProvider>
      <PortalProvider>
        <BottomModalWindow modalRef={modalCountRoomsRef}>
          <ModalCountRooms isStudio={isStudio} range={range} setIsStudio={setIsStudio} setRange={setRange} />
        </BottomModalWindow>
      </PortalProvider>
      <PortalProvider>
        <BottomModalWindow modalRef={modalReturnTypeRef}>
          <ModalRent modalRef={modalReturnTypeRef} returnType={returnType} setReturnType={setReturnType} />
        </BottomModalWindow>
      </PortalProvider>
    </>
  )
}


const stylesTabAdvancedSearch = StyleSheet.create({

})