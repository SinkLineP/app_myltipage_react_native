import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";


const ShowIcon = ({ typeIcon, iconName }) => {
  if (typeIcon === "entypo") {
    return <Entypo name={iconName} size={24} color="tomato" />;
  } else if (typeIcon === "material") {
    return <MaterialCommunityIcons name={iconName} size={24} color="tomato" />
  }
}

export default function TabLink({ navigation, route, title, iconName, typeIcon }) {
  return (
    <Pressable onPress={() => {
      navigation.navigate(route)
    }}>
      <ContainerTab isShowRow={true}>
        <View style={stylesTabLink.containerLocationButton}>
          <View>
            <ShowIcon typeIcon={typeIcon} iconName={iconName} />
          </View>
          <Text style={stylesTabLink.title}>{title}</Text>
        </View>
      </ContainerTab>
    </Pressable>
  )
}

const stylesTabLink = StyleSheet.create({
  containerLocationButton: {
    paddingHorizontal: 15,
    flexDirection: "row"
  },
  title: {
    paddingTop: 2,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#323232"
  }
})