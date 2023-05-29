import React from "react";
import {View} from "react-native";
import CustomSwitch from "../../../CustomSwitch/CustomSwitch";
import ContainerTab from "../../ContainerTab/ContainerTab";


export const TabSwitch = ({setSelectedSwitch, option1, option2, selectedColor, isCottage}) => {
  return (
    <ContainerTab isShowRow={false}>
      <View style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 2,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 20,
      }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={option1}
          option2={option2}
          onSelectSwitch={setSelectedSwitch}
          selectionColor={selectedColor}
        />
      </View>
    </ContainerTab>
  )
}
