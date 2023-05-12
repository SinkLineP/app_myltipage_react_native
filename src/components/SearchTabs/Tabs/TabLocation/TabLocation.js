import React, {useState} from "react";
import {Dimensions, StyleSheet, TextInput, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import MapView, {Animated} from 'react-native-maps';
import {useSelector} from "react-redux";


export const TabLocation = () => {
  const coordinateStore = useSelector(state => state.searchMap.currentCoordinate);


  return (
    <ContainerTab>
      <View style={stylesTabWithIcon.content}>
        <Animated
          region={{
            latitude: coordinateStore.lat,
            longitude: coordinateStore.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            width: Dimensions.get("window").width - 25,
            height: Dimensions.get("window").height / 2,
            marginLeft: 7.5
          }}
        />
      </View>
    </ContainerTab>
  )
}


const stylesTabWithIcon = StyleSheet.create({
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
  searchInput: {
    borderWidth: 1,
    borderColor: "#323232",
    marginTop: 10,
    height: 30,
    lineHeight: 10,
    paddingLeft: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%"
  },
})