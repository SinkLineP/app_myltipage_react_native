import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AboutStack = createNativeStackNavigator();

export default function About() {
  return (
    <>
      <View style={globalStyles.containerNoFlex}>
        <Text>About Screen</Text>
      </View>

      <AboutStack.Screen
        name="About"
        component={About}
      />
    </>
  )
}
