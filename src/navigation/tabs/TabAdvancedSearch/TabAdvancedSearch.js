import React, {useEffect, useRef, useState} from "react";
import TabInputCodeEstate from "../TabInputCodeEstate/TabInputCodeEstate";
import {TabSwitch} from "../TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../TabCategoryEstate/TabCategoryEstate";
import {PortalProvider} from "@gorhom/portal";
import TabPrice from "../TabPrice/TabPrice";
import {ScrollView, StyleSheet, Text} from "react-native";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import TabAddress from "../TabAddress/TabAddress";
import {TabArea} from "../TabArea/TabArea";
import TabFloors from "../TabFloors/TabFloors";
import TabObjectInfo from "../TabObjectInfo/TabObjectInfo";
import TabExchange from "../TabExchange/TabExchange";
import TabDocs from "../TabDocs/TabDocs";
import {useNavigation} from "@react-navigation/native";
import TabRent from "../TabRent/TabRent";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import ModalCategories from "../../../components/ModalComponents/ModalCategories/ModalCategories";
import ModalCountRooms from "../../../components/ModalComponents/ModalCountRooms/ModalCountRooms";
import ModalRent from "../../../components/ModalComponents/ModalRent/ModalRent";


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
  const navigation = useNavigation();
  const ads = [
    {
    codeObject: 123345678,
    typeAds: "sell", //rent
    price: 10000,
    countRooms: 5,
    isMultiLevel: false,
    isKitchenLivingRoom: false,
    category: "Квартира",
    address: "Россия, Краснодарский край, Ейск, ул. Карла Маркса, д. 1",
    area: 100,
    areaKitchen: 20,
    floor: 2,
    floors: 11,
    yearBuild: 1980,
    apartmentComplex: "none",
    finishing: "",
    materialWalls: "",
    windows: "",
    isHaveBalcony: false,
    isHaveParking: false,
    isExchange: false,
    isHavePhoto: true,
    isHavePlans: false,
    images: ["dsadasdad", "dsdasdasd", "dsdsdsds"],
    plans: [],
    desc: ""
  },
    {
    codeObject: 145245678,
    typeAds: "sell", //rent
    price: 10002220,
    countRooms: 3,
    isMultiLevel: true,
    isKitchenLivingRoom: true,
    category: "Дом",
    address: "Россия, Краснодарский край, Ейск, ул. Калинина, д. 272",
    area: 120,
    areaKitchen: 40,
    floor: null,
    floors: 2,
    yearBuild: 2000,
    apartmentComplex: "none",
    finishing: "euro",
    materialWalls: "brick",
    windows: "plastic",
    isHaveBalcony: true,
    isHaveParking: true,
    isExchange: false,
    isHavePhoto: true,
    isHavePlans: false,
    images: ["photo1", "photo2", "photo3"],
    plans: ["plan1", "plan2"],
    desc: ""
  },
    {
    codeObject: 777888999,
    typeAds: "rent", //sell
    price: 100,
    countRooms: 7,
    isMultiLevel: false,
    isKitchenLivingRoom: false,
    category: "Квартира",
    address: "Россия, Краснодарский край, Ейск, ул. Нижнесадовая, д. 101",
    area: 80,
    areaKitchen: 15,
    floor: 1,
    floors: 1,
    yearBuild: 1960,
    apartmentComplex: "none",
    finishing: "",
    materialWalls: "",
    windows: "",
    isHaveBalcony: false,
    isHaveParking: true,
    isExchange: false,
    isHavePhoto: true,
    isHavePlans: true,
    images: ["photo1", "photo2", "photo3"],
    plans: ["plan1", "plan2"],
    desc: ""
  },{
      codeObject: 777888999,
      typeAds: "rent", //sell
      price: 100,
      countRooms: 7,
      isMultiLevel: false,
      isKitchenLivingRoom: false,
      category: "Квартира",
      address: "Россия, Краснодарский край, Ейск, ул. Нижнесадовая, д. 101",
      area: 80,
      areaKitchen: 15,
      floor: 1,
      floors: 1,
      yearBuild: 1960,
      apartmentComplex: "none",
      finishing: "",
      materialWalls: "",
      windows: "",
      isHaveBalcony: false,
      isHaveParking: true,
      isExchange: false,
      isHavePhoto: true,
      isHavePlans: true,
      images: [],
      plans: [],
      desc: ""
    }]


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
          {selectedSwitch === 2 ? (
            <TabRent modalRef={modalReturnTypeRef} returnType={returnType} setReturnType={setReturnType} />
          ) : ""}
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

      {ads.length !== 0 ? (
        <Text onPress={() => {
          navigation.navigate("ShowAds", {
            findAds: ads,
          });
        }} style={{
          backgroundColor: "tomato",
          color: "white",
          fontWeight: "bold",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 15,
          textAlign: "center",
        }}>Найдено {ads.length}, об.</Text>
      ) : ("")}

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