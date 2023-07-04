import React from "react";
import CustomSwitch from "../../../../../../components/CustomSwitch/CustomSwitch";


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
