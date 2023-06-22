import React, {useEffect, useState} from "react";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {Text, TextInput, View} from "react-native";
import RangeField from "../../../components/RangeField/RangeField";


export function TabArea() {
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  const [minAreaKitchen, setMinAreaKitchen] = useState("");
  const [maxAreaKitchen, setMaxAreaKitchen] = useState("");


  return (
    <ContainerTab>
      <View style={{marginBottom: 10}}>
        <Text>Площадь, м<Text>2</Text></Text>

        <RangeField setMinValue={setMinArea} minValue={minArea} setMaxValue={setMaxArea} maxValue={maxArea} />
      </View>

      <View>
        <Text>Площадь кухни, м<Text>2</Text></Text>

        <RangeField setMinValue={setMinAreaKitchen} minValue={minAreaKitchen} setMaxValue={setMaxAreaKitchen} maxValue={maxAreaKitchen} />
      </View>
    </ContainerTab>
  )
}