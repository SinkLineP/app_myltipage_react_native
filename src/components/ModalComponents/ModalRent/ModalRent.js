import React from "react";
import {View} from "react-native";
import ButtonReturnType from "../../ButtonReturnType/ButtonReturnType";


export default function ModalRent({ setReturnType, returnType, modalRef }) {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      marginBottom: 30
    }}>
      <ButtonReturnType
        iconName={"hours-24"}
        iconColor={"white"}
        title={"По Сутачно"}
        value={"day"}
        setValue={setReturnType}
        returnType={returnType}
      />
      <ButtonReturnType
        iconName={"calendar-month"}
        iconColor={"white"}
        title={"По Месячно"}
        value={"month"}
        setValue={setReturnType}
        returnType={returnType}
      />
    </View>
  )
}