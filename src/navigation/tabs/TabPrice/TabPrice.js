import React, {useRef, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {Switch} from "react-native-switch";
import {BottomModalWindow} from "../../../components/BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import Slider from "@react-native-community/slider";
import RangeField from "../../../components/RangeField/RangeField";


export default function TabPrice({ modalRef }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [multiLevel, setMultiLevel] = useState(false);
  const [kitchenLivingRoom, setKitchenLivingRoom] = useState(false);
  const symbolCurrency = "₽";


  return (
    <>
      <ContainerTab isShowRow={false}>
        <View>
          <Text style={stylesTabPrice.title}>Цена, {symbolCurrency}</Text>
          <RangeField maxValue={maxPrice} minValue={minPrice} setMaxValue={setMaxPrice} setMinValue={setMinPrice} />
        </View>
        <View style={stylesTabPrice.containerCountRoom}>
          <Text style={stylesTabPrice.title}>Количество комнат</Text>
          <Text style={stylesTabPrice.btnCountRooms} onPress={() => {
            modalRef.current?.open()
          }}>Выберите..</Text>
        </View>
        <View style={stylesTabPrice.containerSwitch}>
          <Text style={stylesTabPrice.title}>Многоуровневая</Text>
          <Switch
            value={multiLevel}
            onValueChange={() => {
              setMultiLevel(!multiLevel)
            }}
            disabled={false}
            renderActiveText={false}
            renderInActiveText={false} barHeight={20} circleSize={20}
          />
        </View>
        <View style={stylesTabPrice.containerSwitch}>
          <Text style={stylesTabPrice.title}>Кухня-гостиная</Text>
          <Switch
            value={kitchenLivingRoom}
            onValueChange={() => {
              setKitchenLivingRoom(!kitchenLivingRoom)
            }}
            disabled={false}
            renderActiveText={false}
            renderInActiveText={false} barHeight={20} circleSize={20}
          />
        </View>
      </ContainerTab>
    </>
  )
}

const stylesTabPrice = StyleSheet.create({
  containerPrice: {
    gap: 5,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10
  },
  title: {
    color: "#323232",
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#d2d2d2",
    width: "50%",
    height: 50,
    paddingLeft: 10
  },
  containerSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  btnCountRooms: {
    backgroundColor: "tomato",
    color: "white",
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold"
  },
  containerCountRoom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center"
  }
})