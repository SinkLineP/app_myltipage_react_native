import {Text} from "react-native";
import React from "react";


export const OutputField = ({stylesContent, content, field, fieldStyles}) => {
  const textEmpty = "не указано"

  if (field !== undefined) {
    return (
      <Text style={stylesContent}>{content}<Text style={fieldStyles}>{field !== "" ? field : textEmpty}</Text></Text>
    );
  } else {
    return (
      <Text style={stylesContent}>{content !== "" ? content : textEmpty}</Text>
    );
  }
}