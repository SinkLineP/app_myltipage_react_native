import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import TextInputMasked from "../../screens/Authorization/components/TextInputMasked/TextInputMasked";

export default function TabInputCodeEstate() {
  const [codeValues, setCodeValues] = useState();

  return (
    <ContainerTab isShowRow={true}>
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