import React from "react";
import {View} from "react-native";
import ButtonDueDate from "../../ButtonDueDate/ButtonDueDate";


export default function ModalRent({ setDueDate, dueDate, modalRef }) {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      marginBottom: 30
    }}>
      <ButtonDueDate iconName={"hours-24"} iconColor={"white"} title={"По Сутачно"} value={"day"} setValue={setDueDate} dueDate={dueDate} modalRef={modalRef} />
      <ButtonDueDate iconName={"calendar-month"} iconColor={"white"} title={"По Месячно"} value={"month"} setValue={setDueDate} dueDate={dueDate} modalRef={modalRef} />
    </View>
  )
}