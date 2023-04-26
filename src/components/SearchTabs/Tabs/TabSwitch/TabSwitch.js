import React from "react";
import {StyleSheet, View} from "react-native";
import CustomSwitch from "../../../CustomSwitch/CustomSwitch";


export const TabSwitch = ({setSelectedSwitch, option1, option2, selectedColor}) => {
  return (
    <View style={stylesTabSwitch.tab}>
      <View style={stylesTabSwitch.placeholderForSwitch}>
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


const stylesTabSwitch = StyleSheet.create({
  tab: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5
  },
  placeholderForSwitch: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 2,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 20,
  },
})