import React from "react";
import {View} from "react-native";
import CustomSwitch from "../../../CustomSwitch/CustomSwitch";


export const TabSwitch = ({setSelectedSwitch, option1, option2, selectedColor, isCottage}) => {
  return (
    <View style={{
      backgroundColor: "#fff",
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
      marginBottom: 5
    }}>
      <View style={{
        width: "90%",
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
    </View>
  )
}
