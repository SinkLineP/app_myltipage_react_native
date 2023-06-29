import React from "react";
import {View} from "react-native";
import CustomSwitch from "../../../components/CustomSwitch/CustomSwitch";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";


export const TabSwitch = ({navigation, setSelectedSwitch, option1, option2, selectedColor, isCottage}) => {
  return (
    <CustomSwitch
      selectionMode={1}
      roundCorner={true}
      option1={option1}
      option2={option2}
      onSelectSwitch={setSelectedSwitch}
      selectionColor={selectedColor}
    />
  )
}
