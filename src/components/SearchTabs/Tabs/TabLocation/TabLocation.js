import React, {useState} from "react";
import {Button, Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import {Animated, Marker} from 'react-native-maps';
import {useDispatch, useSelector} from "react-redux";
import {API_KEY_GeoAPIFY} from "../../../../Variables/ServerConfig";
import SearchInputPlacesMap from "./SearchInputPlacesMap";
import {saveAddress, setCoordinates} from "../../../../store/Slices/searchMapSlice";


export const TabLocation = () => {
  const dispatch = useDispatch();
  const coordinateStore = useSelector(state => state.searchMap.currentCoordinate);
  const addressStore = useSelector(state => state.searchMap.currentAddress);
  const [region, setRegion] = useState({
    latitude: coordinateStore.lat,
    longitude: coordinateStore.lon,
    latitudeDelta: 0.1022,
    longitudeDelta: 0.0621,
  })
  const [mapType, setMapType] = useState("");
  const [item, setItem] = useState({});

  const GeocodingPlaces = () => {
    const [city, setCity] = useState("");

    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${region.latitude}&lon=${region.longitude}&type=city&format=json&apiKey=${API_KEY_GeoAPIFY}`)
      .then(response => response.json())
      .then(result => {
        setCity(result.results[0].formatted)
      })

    if (city !== "") {
      return city;
    }
  }

  return (
    <ContainerTab>
      <View style={stylesTabWithIcon.content}>
        <Animated
          toolbarEnabled={false}
          zoomControlEnabled={true}
          region={region}
          rotateEnabled={false}
          showsUserLocation={true}
          style={{
            width: Dimensions.get("window").width - 25,
            height: Dimensions.get("window").height / 2,
            marginLeft: 7.5
          }}
          onRegionChangeComplete={(region) => {
            setRegion({
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            })
          }}
        >
          <Marker
            pinColor="tomato"
            coordinate={{latitude: region.latitude, longitude: region.longitude}}
          >
          </Marker>
        </Animated>

        <SearchInputPlacesMap getCoordinate={(value) => {
          setItem(value);
        }} />

        <View style={{paddingTop: 30}}>
          <Button
            title={"Сохранить"}
            onPress={() => {
              dispatch(setCoordinates({
                lat: Number(item.properties.lat),
                lon: Number(item.properties.lon),
              }))
              dispatch(saveAddress({
                address: item.properties.formatted
              }))
            }}
            color={"#58955a"} />
        </View>

        <View style={{
          backgroundColor: "white",
          height: 100,
          width: "65%",
          position: "absolute",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
          bottom: 72,
          marginLeft: Dimensions.get("window").width / 6,
        }}>
          <ScrollView>
            <Text style={{}}>Lat: {region.latitude} {'\n'}Lon: {region.longitude}</Text>
            <Text>City: <GeocodingPlaces /></Text>
            <Text>City Store: {addressStore}</Text>
          </ScrollView>
        </View>

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
  content: {
    width: "100%"
  }
})