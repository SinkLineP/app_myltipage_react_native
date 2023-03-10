import React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

export default function UnFilledStar({widthImage, heightImage}) {


  return (
    <View>
      <Svg width={widthImage} height={heightImage} viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M48 1.61804L58.7502 34.7037L58.8624 35.0491H59.2257H94.014L65.8697 55.4972L65.5758 55.7107L65.688 56.0562L76.4382 89.1418L48.2939 68.6938L48 68.4803L47.7061 68.6938L19.5618 89.1418L30.312 56.0562L30.4242 55.7107L30.1303 55.4972L1.98601 35.0491H36.7743H37.1376L37.2498 34.7037L48 1.61804Z" stroke="#EAC25C"/>
      </Svg>
    </View>
  )
}

const stylesUnFilledStar = StyleSheet.create({

})