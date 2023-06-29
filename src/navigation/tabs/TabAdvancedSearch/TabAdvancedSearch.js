import React, {useEffect, useRef, useState} from "react";
import TabInputCodeEstate from "../TabInputCodeEstate/TabInputCodeEstate";
import {TabSwitch} from "../TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../TabCategoryEstate/TabCategoryEstate";
import {PortalProvider} from "@gorhom/portal";
import TabPrice from "../TabPrice/TabPrice";
import {Button, Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {Switch} from "react-native-switch";
import Slider from "@react-native-community/slider";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import CategoriesContent from "../../screens/Search/components/CategoriesContent/CategoriesContent";
import TabAddress from "../TabAddress/TabAddress";
import {TabArea} from "../TabArea/TabArea";
import TabFloors from "../TabFloors/TabFloors";
import TabObjectInfo from "../TabObjectInfo/TabObjectInfo";
import TabExchange from "../TabExchange/TabExchange";
import TabDocs from "../TabDocs/TabDocs";
import ComponentSwitch from "../../../components/ComponentSwitch/ComponentSwitch";
import {useNavigation} from "@react-navigation/native";
import TabRent from "../TabRent/TabRent";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default function TabAdvancedSearch() {
  const [selectedSwitch, setSelectedSwitch] = useState(1);
  const [currentItem, setCurrentItem] = useState({});
  const [range, setRange] = useState(1);
  const [isStudio, setIsStudio] = useState(false);
  const [codeValues, setCodeValues] = useState("");
  const [dueDate, setDueDate] = useState("");
  const modalRefCategories = useRef(null);
  const modalCountRoomsRef = useRef(null);
  const modalDueDateRef = useRef(null);
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


  useEffect(() => {
    // give code value
    if (codeValues !== undefined && codeValues.length === 9 || codeValues !== "" && codeValues.length === 9) {
      console.log(codeValues);
    }

    //give selected switch
    if (selectedSwitch === 1) {
      console.log("buy");
    } else if (selectedSwitch === 2) {
      console.log("rent");
    }
  })

  const ButtonDueDate = ({ iconName, iconColor, title, value, setValue, dueDate }) => {
    return (
      <Pressable onPress={() => {
        setValue(value)
      }} style={{
        borderColor: "tomato",
        borderWidth: 2,
        borderRadius: 10,
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <View style={{
          borderRadius: 7,
          height: 93,
          width: 93,
          alignItems: "center",
          paddingTop: 15,
          backgroundColor: dueDate === "day" && value === "day" || dueDate === "month" && value === "month" ? "white" : "tomato",
          borderColor: "tomato",
          borderWidth: dueDate === "day" && value === "day" || dueDate === "month" && value === "month" ? 2 : 0
        }}>
          <MaterialCommunityIcons name={iconName} size={40} color={dueDate === "day" && value === "day" || dueDate === "month" && value === "month" ? "tomato" : "white"} />
          <Text style={{
            fontWeight: "bold",
            color: dueDate === "day" && value === "day" || dueDate === "month" && value === "month" ? "tomato" : "white"
          }}>{title}</Text>
        </View>
      </Pressable>
    )
  }


  return (
    <>
      <ScrollView>
        <TabInputCodeEstate setCodeValues={setCodeValues} codeValues={codeValues} />
        <ContainerTab>
          <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
          {selectedSwitch === 2 ? (<TabRent modalRef={modalDueDateRef} dueDate={dueDate} />) : ""}
        </ContainerTab>
        <TabPrice modalRef={modalCountRoomsRef} />
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
          {currentItem.length !== 0 ? (<CategoriesContent currentItem={currentItem} />) : ("") }
        </BottomModalWindow>
      </PortalProvider>
      <PortalProvider>
        <BottomModalWindow modalRef={modalCountRoomsRef}>
          <View style={stylesTabAdvancedSearch.containerModal}>
            <ComponentSwitch switchValue={isStudio} label={"Студия"} setSwitchValue={setIsStudio} otherFunction={setRange}/>
          </View>
          {isStudio !== true ? (
            <View style={stylesTabAdvancedSearch.containerSlider}>
              <Text style={stylesTabAdvancedSearch.title}>Количество комнат: {range === 10 ? range + "+" : range}</Text>

              <Slider
                style={{width: "100%", marginTop: 15}}
                minimumValue={1}
                maximumValue={10}
                minimumTrackTintColor={"tomato"}
                maximumTrackTintColor={"#000"}
                thumbTintColor={"tomato"}
                value={range}
                onSlidingComplete={value => {
                  setRange(Math.floor(value))
                }}
              />
            </View>
          ) : ("")}
        </BottomModalWindow>
      </PortalProvider>
      <PortalProvider>
        <BottomModalWindow modalRef={modalDueDateRef}>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
            marginBottom: 30
          }}>
            <ButtonDueDate iconName={"hours-24"} iconColor={"white"} title={"По Сутачно"} value={"day"} setValue={setDueDate} dueDate={dueDate} />
            <ButtonDueDate iconName={"calendar-month"} iconColor={"white"} title={"По Месячно"} value={"month"} setValue={setDueDate} dueDate={dueDate} />
          </View>
        </BottomModalWindow>
      </PortalProvider>
    </>
  )
}


const stylesTabAdvancedSearch = StyleSheet.create({
  title: {
    color: "#323232",
    fontWeight: "bold"
  },
  containerSlider: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  containerModal: {
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  containerCountRoom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center"
  }
})