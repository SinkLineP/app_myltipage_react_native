import React, {useState} from "react";
import {Button, Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import ContainerTab from "../../ContainerTab/ContainerTab";
import {Animated, Marker} from 'react-native-maps';
import {useDispatch, useSelector} from "react-redux";
import SearchInputPlacesMap from "./SearchInputPlacesMap";
import {saveAddress, setCoordinates} from "../../../../store/Slices/searchMapSlice";
import {showGeocodingPlaces} from "../../../../db/getData";
import * as opencage from "opencage-api-client";
import {API_KEY_OpenCage} from "../../../../Variables/ServerConfig";


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
  const [currentPosition, setCurrentPosition] = useState({
    latitude: region.latitude,
    longitude: region.longitude,
    address: "",
  });

  const [estates, setEstates] = useState([{
    id: 0,
    address: "карла маркса 1",
    price: "100.000 р",
    coords: {
      latitude: 46.716390928360745,
      longitude: 38.27924375108283,
    },
    type: "квартира"
  },{
    id: 1,
    address: "парк поддубного",
    price: "100.000.000 р",
    coords: {
      latitude: 46.7040401076462,
      longitude: 38.26096159038479,
    },
    type: "парк"
  }])

  const reverseGeocode = () => {
    const key = API_KEY_OpenCage;
    return opencage.geocode({ key, q: `${currentPosition.latitude},${currentPosition.longitude}`}).then(response => {
      return typeof response.results[0].components.allotments !== "undefined" ? `${response.results[0].components.allotments}, ${response.results[0].formatted}` : response.results[0].formatted;
    });
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
            setCurrentPosition({
              latitude: region.latitude,
              longitude: region.longitude,
            })
          }}
        >
          {
            estates.map(estate => {
              return (
                <Marker
                  pinColor="tomato"
                  coordinate={{latitude: estate.coords.latitude, longitude: estate.coords.longitude}}
                >
                  <View style={stylesTabWithIcon.customMarker}>
                    <Text>Адрес: {estate.address}</Text>
                    <Text>Цена: {estate.price}</Text>
                  </View>
                </Marker>
              )
            })
          }

        </Animated>

        <View style={{paddingTop: 30}}>
          <Button
            title={"Сохранить"}
            onPress={() => {
              dispatch(setCoordinates({
                lat: Number(currentPosition.latitude),
                lon: Number(currentPosition.longitude),
              }))
              reverseGeocode().then(address => {
                dispatch(saveAddress({
                  address: address,
                }))
              });
            }}
            color={"#58955a"} />
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
  },
  customMarker: {
    backgroundColor: "tomato",
  }
})