import React from "react";
import {StyleSheet, Text} from "react-native";


export default function CustomBtn({title, press, disabled}) {
  const TemplateBtn = ({style, pressTemplate, titleTemplate}) => (
    <Text style={style} onPress={pressTemplate} type={"submit"}>{titleTemplate}</Text>
  )

  if (disabled) {
    return <TemplateBtn style={CustomBtnStyles.disableBtnSubmit} pressTemplate={() => {}} titleTemplate={title} />
  } else {
    return <TemplateBtn style={CustomBtnStyles.btnSubmit} pressTemplate={press} titleTemplate={title} />
  }
}


const CustomBtnStyles = StyleSheet.create({
  btnSubmit: {
    padding: 10,
    backgroundColor: "#048f9d",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  disableBtnSubmit: {
    padding: 10,
    backgroundColor: "#79abb2",
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
})