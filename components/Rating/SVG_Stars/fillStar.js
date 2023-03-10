import React from "react";
import Svg, {Path} from "react-native-svg";
import {View, StyleSheet} from "react-native";

export default function FillStar({widthImage, heightImage, color}) {


  return (
    <View>
      <Svg width={widthImage} height={heightImage} viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M48 0L59.2257 34.5491H95.5528L66.1636 55.9017L77.3893 90.4509L48 69.0983L18.6107 90.4509L29.8364 55.9017L0.447174 34.5491H36.7743L48 0Z" fill={color === "" ? "#EAC25C" : color}/>
      </Svg>
    </View>
  )
}

const stylesFillStar = StyleSheet.create({

})