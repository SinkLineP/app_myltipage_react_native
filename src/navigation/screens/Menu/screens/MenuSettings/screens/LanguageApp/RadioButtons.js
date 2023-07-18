import React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {
  controllerTheme_RadioButton_Background,
  controllerTheme_RadioButton_CircleFilled,
  controllerTheme_RadioButton_CircleUnFilled,
  controllerTheme_RadioButton_Title
} from "../../../../../../../controllers/Theme/Theme";


export default function RadioButtons({items, activeRadio, dispatch, setActive, theme}) {
  return (
    <View style={stylesRadioButtons.containerRadioButtons}>
      {items.map(itemRadio => (
        <TouchableOpacity style={{
          flexDirection: "row",
          backgroundColor: controllerTheme_RadioButton_Background(theme, "#fff"),
          padding: 12,
          gap: 10,
          paddingLeft: 20
        }} key={itemRadio.value} onPress={() => {
          dispatch(setActive(itemRadio.value));
        }}>
          <View style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderColor: controllerTheme_RadioButton_CircleUnFilled(theme, "#4a4848"),
            borderWidth: 1
          }}>
            {activeRadio === itemRadio.value ? (
              <View style={{
                width: 16,
                height: 16,
                borderRadius: 10,
                backgroundColor: controllerTheme_RadioButton_CircleFilled(theme, "#4a4848"),
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
              }}></View>
            ) : ("")}
          </View>
          <View>
            <Text style={{
              color: controllerTheme_RadioButton_Title(theme, "black")
            }}>{itemRadio.label}</Text>
          </View>
        </TouchableOpacity>
      ))}

    </View>
  )
}


const stylesRadioButtons = StyleSheet.create({
  containerRadioButtons: {
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
  }
})