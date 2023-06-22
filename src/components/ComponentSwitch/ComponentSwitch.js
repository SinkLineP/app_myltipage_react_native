import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Switch} from "react-native-switch";


export default function ComponentSwitch({ label, switchValue, setSwitchValue }) {
  return (
    <View style={stylesComponentSwitch.containerSwitch}>
      <Text style={stylesComponentSwitch.title}>{ label }</Text>
      <Switch
        value={switchValue}
        onValueChange={() => {
          setSwitchValue(!switchValue)
        }}
        disabled={false}
        renderActiveText={false}
        renderInActiveText={false} barHeight={20} circleSize={20}
      />
    </View>
  )
}

const stylesComponentSwitch = StyleSheet.create({
  containerSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  title: {
    color: "#323232",
    fontWeight: "bold"
  },
})