import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';
import CustomSwitch from "../../../components/CustomSwitch/CustomSwitch";


const TabWithIcon = ({title, iconName, iconSize, iconColor}) => {
  return (
    <View style={stylesSearch.tab}>
      <Entypo style={stylesSearch.tabIcon} name={iconName} size={iconSize} color={iconColor} />
      <Text style={stylesSearch.tabTitle}>{title}</Text>
    </View>
  )
}

const TabSwitch = ({setSelectedSwitch, option1, option2, selectedColor}) => {


  return (
    <View style={stylesSearch.tab}>
      <View style={stylesSearch.placeholderForSwitch}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={option1}
          option2={option2}
          onSelectSwitch={setSelectedSwitch}
          selectionColor={selectedColor}
        />
      </View>
    </View>
  )
}

export default function Search() {
  const [selectedSwitch, setSelectedSwitch] = useState("");


  return (
    <View style={stylesSearch.container}>
      <TabWithIcon title={"location"} iconColor={"tomato"} iconName={"location"} iconSize={24} />
      <TabSwitch option1={"Купить"} option2={"Снять"} setSelectedSwitch={setSelectedSwitch} selectedColor={"tomato"} />
    </View>
  )
}

const stylesSearch = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  tab: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5
  },
  tabTitle: {
    width: "80%",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontSize: 18,
    color: "#323232"
  },
  tabIcon: {
    width: "20%",
    textAlign: "center"
  },
  placeholderForSwitch: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 2,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 20,
  },
})