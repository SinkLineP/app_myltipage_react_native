import React, {useState} from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {StyleSheet, Text, View} from "react-native";
import RangeField from "../../../components/RangeField/RangeField";
import ComponentSwitch from "../../../components/ComponentSwitch/ComponentSwitch";

export default function TabFloors() {
  const [minFloor, setMinFloor] = useState("");
  const [maxFloor, setMaxFloor] = useState("");

  const [minFloors, setMinFloors] = useState("");
  const [maxFloors, setMaxFloors] = useState("");

  const [allExceptTheFirst, setAllExceptTheFirst] = useState(false);
  const [allExceptTheLast, setAllExceptTheLast] = useState(false);


  return (
    <ContainerTab>
      <View>
        <Text>Этаж</Text>

        <RangeField maxValue={maxFloor} setMaxValue={setMaxFloor} minValue={minFloor} setMinValue={setMinFloor} />
      </View>
      <View>
        <Text>Этажность</Text>

        <RangeField maxValue={maxFloors} setMaxValue={setMaxFloors} minValue={minFloors} setMinValue={setMinFloors} />
      </View>
      <ComponentSwitch label={"Все кроме первого"} switchValue={allExceptTheFirst} setSwitchValue={setAllExceptTheFirst} />
      <ComponentSwitch label={"Все кроме последнего"} switchValue={allExceptTheLast} setSwitchValue={setAllExceptTheLast} />
    </ContainerTab>
  )
}

const stylesTabFloors = StyleSheet.create({

})