import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import MapView from 'react-native-maps';


export const TabLocation = () => {
  return (
    <ContainerTab>
      <View style={stylesTabWithIcon.content}>
        <MapView
          style={{
            width: Dimensions.get("window").width - 25,
            height: Dimensions.get("window").height / 2,
            marginLeft: 7.5
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
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
  content: {
  },
})