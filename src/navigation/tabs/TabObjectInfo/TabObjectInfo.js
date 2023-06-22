import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import RangeField from "../../../components/RangeField/RangeField";
import ComponentSwitch from "../../../components/ComponentSwitch/ComponentSwitch";

export default function TabObjectInfo() {
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxTear] = useState("");

  const [isHaveBalcony, setIsHaveBalcony] = useState(false)

  return (
    <ContainerTab>
      <View>
        <Text>Год постройки</Text>
        <RangeField minValue={minYear} setMaxValue={setMaxTear} maxValue={maxYear} setMinValue={setMinYear} />
        <Text>Жилой комплекс</Text>
        <Text>Отделка</Text>
        <Text>Материал стен</Text>
        <Text>Окна</Text>
        <ComponentSwitch switchValue={isHaveBalcony} setSwitchValue={setIsHaveBalcony} label={"Балкон"} />
        <Text>Парковка</Text>
      </View>
    </ContainerTab>
  )
}

const stylesTabObjectInfo = StyleSheet.create({

})