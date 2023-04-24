import React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";


export default function RadioButtons({items, activeRadio, dispatch, setActive}) {
  return (
    <View style={stylesRadioButtons.containerRadioButtons}>
      {items.map(itemRadio => (
        <TouchableOpacity style={stylesRadioButtons.radioButton} key={itemRadio.value} onPress={() => {
          dispatch(setActive(itemRadio.value));
        }}>
          <View style={stylesRadioButtons.circleUnFilled}>
            {activeRadio === itemRadio.value ? (
              <View style={stylesRadioButtons.circleFilled}></View>
            ) : ("")}
          </View>
          <View>
            <Text>{itemRadio.label}</Text>
          </View>
        </TouchableOpacity>
      ))}

    </View>
  )
}


const stylesRadioButtons = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    gap: 10,
    paddingLeft: 20
  },
  circleUnFilled: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#4a4848",
    borderWidth: 1
  },
  circleFilled: {
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: "#4a4848",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  containerRadioButtons: {
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
  }
})