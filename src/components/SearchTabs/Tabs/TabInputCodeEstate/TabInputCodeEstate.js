import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import TextInputMasked from "../../../../navigation/screens/Authorization/components/TextInputMasked/TextInputMasked";

export default function TabInputCodeEstate() {
  const [codeValues, setCodeValues] = useState();

  return (
    <ContainerTab>
      <View style={stylesTabInputCodeEstate.content}>
        <Text style={stylesTabInputCodeEstate.label}>Введите код объекта: </Text>
        <TextInputMasked
          mask={"999-999-999"}
          values={codeValues}
          fontSize={16}
          funcChangeText={(noParseText, parsedText) => setCodeValues(parsedText)}
          keyboardType={"numeric"}
          placeholder={"Пример кода: 999-999-999"}
          colorBorder={"tomato"}
        />
      </View>
    </ContainerTab>
  )
}

const stylesTabInputCodeEstate = StyleSheet.create({
  content: {
    width: "90%",
    marginHorizontal: 17
  },
  label: {
    color: "#323232",
    fontWeight: "bold",
    marginBottom: 10
  }
})