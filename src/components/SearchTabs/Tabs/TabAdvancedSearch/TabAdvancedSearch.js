import React, {useRef, useState} from "react";
import TabInputCodeEstate from "../TabInputCodeEstate/TabInputCodeEstate";
import {TabSwitch} from "../TabSwitch/TabSwitch";
import {TabCategoryEstate} from "../TabCategoryEstate/TabCategoryEstate";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";
import CategoriesContent from "../../../../navigation/screens/Search/components/CategoriesContent/CategoriesContent";
import {PortalProvider} from "@gorhom/portal";
import TabPrice from "../TabPrice/TabPrice";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import {Switch} from "react-native-switch";
import Slider from "@react-native-community/slider";


export default function TabAdvancedSearch() {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const modalRefCategories = useRef(null);

  const [range, setRange] = useState(1);
  const [sliding, setSliding] = useState("Inactive");
  const [isStudio, setIsStudio] = useState(false);
  const modalCountRoomsRef = useRef(null);


  return (
    <>
      <ScrollView>
        <TabInputCodeEstate />
        <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} isCottage={false} />
        <TabPrice modalRef={modalCountRoomsRef} />
        <TabCategoryEstate setCurrentItem={setCurrentItem} modalRef={modalRefCategories} />
      </ScrollView>
      <PortalProvider>
        <BottomModalWindow modalRef={modalRefCategories}>
          {currentItem.length !== 0 ? (<CategoriesContent currentItem={currentItem} />) : ("") }
        </BottomModalWindow>
      </PortalProvider>
      <PortalProvider>
        <BottomModalWindow modalRef={modalCountRoomsRef}>
          <View style={stylesTabAdvancedSearch.containerModal}>
            <View style={stylesTabAdvancedSearch.containerCountRoom}>
              <Text style={stylesTabAdvancedSearch.title}>Студия</Text>
              <Switch
                value={isStudio}
                onValueChange={() => {
                  setRange(1);
                  setIsStudio(!isStudio);
                }}
                disabled={false}
                renderActiveText={false}
                renderInActiveText={false} barHeight={20} circleSize={20}
              />
            </View>
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