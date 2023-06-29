import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import ComponentSwitch from "../../../components/ComponentSwitch/ComponentSwitch";


export default function TabRent({ modalRef, dueDate }) {
  const [isSummerEviction, setIsSummerEviction] = useState(false);


  return (
    <View style={stylesTabRent.container}>
      <View style={stylesTabRent.containerSummerEviction}>
        <Text style={stylesTabRent.title}>{dueDate !== "" ? `Срок сдачи - ${dueDate === "day" ? "по сутачно" : "по месячно"}` : "Срок сдачи"}</Text>
        <Text style={stylesTabRent.btnCountRooms} onPress={() => {
          modalRef.current?.open()
        }}>Выберите..</Text>
      </View>

      <ComponentSwitch label={"Без выселения на лето"} switchValue={isSummerEviction} setSwitchValue={setIsSummerEviction} />
    </View>
  )
}

const stylesTabRent = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    color: "#323232",
    fontWeight: "bold"
  },
  btnCountRooms: {
    backgroundColor: "tomato",
    color: "white",
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold"
  },
  containerSummerEviction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7
  }
})