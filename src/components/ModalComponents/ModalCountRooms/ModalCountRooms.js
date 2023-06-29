import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ComponentSwitch from "../../ComponentSwitch/ComponentSwitch";
import Slider from "@react-native-community/slider";


export default function ModalCountRooms({ isStudio, setIsStudio, setRange, range }) {
  return (
    <>
      <View style={stylesModalCountRooms.containerModal}>
        <ComponentSwitch switchValue={isStudio} label={"Студия"} setSwitchValue={setIsStudio} otherFunction={setRange}/>
      </View>
      {isStudio !== true ? (
        <View style={stylesModalCountRooms.containerSlider}>
          <Text style={stylesModalCountRooms.title}>Количество комнат: {range === 10 ? range + "+" : range}</Text>

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
    </>
  )
}

const stylesModalCountRooms = StyleSheet.create({
  containerModal: {
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  containerCountRoom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center"
  },
  containerSlider: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: "#323232",
    fontWeight: "bold"
  },
})