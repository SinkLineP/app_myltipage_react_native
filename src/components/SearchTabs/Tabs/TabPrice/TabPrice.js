import React, {useRef, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import {Switch} from "react-native-switch";
import {BottomModalWindow} from "../../../BottomModalWindow/BottomModalWindow";
import {PortalProvider} from "@gorhom/portal";
import Slider from "@react-native-community/slider";


export default function TabPrice() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [multiLevel, setMultiLevel] = useState(false);
  const [kitchenLivingRoom, setKitchenLivingRoom] = useState(false);
  const [isStudio, setIsStudio] = useState(false);
  const symbolCurrency = "₽";
  const modalCountRoomsRef = useRef(null);

  const [range, setRange] = useState(1);
  const [sliding, setSliding] = useState("Inactive");


  return (
    <>
      <ContainerTab isShowRow={false}>
        <View>
          <Text style={stylesTabPrice.title}>Цена, {symbolCurrency}</Text>
          <View style={stylesTabPrice.containerPrice}>
            <TextInput keyboardType={"numeric"} style={stylesTabPrice.input} onChangeText={(value) => {setMinPrice(value)}} value={minPrice} placeholder={"От"} />
            <TextInput keyboardType={"numeric"} style={stylesTabPrice.input} onChangeText={(value) => {setMaxPrice(value)}} value={maxPrice} placeholder={"До"} />
          </View>
        </View>
        <View style={stylesTabPrice.containerCountRoom}>
          <Text style={stylesTabPrice.title}>Количество комнат</Text>
          <Text style={stylesTabPrice.btnCountRooms} onPress={() => {
            modalCountRoomsRef.current?.open()
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
      <PortalProvider>
        <BottomModalWindow modalRef={modalCountRoomsRef}>
          <View style={stylesTabPrice.containerModal}>
            <View style={stylesTabPrice.containerCountRoom}>
              <Text style={stylesTabPrice.title}>Студия</Text>
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
            <View style={stylesTabPrice.containerSlider}>
              <Text style={stylesTabPrice.title}>Количество комнат: {range === 10 ? range + "+" : range}</Text>

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
  containerCountRoom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center"
  },
  btnCountRooms: {
    backgroundColor: "tomato",
    color: "white",
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold"
  },
  containerSlider: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  containerModal: {
    paddingHorizontal: 20,
    paddingBottom: 10
  }
})