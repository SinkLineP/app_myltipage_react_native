import React, {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import ComponentSwitch from "../../../components/ComponentSwitch/ComponentSwitch";
import {ShowModalGUI} from "../../../components/ShowModalGUI/ShowModalGUI";


export default function TabRent({ modalRef, returnType, setReturnType }) {
  const [isSummerEviction, setIsSummerEviction] = useState(false);


  return (
    <View style={stylesTabRent.container}>
      <ShowModalGUI
        modalRef={modalRef}
        title={returnType !== "" ? `Тип сдачи - ${returnType === "day" ? "по сутачно" : "по месячно"}` : "Тип сдачи"}
        value={returnType}
        setValue={setReturnType}
      />

      <ComponentSwitch label={"Без выселения на лето"} switchValue={isSummerEviction} setSwitchValue={setIsSummerEviction} />
    </View>
  )
}

const stylesTabRent = StyleSheet.create({
  container: {
    marginTop: 15,
  }
})